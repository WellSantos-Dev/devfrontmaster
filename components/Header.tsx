import { signIn, signOut, useSession } from 'next-auth/react'
import type { Adapter } from "next-auth/adapters"

export const Header = () => {


  return (
    <div className="max-w-6xl p-8 flex items-center justify-between absolute left-0 right-0 ml-auto mr-auto shadow-lg">
      <h1 className="text-2xl font-bold">Dev<span className="text-pink-700">Front</span></h1>
      
    </div>
  )
}