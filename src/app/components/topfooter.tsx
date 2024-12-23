import React from 'react'
import Image from 'next/image'
import { PiImageSquareFill } from 'react-icons/pi'

const Topfooter = () => {
  return (
    <div className='pb-20'>
       <Image className=' mx-56 flex justify-center h-[200px] w-[750px] ' src={"/topfooter.png"} height={300} width={200} alt='top footer'/>
    </div>
  )
}

export default Topfooter