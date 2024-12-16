import React from "react";

const HomePageAddFavouriteMetricsPanel: React.FC = () => {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
        <div className="dhsc-blue-panel-container">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-three-quarters">
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-full">
                  <p className="govuk-body govuk-!-font-weight-bold dhsc-!-text-white govuk-!-margin-bottom-1">
                    Add your favourite metrics here...
                  </p>
                </div>
              </div>
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-full">
                  <p className="govuk-body dhsc-!-text-white govuk-!-margin-bottom-1">
                    You can add your regular or favourite metrics here
                  </p>
                </div>
              </div>
            </div>
            <div className="govuk-grid-column-one-quarter govuk-!-text-align-right">
              <button
                type="submit"
                className="govuk-button govuk-button--secondary govuk-!-margin-top-1 govuk-!-margin-bottom-0"
                data-module="govuk-button"
              >
                Add metrics
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageAddFavouriteMetricsPanel;
