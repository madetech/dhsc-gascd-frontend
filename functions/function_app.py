import azure.functions as func
import logging
from azure.identity import ManagedIdentityCredential
import pyodbc
import struct
import pandas as pd
import os
from dotenv import load_dotenv

load_dotenv()

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

connection_string = "Driver={ODBC Driver 18 for SQL Server};Server=tcp:dapalpha-sql-data-" + os.getenv(
    "ENVIRONMENT") + ".database.windows.net,1433;Database=Analytical_Datastore;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30"

credential = ManagedIdentityCredential(
    client_id=os.getenv("MANAGED_IDENTITY_CLIENT_ID"))

token_bytes = credential.get_token(
    "https://database.windows.net/.default").token.encode("UTF-16-LE")

token_struct = struct.pack(
    f'<I{len(token_bytes)}s', len(token_bytes), token_bytes)

SQL_COPT_SS_ACCESS_TOKEN = 1256

conn = pyodbc.connect(connection_string, attrs_before={
                      SQL_COPT_SS_ACCESS_TOKEN: token_struct})


@app.route(route="get_capacity_tracker_data")
def get_capacity_tracker_data(req: func.HttpRequest) -> func.HttpResponse:
    try:
        location_level = req.params.get("location_level")

        if not location_level:
            return func.HttpResponse(
                "location_level parameter is required",
                status_code=400
            )

        query = """
            SELECT location_name, metric, value 
            FROM Capacity_Tracker.all_metrics 
            WHERE metric = ? AND location_level = ?
        """

        df = pd.read_sql(query, conn, params=(
            "Percentage of total hours worked that are agency", location_level))

        return func.HttpResponse(
            df.to_json(orient="records"),
            status_code=200
        )

    except Exception as e:
        return func.HttpResponse(
            f"An error occurred: {str(e)}",
            status_code=500
        )
