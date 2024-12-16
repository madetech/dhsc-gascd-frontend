import React from "react";
import "./dataLimitationsContainer.scss";

type Props = {
  header: string;
  body: string;
};

const DataLimitationsContainer: React.FC<Props> = ({ header, body }) => {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
        <div className="dhsc-data-limitations-panel-container">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full dhsc-data-limitations-panel-container-header-row">
              <p className="govuk-body govuk-!-font-weight-bold dhsc-!-text-white govuk-!-margin-top-0 govuk-!-margin-bottom-1">
                {header}
              </p>
            </div>
          </div>
          <div className="govuk-grid-row govuk-!-margin-top-2">
            <div className="govuk-grid-column-full">
              <p className="govuk-body govuk-!-margin-bottom-0">{body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataLimitationsContainer;
