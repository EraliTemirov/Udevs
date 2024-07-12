const services = [
  {icon: '👥', title: 'Team', description: ''},
  {icon: '📱', title: 'Development of mobile applications', description: ''},
  {icon: '🔗', title: 'Development and implementation ERP systems', description: ''},
  {icon: '🎨', title: 'User interface, User experience design', description: ''},
  {icon: '⚙️', title: 'Optimization IT consulting infrastructure', description: ''},
  {icon: '💻', title: 'IT consulting', description: ''},
]

const Services = () => {
  return (
    <section className='py-12  '>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className='text-6xl font-bold text-start text-blue-600 mb-10'>Our services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col items-center text-center'
            >
              <div className='text-4xl  text-blue-500 mb-6 mt-6'>{service.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
