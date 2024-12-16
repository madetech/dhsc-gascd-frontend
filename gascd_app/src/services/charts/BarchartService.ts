import { BarchartProps } from "../../data/interfaces/BarchartData";
import {
  initializeSvg,
  createXAxisScale,
  createYAxisScale,
  renderBars,
  renderXAxis,
  renderYAxis,
  renderLabels,
  addTooltip,
  renderMedianLine,
  renderLegend,
  truncateLabels,
  calculateQuartiles,
} from "./barchartHelpers";

export function generateBarchartSvg({
  data,
  width = 1000,
  height = 400,
  xLabel,
  yLabel,
  barColor = "#5f0f40",
  medianLineColor = "#808000",
  medianLineDash = "5,5",
  title = "Barchart",
  showXValues = true,
  showQuartileRanges = false,
  highlightQuartileColors = ["#00703c", "#1d70b8", "#d4351c", "#f47738"],
  showMedian = true,
  showLegend = true,
  shortenLabels = false,
  showToolTip = true,
  tickCount,
  yAxisAsPercentage = false,
}: BarchartProps): SVGSVGElement | null {
  if (!data.length) return null;

  const dynamicMargin = {
    top: height * 0.1,
    right: width * 0.1,
    bottom: showXValues ? height * 0.4 : height * 0.2,
    left: width * 0.15,
  };

  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  const ref = { current: svgElement };

  const chartSvg = initializeSvg(ref, width, height);

  data = data.map((entry) => ({
    ...entry,
    xAxisValue: shortenLabels
      ? truncateLabels(entry.xAxisValue, 16)
      : entry.xAxisValue,
  }));

  const xAxisScale = createXAxisScale(data, width, dynamicMargin);
  const yAxisScale = createYAxisScale(data, height, dynamicMargin);
  const { median, quartiles } = calculateQuartiles(data);

  renderBars(
    chartSvg,
    data,
    xAxisScale,
    yAxisScale,
    quartiles,
    highlightQuartileColors,
    showQuartileRanges,
    barColor,
    height,
    dynamicMargin
  );

  if (showXValues) {
    renderXAxis(chartSvg, xAxisScale, height, dynamicMargin);
  }

  renderYAxis(
    chartSvg,
    yAxisScale,
    dynamicMargin,
    tickCount,
    yAxisAsPercentage
  );
  renderLabels(chartSvg, width, height, dynamicMargin, xLabel, yLabel, title);

  if (showToolTip) {
    addTooltip(chartSvg);
  }

  if (showMedian && median) {
    renderMedianLine(
      chartSvg,
      median,
      yAxisScale,
      width,
      dynamicMargin,
      medianLineColor,
      medianLineDash
    );
  }

  if (showLegend) {
    renderLegend(
      chartSvg,
      width,
      dynamicMargin,
      medianLineColor,
      medianLineDash
    );
  }

  return svgElement;
}
