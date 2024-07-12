import CountUp from 'react-countup'

const TeamSection = () => {
  return (
    <section className='py-12 bg-gray-50 '>
      <div className='max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center'>
        <div className='w-full lg:w-1/2 mb-10 lg:mb-0'>
          <h2 className='text-6xl font-bold text-blue-600 mb-4'>Team</h2>
          <p className='text-gray-700 mb-6 mt-6 text-lg'>
            For each project, we form a team that includes a project manager, business analyst, UI /
            UX designer, DevOps, QA engineer, backend and front-end developers.
          </p>
          <div className='text-8xl font-bold text-blue-600 mt-8'>
            <CountUp start={1} end={100} duration={3} />+
          </div>
          <p className='text-3xl font-semibold text-gray-700 mt-6'>Dedicated team</p>
        </div>
        <div className='w-full lg:w-1/2'>
          <img
            src='https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg'
            alt='Team Illustration'
            className='mx-auto'
          />
        </div>
      </div>
    </section>
  )
}

export default TeamSection
