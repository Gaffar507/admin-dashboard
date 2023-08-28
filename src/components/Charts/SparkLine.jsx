import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

export default function SparkLine({id, type, data, height, width, color, currentColor}) {
  return (
  <SparklineComponent
  id={id}
  type={type}
  dataSource={data}
  height={height}
  width={width}
  LineWidth={1}
  valueType='Numeric'
  fill={color}
  border={{color:currentColor , width:2}}
  xName='x'
  yName='y'
  tooltipSettings={{
    visible:true,
    // format:`${'x'}: data${'y'}`,
    trackLineSettings:{
      visible:true
    }
  }}
  >
    <Inject services={[SparklineTooltip]}/>
  </SparklineComponent>
  )
}
