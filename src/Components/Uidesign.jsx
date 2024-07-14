import {useEffect, useRef, useState} from 'react'
import {FaApple, FaAndroid, FaReact} from 'react-icons/fa'
import {SiSwift, SiKotlin, SiFlutter} from 'react-icons/si'

const Uidesign = () => {
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
    `transition-all duration-500 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : `translate-y-10 opacity-0`
    } delay-${index * 100}`

  const services = [
    {Icon: FaApple, text: 'UX', color: 'text-blue-600'},
    {Icon: FaAndroid, text: 'UI', color: 'text-blue-600'},
    {Icon: FaReact, text: 'Prototyping', color: 'text-blue-600'},
    {Icon: SiSwift, text: 'Mobile Design', color: 'text-red-500'},
    {Icon: SiKotlin, text: 'Web Design', color: 'text-blue-600'},
    {Icon: SiFlutter, text: 'Atomic Design', color: 'text-blue-400'},
  ]

  const technologies = [
    {Icon: FaApple, text: 'Figma', color: 'text-blue-600'},
    {Icon: FaAndroid, text: 'Sketch', color: 'text-blue-600'},
    {Icon: FaReact, text: 'Lottie', color: 'text-blue-600'},
  ]

  return (
    <section ref={sectionRef} className='py-16 bg-gray-50 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2
          className={`text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-600 mb-6 ml-5 text-start ${animationClass(
            0
          )}`}
        >
          UI / UX Design
        </h2>
        <p
          className={`lineHeight text-gray-700 text-xl mb-8 sm:w-full text-start ${animationClass(
            1
          )}`}
        >
          Our company takes a human-centered approach to design
        </p>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/2 mb-10 mt-5 lg:mb-0'>
            <div className='flex flex-wrap justify-between mb-2'>
              {services.map(({Icon, text, color}, index) => (
                <div
                  key={text}
                  className={`bg-gray-100 w-44 p-2 rounded-lg mb-4 ${animationClass(index + 2)}`}
                >
                  <Icon className={`${color} text-6xl mb-2 mx-auto`} />
                  <p className='text-lg font-medium text-gray-700 text-center'>{text}</p>
                </div>
              ))}
            </div>
            <h3 className={`text-2xl font-bold text-gray-700 mb-4 mt-16 ${animationClass(8)}`}>
              Technologies
            </h3>
            <div className='flex flex-wrap justify-between mb-8'>
              {technologies.map(({Icon, text, color}, index) => (
                <div key={text} className={`w-44 p-2 rounded-lg ${animationClass(index + 9)}`}>
                  <Icon className={`${color} text-6xl mb-2 mx-auto`} />
                  <p className='text-lg font-medium text-gray-700 text-center'>{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full lg:w-1/2 flex justify-center'>
            <img
              src='https://udevs.io/static/design-0951fd1e6afedab989f63e037535430f.png'
              alt='UI/UX Design'
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

export default Uidesign
