'use client'
import React from 'react'
import Button from './Button'
import { signOut } from 'next-auth/react'

const LogoutButton = () => {
  return (
    <Button onClick={() => signOut()}>logout</Button>
  )
}

export default LogoutButton