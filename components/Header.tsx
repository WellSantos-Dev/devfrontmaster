import { signIn, signOut, useSession } from 'next-auth/react'

export const Header = () => {
  const { data: session } = useSession()

  return (
    <div className="max-w-6xl p-8 flex items-center justify-between absolute left-0 right-0 ml-auto mr-auto shadow-lg">
      <h1 className="text-2xl font-bold">Dev<span className="text-pink-700">Front</span></h1>
      {session ? <button onClick={() => signOut()} className="py-2 px-4 shadow-md text-pink-700 text-md font-bold rounded-md flex items-center justify-between gap-4"><img src={session.user.image} className="w-8 rounded-full" alt="Sua imagem github"/>{session.user.name}</button> : <button className="py-2 px-4 bg-pink-300 text-white text-md font-bold rounded-md flex items-center justify-between gap-4" onClick={() => signIn('github')}>Logar com GitHub</button>}
    </div>
  )
}