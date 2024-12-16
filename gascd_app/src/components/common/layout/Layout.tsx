'use client'

import React, { MouseEvent, ReactNode, useEffect, useRef } from "react";
import { initAll } from '../../../../public/govuk-frontend/js/govuk-frontend.min.js';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { focusMainContent } from "../../../helpers/ManageFocus";
import PhaseBanner from "../phase-banner/PhaseBanner";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import { Breadcrumb } from "../../../data/interfaces/Breadcrumb";
import LoginInformation from "../../util-components/login-information/LoginInformation";

type Props = {
  children: ReactNode;
  breadcrumbs?: Array<Breadcrumb>;
  autoSpaceMainContent?: boolean;
  showLoginInformation: boolean;
};

const Layout: React.FC<Props> = ({
  children,
  breadcrumbs,
  showLoginInformation,
  autoSpaceMainContent = true,
}) => {
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initAll();
  }, []);

  return (
    <div ref={layoutRef} tabIndex={-1} id="layout">
      <a
        href="#"
        className="govuk-skip-link"
        onClick={(e: MouseEvent<HTMLAnchorElement>) =>
          focusMainContent(e, mainRef)
        }
      >
        Skip to main content
      </a>
      <Header />
      <div className="govuk-width-container">
        <PhaseBanner />
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-third">
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
          </div>
          <div className="govuk-grid-column-two-thirds govuk-!-margin-top-3">
            {showLoginInformation && <LoginInformation />}
          </div>
        </div>

        <main
          className={
            autoSpaceMainContent
              ? "govuk-main-wrapper govuk-main-wrapper--auto-spacing"
              : ""
          }
        >
          <div id="main-content">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
