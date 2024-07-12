import Navbar from '../Components/Navbar'
import Showcase from '../Components/Showcase'
import ChatWidget from '../Components/ChatWidget'
import Services from '../Components/Services'
import TeamSection from '../Components/TeamSection'
import DevelopmentSection from '../Components/DevelopmentSection'
import ErpSection from '../Components/ErpSection'
import Uidesign from '../Components/Uidesign'
import Optimization from '../Components/Optimization'
import Consulting from '../Components/Consulting'
import '../App.css'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Services />
      <TeamSection />
      <DevelopmentSection />
      <ErpSection />
      <Uidesign />
      <Optimization />
      <Consulting />
      <ChatWidget />
    </div>
  )
}
