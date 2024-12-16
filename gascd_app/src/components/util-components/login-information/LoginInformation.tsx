'use client'

import React, { useEffect, useState } from "react";

const LoginInformation: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const email = sessionStorage.getItem("email");
    setUserEmail(email);
  }, []);
  
  return (
    <div className="govuk-!-text-align-right">
      <p className="govuk-body-s govuk-!-margin-bottom-2">
        Logged in as:{" "}
        <span className="govuk-!-font-weight-bold govuk-!-margin-right-1">
          {userEmail}
        </span>{" "}
        <a href="#" className="govuk-link">
          Sign out
        </a>
      </p>
      <p className="govuk-body-s">
        View your{" "}
        <a href="#" className="govuk-link">
          permission level
        </a>
      </p>
    </div>
  );
};

export default LoginInformation;
