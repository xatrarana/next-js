
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Button from '@/components/common/Button'
import LogoutButton from '@/components/common/LogoutButton'
import WorkSpace from '@/components/dashboard/WorkSpace'
import DefaultLayout from '@/layout/DashBoardLayout'
import { getServerSession } from 'next-auth'
import { signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'
const DashboardPage = async () => {
  const session = await getServerSession(authOptions)
  if(!session){
      redirect('/auth/login')
  }
  
  return (
   
    <WorkSpace/>

  )
}

export default DashboardPage