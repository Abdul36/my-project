import React from 'react';
import TableComponent from './table';
import BarChart from './barchart';

const Add = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full  items-center justify-around  mt-5'>
      <div className='w-full lg:w-[40%] bg-white rounded p-2'>
        <BarChart />
      </div>
      <div className='w-full lg:w-[58%] bg-white rounded p-2'>
        <TableComponent />
      </div>
    </div>
  );
}

export default Add;
