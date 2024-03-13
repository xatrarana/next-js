import Image, { StaticImageData } from 'next/image';
import React from 'react'
import Button from './Button';

type ProductCardProps = {
    title: string;
    description: string;
    image: StaticImageData

}
const ProductCard:React.FC<ProductCardProps> = ({title,description,image}) => {
  return (
    <div className="mx-auto mt-10 w-80 transform overflow-hidden rounded-md  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <Image
            className="h-48 w-full object-cover object-center "
            src={image}
            alt={title}
          />
          <div className="p-3">
            <h2 className="mb-2 text-lg font-medium text-black">
            {title}
            </h2>
            <p className="mb-2 text-base  text-gray-600">
            {description}
            </p>
            <div className='text-center '>
                <Button>
                    Read More
                </Button>
            </div>
          </div>
        </div>
  )
}

export default ProductCard