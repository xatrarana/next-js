import { BanknotesIcon, BuildingOfficeIcon, Cog8ToothIcon, CurrencyEuroIcon, UsersIcon } from '@heroicons/react/16/solid';
import React from 'react'
const data = {
    Members: 167458,
    Staff: 458,
    Branch: 82,
    Savings: 12057795434,
    Loan: 10772620172,
    Share: 1678856200
};

const AssetsInfo = () => {
  return (
    <>
    <div className='flex flex-col items-center'>
        <div className='icons'>
            <UsersIcon className='block h-24 w-24 ' style={{
                color: '#22c55e'
            }}/>
        </div>
        <div className='data px-2 flex flex-col gap-y-3 items-center justify-center'>
            <h1>Staffs</h1>
            <p  className='text-2xl font-bold'>{data.Staff}</p>
        </div>
    </div>
    <div className=' flex flex-col items-center'>
        <div className='icons'>
            <BuildingOfficeIcon className='block h-24 w-24'  style={{
                color: '#22c55e'
            }}/>
        </div>
        <div className='data px-2 flex flex-col gap-y-3 items-center justify-center'>
            <h1>Branches</h1>
            <p  className='text-2xl font-bold'>{data.Branch}</p>
        </div>
    </div>
    <div className='flex flex-col items-center'>
        <div className='icons'>
            <Cog8ToothIcon className='block h-24 w-24'  style={{
                color: '#22c55e'
            }}/>
        </div>
        <div className='data px-2 flex flex-col gap-y-3 items-center justify-center'>
            <h1>Savings</h1>
            <p  className='text-2xl font-bold'>{data.Savings.toLocaleString()}</p>
        </div>
    </div>
    <div className=' flex flex-col items-center'>
        <div className='icons'>
            <BanknotesIcon className='block h-24 w-24'  style={{
                color: '#22c55e'
            }}/>
        </div>
        <div className='data px-2 flex flex-col gap-y-3 items-center justify-center'>
            <h1>Shares</h1>
            {/* <p className='text-2xl font-bold'>{
                <AssetsIncrementNum number={data.Share} />
            }</p> */}
            <p className='text-2xl font-bold'>{data.Share.toLocaleString()}</p>
        </div>
    </div>
    <div className='flex flex-col items-center'>
        <div className='icons'>
            <CurrencyEuroIcon className='block h-24 w-24'  style={{
                color: '#22c55e'
            }}/>
        </div>
        <div className='data px-2 flex flex-col gap-y-3 items-center justify-center'>
            <h1>Loans</h1>
            <p className='text-2xl font-bold'>{data.Loan.toLocaleString()}</p>
        </div>
    </div>
    </>
  )
}

export default AssetsInfo