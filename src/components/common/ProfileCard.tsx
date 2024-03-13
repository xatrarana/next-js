import React from 'react'
import user from '@/assets/user.jpg'
import Image from 'next/image'
type ProfileCardProps = {
    name?: string,
    avatar?: string,
    position?: string
}
const ProfileCard: React.FC<ProfileCardProps> = ({name, avatar, position}) => {
  return (
    <div className=' min-w-44 hover:scale-105 transition-all ease-in-out duration-200 mx-auto bg-gray-100 rounded-sm p-1'>
        <div className='flex flex-col items-center justify-center p-2'>
            <Image className=' w-28 h-28 rounded-full' src={user} alt={"name"}/>
            <h2 className='mt-4 text-xl font-bold'>{"wolfie boi"}</h2>
            <p className='text-gray-400'>{"developer"}</p>
        </div>
    </div>
  )
}

export default ProfileCard