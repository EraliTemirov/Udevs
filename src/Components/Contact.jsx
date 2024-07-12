import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto  py-16 px-8 shadow-2xl'>
        <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-600 mb-8'>
          Contact us
        </h1>

        <div className='flex flex-col md:flex-row gap-8 mt-12'>
          <div className='w-full md:w-1/2'>
            <h2 className='text-2xl font-semibold mb-4'>Leave us a message</h2>
            <form>
              <input
                type='text'
                placeholder='Name'
                className='w-full p-2 mb-4 border border-gray-300 rounded'
              />
              <input
                type='email'
                placeholder='Your email'
                className='w-full p-2 mb-4 border border-gray-300 rounded'
              />
              <textarea
                placeholder='Briefly describe your project'
                className='w-full p-2 mb-4 border border-gray-300 rounded h-32'
              ></textarea>
              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300'
              >
                Send
              </button>
            </form>
          </div>

          <div className='w-full md:w-1/2 mt-12'>
            <div className='mb-4'>
              <p className='flex items-center mb-2'>
                <FaMapMarkerAlt className='text-blue-600 mr-2' />
                Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
              </p>
              <p className='flex items-center mb-2'>
                <FaPhone className='text-blue-600 mr-2' />
                +998 33 66 00 999
              </p>
              <p className='flex items-center mb-2'>
                <FaEnvelope className='text-blue-600 mr-2' />
                azizbek.b@udevs.io
              </p>
              <p className='flex items-center mb-2'>
                <FaTelegramPlane className='text-blue-600 mr-2' />
                t.me/azizbekbakhodirov
              </p>
            </div>

            <div className='flex gap-4 mb-4'>
              <FaYoutube className='text-gray-600 hover:text-red-600 cursor-pointer' size={24} />
              <FaInstagram className='text-gray-600 hover:text-pink-600 cursor-pointer' size={24} />
              <FaFacebookF className='text-gray-600 hover:text-blue-600 cursor-pointer' size={24} />
              <FaTwitter className='text-gray-600 hover:text-blue-400 cursor-pointer' size={24} />
            </div>

            <div className='w-full h-64'>
              <iframe
                src='https://yandex.com/map-widget/v1/-/CCUBiMXkKA'
                width='100%'
                height='100%'
                frameBorder='0'
                allowFullScreen={true}
                style={{position: 'relative'}}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
