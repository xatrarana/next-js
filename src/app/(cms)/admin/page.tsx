import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const Adminpage = async () => {
  const session = await getServerSession(authOptions)
  if(!session) {
    redirect('/')
  }
  return redirect('/admin/dashboard')
}

export default Adminpage