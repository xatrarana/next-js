'use client'
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
    const urls = [
        'https://www.jyotipunja.coop.np/wp-content/uploads/2023/05/slider12.jpg',
        'https://hamronepalcoop.com.np/wp-content/uploads/2021/09/ajiwan-bachat.jpg',
        'https://www.jyotipunja.coop.np/wp-content/uploads/2023/05/slider12.jpg',
        'https://www.jyotipunja.coop.np/wp-content/uploads/2023/05/slider12.jpg',
        'https://www.jyotipunja.coop.np/wp-content/uploads/2023/05/slider12.jpg',
        
      
    ]
const CarouselWrapper = () => {
      let [current, setCurrent] = useState<number>(0);
      useEffect(() =>{
        const interval = setInterval(() => {
          setCurrent((current + 1) % urls.length)
        }, 3000)
        return () => clearInterval(interval)
      },[current])
      let previousSlide = () => {
        if(current === 0) setCurrent(urls.length - 1)
        else setCurrent(current - 1)
      }

      let nextSlide = () => {
        if(current === urls.length - 1) setCurrent(0)
        else setCurrent(current +  1)
      }
      
  return (
    <div className="overflow-hidden relative  bg-black">
     <div className={`flex transition ease-out duration-1000`}
     style={{
      transform: `translateX(-${current * 100}%)`
     }}
     >
      {
        urls.map((url,index) =>{

        return <img 
         key={index}  src={url} className="object-cover" alt="sample"/>
      }
        )
      }
     </div>
      
      <div className="absolute top-0 px-6 h-full w-full justify-between items-center flex z-20 text-white">
        <button onClick={previousSlide} className="h-10 w-10 bg-green-500 hover:bg-green-800 rounded-full">
          <ChevronLeftIcon className="block" />
        </button>
        <button onClick={nextSlide} className="h-10 w-10 bg-green-500 hover:bg-green-800 rounded-full">
          <ChevronRightIcon className="block" />
        </button>
      </div>
    </div>
  )
}

export default CarouselWrapper