import {LayoutAttributes} from "../configurations/line-chart-plot-config";
import {PlotConfig} from "../configurations/plot-config";
const Plotly = require('../../../../../../../src/lib/bundles/plotly');

export const drawLinechart = (chartElement:Element, traceArray: any[]) => {

  Plotly.newPlot(chartElement, traceArray, LayoutAttributes, PlotConfig);

};

