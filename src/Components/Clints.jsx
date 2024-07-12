import '../Style/ClientsSection.css'

const clients = [
  {name: 'Space Coworking', color: 'bg-purple-600'},
  {name: 'Delever', color: 'bg-orange-500'},
  {name: 'Fonon', color: 'bg-yellow-100'},
  {name: 'Hamkorbank', color: 'bg-blue-600'},
  {name: 'Hoshimov Iqtisodiyoti', color: 'bg-red-600'},
  {name: 'Iman', color: 'bg-teal-500'},
  {name: 'Lakfa Medline', color: 'bg-red-600'},
]

const ClientsSection = () => {
  return (
    <div className='py-16 bg-gray-100'>
      <div className='w-full mx-auto px-4'>
        <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center text-blue-600 mb-12'>
          Our clients
        </h2>
        <div className='overflow-hidden'>
          <div className='flex animate-scroll-right'>
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-28  mx-4 sm:w-28 md:w-44 lg:w-56 h-16 sm:h-16 md:h-20 lg:h-28 p-2 rounded-lg ${client.color} flex items-center justify-center`}
              >
                <p>{client.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='overflow-hidden mt-14'>
          <div className='flex animate-scroll-left'>
            {[...clients, ...clients].reverse().map((client, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-28  mx-4 sm:w-28 md:w-44 lg:w-56 h-16 sm:h-16 md:h-20 lg:h-28 p-2  rounded-lg ${client.color} flex items-center justify-center`}
              >
                <p>{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientsSection
