import hero from '../public/images/hero.svg'
import Image from 'next/image'

interface PriceProps {
  price: number
}

export const Main = ({price} : PriceProps) => {
  return (
    <div className=" flex-col pt-60 lg:flex-row  lg:max-w-6xl lg:pt-0 my-0 mx-auto flex items-center justify-between p-6 h-screen">
      <div className="">
        <p className="text-sm text-gray-500 lg:text-md font-semibold pb-9"><span className="animate-pulse pr-1">❤️</span> Olá, seja bem vindo</p>
        <h1 className="pb-3 text-5xl lg:text-6xl font-bold lg:pb-14 tracking-wide"><span className="text-pink-700">Novidades</span> sobre o mundo de <span className="text-pink-700">Front-End</span></h1>
        <p className="text-gray-600 pb-6">Ganhe acesso a todas as publicações<br></br><span className="text-pink-700 font-semibold">por {price}</span></p>
        <button className="py-3 px-3 text-1xl bg-pink-700 text-white font-bold uppercase rounded-md">Inscreva-se</button>
      </div>
      <div className="">
        <Image src={hero} alt="Imagem de um garoto na frente do computador" width={1100} height={1100}/>
      </div>
    </div>
  )
}