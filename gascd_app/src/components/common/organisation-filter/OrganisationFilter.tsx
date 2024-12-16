import React from "react";

const OrganisationFilter: React.FC = () => {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-half govuk-!-text-align-right">
        <p className="govuk-body-s govuk-!-margin-top-2 govuk-!-margin-bottom-2">
          Organisation View:
        </p>
      </div>
      <div className="govuk-grid-column-one-quarter govuk-!-padding-left-0">
        <div className="govuk-form-group govuk-!-margin-bottom-3">
          <select className="govuk-select">
            <option>London</option>
            <option>North Lincolnshire</option>
          </select>
        </div>
      </div>
      <div className="govuk-!-text-align-right govuk-!-margin-right-3">
        <button
          type="submit"
          className="govuk-button govuk-button--secondary govuk-!-margin-bottom-3"
          data-module="govuk-button"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default OrganisationFilter;
