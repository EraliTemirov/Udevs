import {FaApple, FaAndroid, FaReact} from 'react-icons/fa'
import {SiSwift, SiKotlin, SiFlutter} from 'react-icons/si'

const Consulting = () => {
  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-6xl font-bold text-blue-600 mb-6 text-start'>IT consulting</h2>
        <div className='flex flex-col lg:flex-row justify-between gap-4'>
          <div className='w-full lg:w-1/2 mb-10 mt-5 lg:mb-0'>
            <p className='lineHeight text-gray-700 text-xl mb-8 text-start'>
              We can improve the qualifications of your employees thereby increasing the efficiency
              of your company
            </p>
            <div className='flex justify-between mb-2 mt-4'>
              <div className=' bg-gray-50 w-44 p-2 rounded-lg'>
                <FaApple className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Frontend</p>
              </div>
              <div className=' bg-gray-50 w-44 p-2 rounded-lg'>
                <FaAndroid className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Backend</p>
              </div>
              <div className=' bg-gray-50 w-44 p-2 rounded-lg'>
                <FaReact className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Architecture</p>
              </div>
            </div>
            <div className='flex justify-between mt-6'>
              <div className=' bg-gray-50 w-44 p-2 rounded-lg'>
                <SiSwift className='text-red-500 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>DevOps</p>
              </div>
              <div className=' bg-gray-50 w-44 p-2 rounded-lg'>
                <SiKotlin className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Ux/Ui</p>
              </div>
              <div className=' bg-gray-50 w-44 p-2 rounded-lg'>
                <SiFlutter className='text-blue-400 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>QA</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 flex justify-center'>
            <img
              src='https://udevs.io/static/consulting-41b53d1dd307a65f09f8017660a0304c.svg'
              alt='Mobile Applications'
              className='max-w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Consulting
