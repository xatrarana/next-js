import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
const NotFound = () => {
  return (
    <section>
      <div className="w-full px-16 md:px-0 py-10 flex items-center justify-center">
    <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">पृष्ठ फेला परेन</p>
        <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">माफ गर्नुहोस्, तपाईंले खोज्नु भएको पृष्ठ फेला पार्न सकिएन</p>
        <Link href="/" className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
            <ArrowLeftIcon className='block h-7 w-7'/>
            <span>पछाडी  जानुहोस्</span>
        </Link>
    </div>
</div>
    </section>
  )
}

export default NotFound