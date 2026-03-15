import React from 'react'
import SummaryCards from './SummaryCards';
import AddTransactions from './AddTransactions';

const Dashboard = () => {
  return (
    <div className='flex items-center justify-center'>
    <div className='bg-slate-100 w-3xl'>
        <SummaryCards/>
        <AddTransactions/>
    </div>
    </div>
  )
}

export default Dashboard