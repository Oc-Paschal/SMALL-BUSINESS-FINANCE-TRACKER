import React, { useState } from 'react'
import SummaryCards from './SummaryCards';
import AddTransactions from './AddTransactions';
import TransactionTable from './TransactionTable';

const Dashboard = () => {
    const [Transactions,setTransactions] = useState([])
  return (
    <div className='flex items-center justify-center'>
    <div className='bg-slate-100 w-3xl p-4 rounded-md'>
            <SummaryCards transactions={Transactions}/>
        <AddTransactions setTransactions={setTransactions}/>
        <TransactionTable Transactions={Transactions}/>
    </div>
    </div>
  )
}

export default Dashboard