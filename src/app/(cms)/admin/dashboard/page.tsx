
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import WorkSpace from '@/components/dashboard/WorkSpace'
import { getServerSession } from 'next-auth'
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

