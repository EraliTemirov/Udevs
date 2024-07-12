import Navbar from '../Components/Navbar'
import Showcase from '../Components/Showcase'
import ChatWidget from '../Components/ChatWidget'
import Services from '../Components/Services'
import '../App.css'
import TeamSection from '../Components/TeamSection'
import DevelopmentSection from '../Components/DevelopmentSection'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Services />
      <TeamSection />
      <DevelopmentSection />
      <ChatWidget />
    </div>
  )
}
