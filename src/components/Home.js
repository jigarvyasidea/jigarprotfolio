import React from 'react'
import HeroImage from '../image/profile.png'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-scroll';



const Home = () => {
  return (
    <div name='home' 
        className='  lg:h-screen  bg-gradient-to-br from-black to-gray-700'>

      <div className='max-w-screen  flex flex-col md:flex-row    items-center justify-center h-full pt-10 lg:pt-0 lg:pb-0 pb-5 lg:mx-4 md:px-10'>

        <div className='flex flex-col lg:ml-5 justify-center mx-auto lg:w-[100%] w-[75%]   h-full mt-16 gap-y-5'>

          <h1 className='text-white text-4xl lg:text-7xl    lg:-ml-0 -ml-6 font-bold'> Hello! I'm a Full Stack Web  Developer</h1>

          <p className='text-gray-400 text-xl py-4 lg:max-w-md ml-2 text-justify tracking-tighter'>   I have   2 years of experience specializing in the MERN stack
            I create dynamic, responsive web applications with a focus on seamless user experiences
            My expertise includes React, Redux, Node.js, Express.js, and MongoDB
          </p>
          

          <Link to='projects' smooth duration={500}>
            <button className='flex gap-2 items-center  text-white font-semibold px-6 py-3  my-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer group'>
              Portfolio

            <FaChevronRight className='group-hover:rotate-90 duration-300' />
            </button>

          </Link>

        </div>

        <div className='mt-2'>
          <img src={HeroImage} alt='Profile  is missing'
            className='  lg:w-[500px] w-[270px] rounded-2xl '
          />
        </div>
      </div>

    </div>
  )
}

export default Home