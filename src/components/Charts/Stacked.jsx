import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';


export default function Stacked({width, height}) {
  return (
    <ChartComponent
    id='charts'
    height={height}
    width={width}
    stackedPrimaryXAxis={stackedPrimaryXAxis}
    stackedPrimaryYAxis={stackedPrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    >
      <Inject services={[StackingColumnSeries, Legend, Category, Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index)=> <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}