import Image from 'next/image'
import React from 'react'
import logo from "@/assets/logo.jpg";
const NavTopContentData = {
    image: logo,
    motto: 'आपसी सहयोग, सद्भाव र सामूहिक हितका लागि सहकारी',
    contacts: ['९८६६६१५३५८','९८६६६१५३५८'],
    address: 'गोल्ढार, भक्तपुर'
}

const NavTopContent = () => {
  return (
    <div className="flex flex-wrap text-sm p-2   w-full max-w-6xl mx-auto  items-center justify-between">
   <Image priority src={NavTopContentData.image} alt="Test Saving and Credit Co-operative socitety" className=' bg-blend-multiply' height={70}/>
   <div className="flex flex-col gap-y-2 text-sm font-normal">
      <h3>{NavTopContentData.motto}</h3>
     <div className="flex gap-x-2 items-center justify-end">
        <div className="flex gap-x-2">
            {
                NavTopContentData.contacts.map((contact, index) => {
                    return <span key={index}>{contact}</span>
                })
            }
        </div>
     <span className='seperator'>|</span>
      <h3>गोल्ढार, भक्तपुर</h3>
     </div>
   </div>
   </div>
  )
}

export default NavTopContent