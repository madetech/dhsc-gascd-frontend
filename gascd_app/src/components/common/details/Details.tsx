import React from "react";

type Props = {
  link: string;
  contents: string;
};

const Details: React.FC<Props> = ({ link, contents }) => {
  return (
    <details className="govuk-details govuk-!-margin-bottom-1">
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text govuk-!-font-size-16">
          {link}
        </span>
      </summary>
      <div className="govuk-details__text">{contents}</div>
    </details>
  );
};

export default Details;
