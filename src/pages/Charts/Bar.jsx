import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  BarSeries,
  DataLabel
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

import { Header } from "../../components";

const Bar = () => {
  return (
    <div>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-dark-secondary-bg rounded-3xl'>
      <Header category="Bar" title="Olympic Medal Counts - RIO"/>
      <ChartComponent
        id="charts"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
      >
        <Inject services={[BarSeries, DataLabel, Legend, Tooltip, Category]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} type='Bar'/>
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
