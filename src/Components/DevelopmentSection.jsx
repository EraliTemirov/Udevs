import {FaApple, FaAndroid, FaReact} from 'react-icons/fa'
import {SiSwift, SiKotlin, SiFlutter} from 'react-icons/si'

const DevelopmentSection = () => {
  return (
    <section className='py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-blue-600 mb-6 text-center'>
          Development of mobile applications
        </h2>
        <p className='text-gray-700 text-xl mb-8 max-w-[60%] sm:w-full text-start'>
          In collaboration with startups, we have learned how to create a creative and functional
          user interface for mobile applications.
        </p>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/2 mb-10 lg:mb-0'>
            <div className='flex justify-between mb-8'>
              <div className='text-center'>
                <FaApple className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>iOS</p>
              </div>
              <div className='text-center'>
                <FaAndroid className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Android</p>
              </div>
              <div className='text-center'>
                <FaReact className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Crossplatform</p>
              </div>
            </div>
            <h3 className='text-2xl font-bold text-gray-700 mb-4 mt-8'>Technologies</h3>
            <div className='flex justify-between'>
              <div className='text-center'>
                <SiSwift className='text-red-500 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Swift</p>
              </div>
              <div className='text-center'>
                <SiKotlin className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Kotlin</p>
              </div>
              <div className='text-center'>
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
