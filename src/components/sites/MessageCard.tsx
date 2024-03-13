import React from 'react'
import userLogo from '@/assets/user.jpg'
import Image from 'next/image'
const user = {
  name: 'भवानी प्रसाद दंगाल',
  position: 'अध्यक्ष',
  message: 'सर्वप्रथम, म हाम्रा सदस्य सेवा र संस्थागत वृद्धिद्वारा उपलब्धि हासिल गर्न सक्षम हुनुहुने हाम्रा सबै सदस्य, सरोकारवाला र साझेदारहरूलाई हृदयदेखि नै धन्यवाद दिन चाहन्छु। हामी हाम्रा सदस्यहरूलाई प्रभावकारी व्यावसायिक सेवाहरू प्रदान गर्न पहिले देखिनै धेरै प्रतिबद्ध छौं। सुरुदेखि नै हाम्रो सहकारीले पाँच वर्षे प्रवर्द्धन… ',
  avatar: userLogo
}
const MessageCard = () => {
  return (
    <div className="bg-green-200 flex flex-col w-full max-w-sm rounded-md p-3">
      <h1 className="font-bold md:text-3xl">अध्यक्षको सन्देश</h1>
      <div className="mt-4">
        <p className=" text-justify text-md md:text-xl text-wrap">
          {user.message}
        </p>
      </div>
      <div className="mt-3 text-end ">
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-md">
            Read More
          </button>
        </div>
      <div className='flex  items-center gap-x-3 mt-3 flex-wrap'>
        <div className='user-image w-20 h-20 rounded-full object-fill'>
        <Image src={userLogo} className='rounded-full' alt='user' />
        </div>
        <div className='text-xl'>
          <h1>{user.name}</h1>
          <p>{user.position}</p>
        </div>
      </div>
      
    </div>
  )
}

export default MessageCard