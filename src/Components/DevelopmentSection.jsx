import {useEffect, useRef, useState} from 'react'
import {FaApple, FaAndroid, FaReact} from 'react-icons/fa'
import {SiSwift, SiKotlin, SiFlutter} from 'react-icons/si'

const DevelopmentSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {threshold: 0.1}
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const animationClass = (index) =>
    `transition-all duration-1000 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : `translate-y-10 opacity-0`
    } delay-${index * 100}`

  return (
    <section ref={sectionRef} className='py-16 bg-gray-50 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-600 mb-6 text-start'>
          Development of mobile applications
        </h2>
        <p className='lineHeight text-gray-700 text-lg mb-8 sm:w-full text-start'>
          In collaboration with startups, we have learned how to create a creative and functional
          user interface for mobile applications.
        </p>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/2 mb-10 mt-5 lg:mb-0'>
            <div className='flex justify-between mb-8'>
              {[
                {Icon: FaApple, text: 'iOS', color: 'text-blue-600'},
                {Icon: FaAndroid, text: 'Android', color: 'text-blue-600'},
                {Icon: FaReact, text: 'Crossplatform', color: 'text-blue-600'},
              ].map(({Icon, text, color}, index) => (
                <div
                  key={text}
                  className={`bg-gray-100 w-44 p-2 rounded-lg ${animationClass(index)}`}
                >
                  <Icon className={`${color} text-6xl mb-2`} />
                  <p className='text-lg font-medium text-gray-700'>{text}</p>
                </div>
              ))}
            </div>
            <h3 className='text-2xl font-bold text-gray-700 mb-4 mt-8'>Technologies</h3>
            <div className='flex justify-between'>
              {[
                {Icon: SiSwift, text: 'Swift', color: 'text-red-500'},
                {Icon: SiKotlin, text: 'Kotlin', color: 'text-blue-600'},
                {Icon: SiFlutter, text: 'Flutter', color: 'text-blue-400'},
              ].map(({Icon, text, color}, index) => (
                <div
                  key={text}
                  className={`bg-gray-100 w-44 p-2 rounded-lg ${animationClass(index + 3)}`}
                >
                  <Icon className={`${color} text-6xl mb-2`} />
                  <p className='text-lg font-medium text-gray-700'>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full lg:w-1/2 flex justify-center'>
            <img
              src='https://udevs.io/static/mobile_dev-6180df87085fd146c501a19e6156fbd2.png'
              alt='Mobile Applications'
              className={`max-w-full h-auto transition-all duration-1000 ease-out ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentSection
