import {useEffect, useRef, useState} from 'react'
import CountUp from 'react-countup'

const TeamSection = () => {
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

  return (
    <section ref={sectionRef} className='py-16 bg-gray-50 overflow-x-hidden'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-1/2 mb-10 lg:mb-0'>
          <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-600 mb-4 break-words'>
            Team
          </h2>
          <p className='lineHeight text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-700 mb-6 mt-6'>
            For each project, we form a team that includes a project manager, business analyst, UI /
            UX designer, DevOps, QA engineer, backend and front-end developers.
          </p>
          <div className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mt-8'>
            {isVisible && <CountUp start={1} end={100} duration={3} />}+
          </div>
          <p className='text-3xl font-semibold text-gray-700 mt-6'>Dedicated team</p>
        </div>
        <div className='w-full lg:w-1/2'>
          <img
            src='https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg'
            alt='Team Illustration'
            className={`mx-auto w-full h-auto transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0'
            }`}
          />
        </div>
      </div>
    </section>
  )
}

export default TeamSection
