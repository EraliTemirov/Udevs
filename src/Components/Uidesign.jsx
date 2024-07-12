import {FaApple, FaAndroid, FaReact} from 'react-icons/fa'
import {SiSwift, SiKotlin, SiFlutter} from 'react-icons/si'

const Uidesign = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-600 mb-6 text-start'>
          UI / UX design
        </h2>
        <p className='lineHeight text-gray-700 text-xl mb-8  sm:w-full text-start'>
          Our company takes a human-centered approach to design
        </p>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/2 mb-10 mt-5 lg:mb-0'>
            <div className='flex justify-between mb-2'>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <FaApple className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>UX</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <FaAndroid className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>UI</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <FaReact className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Prototyping</p>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <SiSwift className='text-red-500 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Mobile Design</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <SiKotlin className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Web Design</p>
              </div>
              <div className=' bg-gray-100 w-44 p-2 rounded-lg'>
                <SiFlutter className='text-blue-400 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Atomic Design</p>
              </div>
            </div>
            <h3 className='text-2xl font-bold text-gray-700 mb-4 mt-16'>Technologies</h3>
            <div className='flex justify-between mb-8'>
              <div className='  w-44 p-2 rounded-lg'>
                <FaApple className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Figma</p>
              </div>
              <div className=' w-44 p-2 rounded-lg'>
                <FaAndroid className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Sketch</p>
              </div>
              <div className=' w-44 p-2 rounded-lg'>
                <FaReact className='text-blue-600 text-6xl mb-2' />
                <p className='text-lg font-medium text-gray-700'>Lottie</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 flex justify-center'>
            <img
              src='https://udevs.io/static/design-0951fd1e6afedab989f63e037535430f.png'
              alt='Mobile Applications'
              className='max-w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Uidesign
