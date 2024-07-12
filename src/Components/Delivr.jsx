import {FaApple, FaAndroid, FaReact} from 'react-icons/fa'
import {SiSwift, SiKotlin} from 'react-icons/si'

const Delivr = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col lg:flex-row justify-between mt-14 '>
          <div className='w-full lg:w-1/2 flex justify-center '>
            <img
              src='https://udevs.io/static/delever_app-d50b0f5953ce60eec080bad20fe68a78.png'
              alt='Mobile Applications'
              className='max-w-full h-auto'
            />
          </div>
          <div className=' lg:w-1/2 mb-4 lg:mb-0 p-4'>
            <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-red-600 mb-6 ml-5 text-start'>
              Delever
            </h2>
            <p className=' lineHeight text-gray-700 text-lg mb-8  text-start'>
              Delever - Delivery service automation targeted at both consumers and restaurants.
            </p>
            <p className='font-bold text-2xl'>What we did?</p>
            <div className='flex justify-start mb-8 gap-4'>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <FaApple className='text-blue-600 text-6xl mb-2 text-center' />
                <p className='text-lg ml-4 font-medium text-gray-700'>CRM</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <FaAndroid className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>eLearning</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <FaReact className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>E_Commerce</p>
              </div>
            </div>
            <div className='flex justify-start mt-5 gap-4'>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <SiSwift className='text-red-500 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>POS</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <SiKotlin className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>SMS/ Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivr
