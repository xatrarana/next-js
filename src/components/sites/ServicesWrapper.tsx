import React from 'react'
import DisplayProducts from '../common/DisplayProducts'

const ServicesWrapper = () => {
  return (
    <section className='w-full max-w-6xl mx-auto px-3 py-5'>
        <div className="">
        <h1 className="text-2xl rounded-md font-bold bg-green-500 text-white  px-10 py-3">हाम्रा सेवाहरू</h1>
      </div>
        <DisplayProducts/>
    </section>
  )
}

export default ServicesWrapper