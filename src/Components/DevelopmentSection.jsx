import {FaApple, FaAndroid, FaReact} from 'react-icons/fa'
import {SiSwift, SiKotlin, SiFlutter} from 'react-icons/si'

const DevelopmentSection = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-600 mb-6 text-start'>
          Development of mobile applications
        </h2>
        <p className='lineHeight  text-gray-700 text-lg mb-8  sm:w-full text-start'>
          In collaboration with startups, we have learned how to create a creative and functional
          user interface for mobile applications.
        </p>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/2 mb-10 mt-5 lg:mb-0'>
            <div className='flex justify-between mb-8'>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <FaApple className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>iOS</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <FaAndroid className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Android</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <FaReact className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Crossplatform</p>
              </div>
            </div>
            <h3 className='text-2xl font-bold text-gray-700 mb-4 mt-8'>Technologies</h3>
            <div className='flex justify-between'>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <SiSwift className='text-red-500 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Swift</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <SiKotlin className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Kotlin</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <SiFlutter className='text-blue-400 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Flutter</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 flex justify-center'>
            <img
              src='https://udevs.io/static/mobile_dev-6180df87085fd146c501a19e6156fbd2.png'
              alt='Mobile Applications'
              className='max-w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentSection
