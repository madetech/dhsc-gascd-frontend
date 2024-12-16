import React from "react";

const HomePageDataDefinitionsPanel: React.FC = () => {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
        <div className="dhsc-white-panel-container">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <p className="govuk-body govuk-!-font-weight-bold govuk-!-margin-top-0 govuk-!-margin-bottom-1">
                Data definitions
              </p>
            </div>
          </div>
          <div className="govuk-grid-row govuk-!-margin-top-2">
            <div className="govuk-grid-column-full">
              <p className="govuk-body govuk-!-margin-bottom-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageDataDefinitionsPanel;
