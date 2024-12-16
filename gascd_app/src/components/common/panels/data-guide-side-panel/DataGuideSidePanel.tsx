import React from "react";

const DataGuideSidePanel: React.FC = () => {
  const dataResources: Array<string> = [
    "Data sources",
    "API Guide",
    "View the Metadata",
  ];
  return (
    <div className="dhsc-grey-panel-container">
      <h1 className="govuk-heading-s">Data</h1>
      <p className="govuk-body-s">
        Resources to connect to the API and background on the data sources
      </p>
      <ul className="govuk-list govuk-list--bullet">
        {dataResources.map((dataResource, index) => (
          <li key={index} className="govuk-!-margin-bottom-0">
            <a className="govuk-link" href="#">
              {dataResource}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataGuideSidePanel;
