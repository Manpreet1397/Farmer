import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import DisplayCard from './Components/DisplayCard'
import Faq from './Components/Faq'
import Pricing from './Components/Pricing'
import Intro from './Components/Intro'
import Include from './Components/Include'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
    <Home/>
    {/* <DisplayCard/> */}
    <Include/>
    <Intro/>
     <Features/>
    <Pricing/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default App
