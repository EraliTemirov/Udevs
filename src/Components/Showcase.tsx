import React, {useState, useEffect} from 'react'

const AnimatedText = ({text}) => {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && index <= text.length) {
        setDisplayText(text.slice(0, index))
        setIndex(index + 1)
      } else if (isDeleting && index >= 0) {
        setDisplayText(text.slice(0, index))
        setIndex(index - 1)
      }

      if (index === text.length + 1) {
        setIsDeleting(true)
      } else if (index === 0) {
        setIsDeleting(false)
      }
    }, 100) // Animatsiya tezligini sozlash

    return () => clearTimeout(timer)
  }, [index, isDeleting, text])

  return (
    <p className='text-lg md:text-xl mb-6 h-8'>
      {displayText}
      <span className='animate-blink'>|</span>
    </p>
  )
}

const Showcase = () => {
  return (
    <div className='max-w-7xl  mx-auto px-4 py-12 md:py-24'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <h1 className=' text-5xl md:text-5xl font-bold mb-8'>
            <span className='text-blue-600'>u</span>devs
          </h1>
          <h2 className='text-2xl md:text-3xl font-semibold mb-4 text-blue-900'>
            IT-Outsourcing Company
          </h2>
          <AnimatedText text='User interface, User experience design' />
          <button className='bg-blue-600 mt-6 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300'>
            Contact
          </button>
        </div>
        <div className='md:w-1/2'>
          <div className='relative'>
            <img
              src='https://udevs.io/static/hero-304cdf863047286a47c1e063154824d8.svg'
              alt='Office illustration'
              className='w-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase
