import React from "react";

type Props = {
  headers: Array<String>;
  tableData: Array<any>;
};

const MetricTable: React.FC<Props> = ({ headers, tableData }) => {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
        <table className="govuk-table">
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              {headers.map((header, index) => (
                <th key={index} scope="col" className="govuk-table__header">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            {tableData.map((entry, index) => (
              <tr key={index} className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  {entry.xAxisValue}
                </th>
                <td className="govuk-table__cell">
                  {(entry.value * 100).toFixed(2) + "%"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MetricTable;
