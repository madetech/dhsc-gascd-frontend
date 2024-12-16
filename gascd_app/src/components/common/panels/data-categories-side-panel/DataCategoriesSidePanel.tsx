import React from "react";

const DataCategoriesSidePanel: React.FC = () => {
  const dataCategories: Array<string> = [
    "ASC market supply",
    "Quality of care",
    "User outcomes",
    "Financial health of the ASC sector",
    "ASC capacity",
    "ASC workforce",
    "Demand and demographics",
  ];

  return (
    <div className="dhsc-blue-panel-container">
      <h1 className="govuk-heading-m dhsc-!-text-white">Data categories</h1>
      <ul className="govuk-list govuk-list--bullet">
        {dataCategories.map((dataCategory, index) => (
          <li key={index} className="govuk-!-margin-bottom-0 dhsc-!-text-white">
            <a
              className="govuk-link dhsc-!-text-white govuk-!-font-weight-bold"
              href="#"
            >
              {dataCategory}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataCategoriesSidePanel;
