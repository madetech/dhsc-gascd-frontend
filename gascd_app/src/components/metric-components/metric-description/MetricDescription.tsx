import React from "react";

type Props = {
  title: string;
  body: string;
  dataSource: string;
};

const MetricDescription: React.FC<Props> = ({ title, body, dataSource }) => {
  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-m">{title}</h2>
          <p className="govuk-body">{body}</p>
        </div>
      </div>
      <div className="govuk-grid-row govuk-!-margin-bottom-2">
        <div className="govuk-grid-column-full">
          <p className="govuk-body">
            <span className="govuk-!-font-weight-bold">Data Source: </span>{" "}
            <a href="#" className="govuk-link">
              {dataSource}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default MetricDescription;
