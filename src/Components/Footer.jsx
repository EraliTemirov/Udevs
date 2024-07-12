import {FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-50 py-10'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h2 className='font-bold text-lg mb-4'>About us</h2>
            <ul className='flex flex-col gap-3'>
              <li>
                <a href='#' className='text-blue-500'>
                  Direction
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-500'>
                  Command
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-500'>
                  Tools
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-500'>
                  Clients
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold text-lg mb-4'>Services</h2>
            <ul className='flex flex-col gap-3'>
              <li>
                <a href='#' className='text-blue-500'>
                  Development of mobile applications
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-500'>
                  Development and implementation ERP systems
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-500'>
                  User interface, User experience design
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-500'>
                  IT consulting
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-500'>
                  Optimization IT consulting infrastructure
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold text-lg mb-4'>Portfolio</h2>
            <ul className='flex flex-col gap-3'>
              <li>
                <a href='#' className='text-blue-500'>
                  Delever
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-500'>
                  Sms.uz
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-500'>
                  Goodzone
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-500'>
                  Iman
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between items-center mt-10'>
          <p className='text-gray-600'>&copy; 2024 Udevs. All rights reserved</p>
          <div className='flex space-x-4'>
            <a href='#' className='text-blue-500'>
              <FaInstagram size='1.5em' />
            </a>
            <a href='#' className='text-blue-500'>
              <FaTwitter size='1.5em' />
            </a>
            <a href='#' className='text-blue-500'>
              <FaYoutube size='1.5em' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
