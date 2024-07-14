import {useEffect, useRef} from 'react'

const services = [
  {icon: '👥', title: 'Team', description: ''},
  {icon: '📱', title: 'Development of mobile applications', description: ''},
  {icon: '🔗', title: 'Development and implementation ERP systems', description: ''},
  {icon: '🎨', title: 'User interface, User experience design', description: ''},
  {icon: '⚙️', title: 'Optimization IT consulting infrastructure', description: ''},
  {icon: '💻', title: 'IT consulting', description: ''},
]

const Services = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0')
            entry.target.classList.add('opacity-100')
          }
        })
      },
      {threshold: 0.1}
    )

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card)
      }
    })

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card)
        }
      })
    }
  }, [])

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-600 text-start ml-5 mb-8'>
        Our services
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`bg-white p-6 rounded-lg shadow-md transform transition-opacity duration-500 ease-out opacity-0`}
          >
            <div className='text-4xl mb-4'>{service.icon}</div>
            <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
            <p className='text-gray-600'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
