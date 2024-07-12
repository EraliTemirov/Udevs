import {FaApple, FaAndroid, FaReact} from 'react-icons/fa'
import {SiSwift, SiKotlin, SiFlutter} from 'react-icons/si'

const ErpSection = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-6xl font-bold text-blue-600 mb-6 ml-5 text-start'>ERP systems</h2>

        <div className='flex flex-col lg:flex-row justify-between mt-10'>
          <div className='w-full lg:w-1/2 flex justify-center'>
            <img
              src='	https://udevs.io/static/desktop-be2444bb4c87961054714533a5d5a728.png'
              alt='Mobile Applications'
              className='max-w-full h-auto'
            />
          </div>
          <div className='w-full lg:w-1/2 mb-4 lg:mb-0'>
            <p className='lineHeight text-gray-700 text-2xl mb-8  text-start'>
              IT Systems of any level of complexity at a convenient time for you
            </p>
            <div className='flex justify-between mb-8'>
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
            <div className='flex justify-between mt-5'>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <SiSwift className='text-red-500 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>POS</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <SiKotlin className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>SMS/ Email</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <SiFlutter className='text-blue-400 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Warehouse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErpSection
