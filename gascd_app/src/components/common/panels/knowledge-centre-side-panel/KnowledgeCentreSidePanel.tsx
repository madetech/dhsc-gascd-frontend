import React from "react";

const KnowledgeCentreSidePanel: React.FC = () => {
  const reports: Array<string> = [
    "About",
    "FAQ's",
    "Webinars",
    "Help",
    "Forum",
  ];

  return (
    <div className="dhsc-grey-panel-container">
      <h1 className="govuk-heading-s">Knowledge Centre</h1>
      <p className="govuk-body-s">
        Here is a collection of resources, guidance, articles and webinars
        enabling you to find answers to your questions
      </p>
      <ul className="govuk-list govuk-list--bullet">
        {reports.map((report, index) => (
          <li key={index} className="govuk-!-margin-bottom-0">
            <a className="govuk-link" href="#">
              {report}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KnowledgeCentreSidePanel;
