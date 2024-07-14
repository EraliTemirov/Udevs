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
import Tools from '../Components/Tools'
import Clints from '../Components/Clints'
import Delivr from '../Components/Delivr'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import '../App.css'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div id='showcase'>
        <Showcase />
      </div>
      <div id='servicez'>
        <Services />
      </div>
      <div id='team'>
        <TeamSection />
      </div>
      <div id='development'>
        <DevelopmentSection />
      </div>
      <div id='erp'>
        <ErpSection />
      </div>
      <div id='ui'>
        <Uidesign />
      </div>
      <div id='optimization'>
        <Optimization />
      </div>
      <div id='consulting'>
        <Consulting />
      </div>
      <div id='tools'>
        <Tools />
      </div>
      <div id='clint'>
        <Clints />
      </div>
      <div id='delivr'>
        <Delivr />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <div id='footer'>
        <Footer />
      </div>
      <ChatWidget />
    </div>
  )
}
