import { ColumnDirective, ColumnsDirective,Toolbar, ContextMenu, Edit, ExcelExport, Filter, GridComponent, Inject, Page, PdfExport, Resize, Sort } from '@syncfusion/ej2-react-grids';
import React from 'react';

import { Header } from '../components';
import { customersData,customersGrid} from '../data/dummy';

export default function Customers() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white'>
      <Header category='Page' title='Customers'/>
      <GridComponent
      id='gridcomp'
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{
        allowAdding:true,
        allowDeleting:true
      }}
      width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item,index)=><ColumnDirective key={index} {...item}/>)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort,Toolbar, ContextMenu, Filter, Page, ExcelExport, PdfExport ,Edit,ContextMenu ]}/>
      </GridComponent>
    </div>
  )
}
