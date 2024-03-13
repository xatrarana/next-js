import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import React from 'react'

const UserDetails = async () => {
    const session = await getServerSession(authOptions)
    if(!session){
        return null
    }
  return (
    <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {session?.user.name}
          </span>
          <span className="block text-xs text-green-500">{session?.user.role}</span>
        </span>
  )
}

export default UserDetails