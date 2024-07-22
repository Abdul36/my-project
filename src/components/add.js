import React from 'react';
import TableComponent from './table';
import BarChart from './barchart';

const Add = () => {
  return (
    <div className='flex w-full items-center justify-between'>
      <div className='w-1/2 p-2'>
        <BarChart />
      </div>
      <div className='w-1/2 p-2'>
        <TableComponent />
      </div>
    </div>
  );
}

export default Add;
