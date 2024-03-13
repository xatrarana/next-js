import { cn } from '@/lib/utils'
import React from 'react'
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode,
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void
    
}
const Button:React.FC<ButtonProps> = ({className,children,...props}) => {
  return (
   <button className={cn(['bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-md',className])} {...props}>
    {children}
   </button>
  )
}

export default Button