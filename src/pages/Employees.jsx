import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page,Search, Edit, Inject,Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

export default function Employees() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white'>
      <Header category='Page' title='Employees'/>
      <GridComponent
      id='gridcomp'
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['search']}
      width='auto'
      >
        <ColumnsDirective>
        {employeesGrid.map((item,index)=><ColumnDirective key={index} {...item}/>)}
        </ColumnsDirective>
        <Inject services={[Page, Search,Edit,Toolbar ]}/>
      </GridComponent>
    </div>
  )
}
