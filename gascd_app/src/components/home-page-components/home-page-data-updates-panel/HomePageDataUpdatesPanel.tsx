import React from "react";
import "./homePageDataUpdatesPanel.scss";

const HomePageDataUpdatesPanel: React.FC = () => {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
        <div className="dhsc-data-updates-panel-container">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full dhsc-data-updates-panel-container-header-row">
              <p className="govuk-body govuk-!-font-weight-bold dhsc-!-text-white govuk-!-margin-top-0 govuk-!-margin-bottom-1">
                Data updates
              </p>
            </div>
          </div>
          <div className="govuk-grid-row govuk-!-margin-top-2">
            <div className="govuk-grid-column-full">
              <p className="govuk-body govuk-!-margin-bottom-0">
                Latest Data releases
              </p>
              <p className="govuk-body govuk-!-margin-bottom-0">
                <a href="#" className="govuk-link ">
                  ASCOF
                </a>
                , data has been updated as of 1 September 2024
              </p>
              <p className="govuk-body govuk-!-margin-bottom-0">
                <a href="#" className="govuk-link ">
                  Nuffield Trust
                </a>
                , has updated information as of 30 August 2024
              </p>
              <p className="govuk-body govuk-!-margin-bottom-0">
                <a href="#" className="govuk-link ">
                  CQC
                </a>
                , released new information as of 19 August 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageDataUpdatesPanel;
