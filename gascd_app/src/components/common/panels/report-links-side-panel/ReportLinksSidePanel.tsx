import React from "react";

const ReportLinksSidePanel: React.FC = () => {
  const reports: Array<string> = [
    "Report builder",
    "Sample report one",
    "Sample report two",
  ];

  return (
    <div className="dhsc-grey-panel-container">
      <h1 className="govuk-heading-s">Reports</h1>
      <p className="govuk-body-s">
        Option of building your own reports as well as using pre-designed
        reports
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

export default ReportLinksSidePanel;
