import {useState} from 'react'
import {MdPhp} from 'react-icons/md'
import {FaReact, FaJava, FaAws, FaDocker} from 'react-icons/fa'
import {DiJavascript, DiGoogleCloudPlatform, DiPython, DiNodejs} from 'react-icons/di'
import {RiNextjsFill} from 'react-icons/ri'
import {
  SiKubernetes,
  SiPrometheus,
  SiGrafana,
  SiTerraform,
  SiMongodb,
  SiPostgresql,
  SiAppium,
} from 'react-icons/si'
import {AiFillAndroid} from 'react-icons/ai'

const categories = ['Frontend', 'Backend', 'Devops', 'Testing', 'UX/UI', 'Infrastructure', 'Mobile']

const tools = [
  {name: 'Appium', category: 'Testing', Icon: SiAppium},
  {name: 'Nextjs', category: 'Frontend', Icon: RiNextjsFill},
  {name: 'Javascript', category: 'Frontend', Icon: DiJavascript},
  {name: 'Reactjs', category: 'Frontend', Icon: FaReact},
  {name: 'PHP', category: 'Backend', Icon: MdPhp},
  {name: 'Postgresql', category: 'Backend', Icon: SiPostgresql},
  {name: 'Prometheus', category: 'Devops', Icon: SiPrometheus},
  {name: 'Grafana', category: 'Devops', Icon: SiGrafana},
  {name: 'Terraform', category: 'Devops', Icon: SiTerraform},
  {name: 'Java', category: 'Backend', Icon: FaJava},
  {name: 'Python', category: 'Backend', Icon: DiPython},
  {name: 'Node.js', category: 'Backend', Icon: DiNodejs},
  {name: 'Android', category: 'Mobile', Icon: AiFillAndroid},
  {name: 'AWS', category: 'Infrastructure', Icon: FaAws},
  {name: 'GCP', category: 'Infrastructure', Icon: DiGoogleCloudPlatform},
  {name: 'Kubernetes', category: 'Infrastructure', Icon: SiKubernetes},
  {name: 'Docker', category: 'Devops', Icon: FaDocker},
  {name: 'MongoDB', category: 'Backend', Icon: SiMongodb},
]

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <div>
      <div className='max-w-7xl mx-auto p-4 mt-10 py-16'>
        <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-blue-600 mb-4'>
          Tools
        </h2>
        <div className='flex flex-wrap gap-4 mb-6'>
          {categories.map((category) => (
            <label key={category} className='inline-flex items-center cursor-pointer mb-4'>
              <input
                type='radio'
                className='form-radio  text-blue-600 '
                name='category'
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
              />
              <span className='text-xl  md:text-2xl  font-medium text-gray-700 ml-2'>
                {category}
              </span>
            </label>
          ))}
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {tools.map((tool) => (
            <div
              key={tool.name}
              className={`p-4 rounded-lg transition-all duration-300 ${
                selectedCategory === '' || selectedCategory === tool.category
                  ? 'bg-blue-200'
                  : 'bg-gray-200 opacity-50'
              }`}
            >
              <tool.Icon className='w-12 h-12 mx-auto mb-2' />
              <p className='text-center text-sm font-medium'>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
