'use client'

import React, { useEffect, useRef } from "react";
import "./metricCard.scss";
import { MetricCardData } from "../../../data/interfaces/MetricCardData";
import Details from "../../common/details/Details";

type Props = {
  data: MetricCardData;
};

const MetricCard: React.FC<Props> = ({ data }) => {
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (svgContainerRef.current) {
      svgContainerRef.current.innerHTML = "";
      if (data.svg) {
        svgContainerRef.current.appendChild(data.svg);
      }
    }
  }, [data]);

  return (
    <div className="dhsc-grey-panel-container">
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
          <h3 className="govuk-heading-s">{data.title}</h3>
        </div>
      </div>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full govuk-!-text-align-center">
          <div ref={svgContainerRef}></div>
        </div>
      </div>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
          <p className="govuk-body-s">{data.description}</p>
        </div>
      </div>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <p className="govuk-body-s">
            <a
              href={data.metricDetailPageUrl}
              className="govuk-link dhsc-view-metric-card-link"
            >
              View metric
            </a>
          </p>
        </div>
        <div className="govuk-grid-column-one-half govuk-!-text-align-right">
          <p className="govuk-body-s">
            Source:{" "}
            <a href={data.sourceUrl} className="govuk-link">
              {data.sourceLinkString}
            </a>
          </p>
        </div>
      </div>
      <div className="govuk-grid-row govuk-!-margin-bottom-2">
        <div className="govuk-grid-column-full">
          <Details
            link="Data limitations"
            contents={data.limitationDescription}
          />
        </div>
      </div>
      <hr className="govuk-section-break govuk-section-break--s govuk-section-break--visible govuk-!-margin-bottom-5"></hr>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <p className="govuk-body-s">
            <a href="#" className="govuk-link">
              Add to favourite metrics
            </a>
          </p>
        </div>
        <div className="govuk-grid-column-one-third govuk-!-text-align-right">
          <p className="govuk-body-s">
            <a href="#" className="govuk-link">
              Share
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
