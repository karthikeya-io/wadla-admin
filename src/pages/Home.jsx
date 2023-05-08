import React from 'react'
import Nav from '../components/Nav'
import BannerSec from '../components/BannerSec'
import '../css/styles.css'
import NewsSec from '../components/NewsSec'
import About from '../components/About'
import CommitteeSec from '../components/CommitteeSec'
import Registration from '../components/Registration'
import HistorySec from '../components/HistorySec'
import Footer from '../components/Footer'
import Sponsers from '../components/Sponsers'
import Organizers from '../components/Organizers'
import SpeakersSec from '../components/SpeakersSec'
import Schedule from '../components/Schedule'


const Home = () => {

  return (
    <div className='body' id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
        <Nav />
        <BannerSec />
        <br></br>
        <NewsSec/>
        <SpeakersSec/>
        <About/>
        <Schedule/>
        <CommitteeSec/>
        <Registration/>
        <HistorySec/>
        <Sponsers/>
        <Organizers/>
        <Footer/>
    </div>
  )
}

export default Home