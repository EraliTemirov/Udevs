import {useEffect, useRef, useState} from 'react'
import {FaApple, FaAndroid, FaReact} from 'react-icons/fa'
import {SiSwift, SiKotlin, SiFlutter} from 'react-icons/si'

const ErpSection = () => {
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

  const technologies = [
    {Icon: FaApple, text: 'CRM', color: 'text-blue-600'},
    {Icon: FaAndroid, text: 'eLearning', color: 'text-blue-600'},
    {Icon: FaReact, text: 'E_Commerce', color: 'text-blue-600'},
    {Icon: SiSwift, text: 'POS', color: 'text-red-500'},
    {Icon: SiKotlin, text: 'SMS/ Email', color: 'text-blue-600'},
    {Icon: SiFlutter, text: 'Warehouse', color: 'text-blue-400'},
  ]

  return (
    <section ref={sectionRef} className='py-16 bg-gray-50 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-600 mb-6 ml-5 text-start'>
          ERP systems
        </h2>
        <div className='flex flex-col lg:flex-row justify-between mt-10'>
          <div className='w-full lg:w-1/2 flex justify-center'>
            <img
              src='https://udevs.io/static/desktop-be2444bb4c87961054714533a5d5a728.png'
              alt='ERP Systems'
              className={`max-w-full h-auto transition-all duration-1000 ease-out ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
              }`}
            />
          </div>
          <div className='w-full lg:w-1/2 mb-4 lg:mb-0'>
            <p
              className={`lineHeight text-gray-700 text-lg mb-8 mt-4 text-start ${animationClass(
                0
              )}`}
            >
              IT Systems of any level of complexity at a convenient time for you
            </p>
            <div className='flex flex-wrap justify-between'>
              {technologies.map(({Icon, text, color}, index) => (
                <div
                  key={text}
                  className={`bg-gray-100 w-44 p-2 rounded-lg mb-4 ${animationClass(index + 1)}`}
                >
                  <Icon className={`${color} text-6xl mb-2 mx-auto`} />
                  <p className='text-lg font-medium text-gray-700 text-center'>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErpSection
