import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
  Tooltip
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

import { Header } from "../../components";

const Area = () => {
  return (
    <div>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-dark-secondary-bg rounded-3xl'>
      <Header category="Area" title="Inflation Rate In Percentage"/>
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
    </div>
  );
};

export default Area;
