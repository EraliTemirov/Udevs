import React from 'react'
import {useState} from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mobileOpen, setMobileOpen] = useState({
    services: false,
    portfolio: false,
    language: false,
  })

  const services = [
    'Development of mobile applications',
    'Development and implementation',
    'User interface',
    'IT consulting',
    'Optimization',
  ]

  const portfolioItems = ['Delever', 'Sms.uz', 'Goodzone', 'Iman']
  const languages = ['Русский', 'English']

  const toggleMobileMenu = (menu) => {
    setMobileOpen((prev) => ({...prev, [menu]: !prev[menu]}))
  }

  return (
    <nav className='fixed top-0 left-0 z-50 w-full bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              {/* <img className='h-8 w-auto' src=' ' alt='udevs' /> */}
              <p className='text-2xl font-bold'>
                <span className='text-blue-700'>U</span>devs
              </p>
            </div>
          </div>
          <div className='hidden xl:ml-6 xl:flex xl:space-x-8'>
            <Link
              to='servicez'
              smooth={true}
              duration={500}
              className='border-b-2 border-blue-500  text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium'
            >
              <button>Direction</button>
            </Link>
            <Link
              to='team'
              smooth={true}
              duration={500}
              className='border-transparent text-gray-500  hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
            >
              <button> Command</button>
            </Link>
            <div className='relative group'>
              <button
                type='button'
                className='text-gray-500 group inline-flex items-center hover:text-gray-700 text-sm font-medium'
              >
                Services
                <svg
                  className='ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <div className='absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                <div
                  className='py-1'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='options-menu'
                >
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Link
              to='tools'
              smooth={true}
              duration={500}
              className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
            >
              <button> Tools</button>
            </Link>
            <Link
              to='clints'
              smooth={true}
              duration={500}
              className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
            >
              <button> Clients</button>
            </Link>
            <div className='relative group'>
              <button
                type='button'
                className='text-gray-500 group inline-flex items-center hover:text-gray-700 text-sm font-medium'
              >
                Portfolio
                <svg
                  className='ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <div className='absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                <div
                  className='py-1'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='options-menu'
                >
                  {portfolioItems.map((item, index) => (
                    <a
                      key={index}
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className='relative group'>
              <button
                type='button'
                className='text-gray-500 group inline-flex items-center hover:text-gray-700 text-sm font-medium'
              >
                Language
              </button>
              <div className='absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                <div
                  className='py-1'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='options-menu'
                >
                  {languages.map((lang, index) => (
                    <a
                      key={index}
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                    >
                      {lang}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='hidden xl:ml-6 xl:flex xl:items-center'>
            <Link to='contact' smooth={true} duration={500}>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              >
                Contact
              </button>
            </Link>
          </div>
          <div className='-mr-2 flex items-center xl:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {!isOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='xl:hidden'>
          <div className='pt-2 pb-3 space-y-1'>
            <a
              href='#'
              className='bg-blue-50 border-blue-500 text-blue-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
            >
              Direction
            </a>
            <a
              href='#'
              className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
            >
              Command
            </a>
            <div>
              <button
                onClick={() => toggleMobileMenu('services')}
                className='w-full text-left border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium justify-between items-center'
              >
                Services
                <svg
                  className={`h-5 w-5 text-gray-400 transform ${
                    mobileOpen.services ? 'rotate-180' : ''
                  }`}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              {mobileOpen.services &&
                services.map((service, index) => (
                  <a
                    key={index}
                    href='#'
                    className='block pl-6 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                  >
                    {service}
                  </a>
                ))}
            </div>
            <a
              href='#'
              className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
            >
              Tools
            </a>
            <a
              href='#'
              className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
            >
              Clients
            </a>
            <div>
              <button
                onClick={() => toggleMobileMenu('portfolio')}
                className='w-full text-left border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium justify-between items-center'
              >
                Portfolio
                <svg
                  className={`h-5 w-5 text-gray-400 transform ${
                    mobileOpen.portfolio ? 'rotate-180' : ''
                  }`}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              {mobileOpen.portfolio &&
                portfolioItems.map((item, index) => (
                  <a
                    key={index}
                    href='#'
                    className='block pl-6 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                  >
                    {item}
                  </a>
                ))}
            </div>
            <div>
              <button
                onClick={() => toggleMobileMenu('language')}
                className='w-full text-left border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium justify-between items-center'
              >
                Language
                <svg
                  className={`h-5 w-5 text-gray-400 transform ${
                    mobileOpen.language ? 'rotate-180' : ''
                  }`}
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              {mobileOpen.language &&
                languages.map((lang, index) => (
                  <a
                    key={index}
                    href='#'
                    className='block pl-6 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                  >
                    {lang}
                  </a>
                ))}
            </div>
          </div>
          <div className='pt-4 pb-3 border-t border-gray-200'>
            <div className='mt-3 space-y-1'>
              <button
                type='button'
                className='w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
