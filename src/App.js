 import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import { Contact } from './components/Contact'
 
 
 
 const App = () => {
   return (
     <div className='bg-black select-none    overflow-hidden  '>
        <Navbar />
        <Home/> 
        <SocialLinks/>
        <Portfolio/>
        <Experience/>
        <About/>
        <Contact/>



        
 
   
    
     </div>
   )
 }
 
 export default App