import React from 'react'
import HeroImage from '../image/profile.png'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-scroll';



const Home = () => {
  return (
    <div name='home' 
        className='  h-screen w-full   bg-gradient-to-br from-black to-gray-700'>

      <div className='max-w-screen  flex flex-col md:flex-row    items-center justify-center h-full mx-4 md:px-10'>

        <div className='flex flex-col ml-5 justify-center h-full mt-16 gap-y-3'>

          <h1 className='text-white text-4xl sm:text-7xl font-bold'> Hello! I'm a Full Stack Web  Developer</h1>

          <p className='text-gray-400 text-xl py-4 max-w-md '>   I have   2 years of experience specializing in the MERN stack
            I create dynamic, responsive web applications with a focus on seamless user experiences
            My expertise includes React, Redux, Node.js, Express.js, and MongoDB
          </p>
          

          <Link to='projects' smooth duration={500}>
            <button className='flex gap-2 items-center  text-white font-semibold px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer group'>
              Portfolio

            <FaChevronRight className='group-hover:rotate-90 duration-300' />
            </button>

          </Link>

        </div>

        <div>
          <img src={HeroImage} alt='Profile  is missing'
            className='  lg:w-[500px] rounded-2xl '
          />
        </div>
      </div>

    </div>
  )
}

export default Home