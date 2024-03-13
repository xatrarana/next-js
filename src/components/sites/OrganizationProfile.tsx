import React from 'react'
import AssetsInfo from './AssetsInfo'

const OrganizationProfile = () => {
  return (
    <section className=" w-full max-w-6xl mx-auto px-3 py-5">
      <div className="">
        <h1 className="text-2xl rounded-md font-bold bg-green-500 text-white  px-10 py-3">
        संगठन प्रोफाइल
        </h1>
      </div>
      <div className="flex flex-wrap gap-3 items-center justify-evenly p-2 mt-5">
        <AssetsInfo/>
      </div>
    </section>
  )
}

export default OrganizationProfile