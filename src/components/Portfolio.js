import React, { useState } from 'react'
import hacktech from '../image/projects/hacktech.jpg'
import Weather from '../image/projects/WeatherApp.png'
import StudyNotion from '../image/projects/StudyNotion.jpg'


const Portfolio = () => {


    const projects = [
        {
            title: 'Hacktech',
            image: hacktech,
            link: 'https://thehacktech.vercel.app',
            codelink: 'https://github.com/pratikrajverma/HackTech',
            description: '  this is the development of a sophisticated MERN stack web application enabling localized teacher-student interaction through pin code -based searches, comprehensive profiles, and video demos   '
        },
        {
            title: 'StudyNotion',
            image: StudyNotion,
            link: 'https://thehacktech.vercel.app',
            codelink: '',
            description: ' This is a full stack course selling app with backend implementation in Nodejs and frontend development in react js while styling designe in Tailwind and Mongodb used as Database '
        },
        {
            title: 'Weather',
            image: Weather,
            link: 'https://my-weather-app-pratik.netlify.app/',
            codelink: 'https://github.com/pratikrajverma/weather-app',
            description: '  This is weather app implementation in HTML, CSS, Javascript '
        },
    ]


    const [indexNo, setIndexNo] = useState(null);


    const descriptionHandler = (index) => {

        if (index === indexNo) {

            setIndexNo(null)
        } else {

            setIndexNo(index)
        }


    }




    return (
        <div name='projects'
            className='bg-gradient-to-b from-black to-gray-800        text-white mt-20 '>

            <div className='flex flex-col h-full w-11/12   mx-auto  '>
                <div className='pb-8 ml-4'>
                    <p className='text-4xl  font-bold inline border-b-4 border-gray-500 '>Portfolio</p>
                    <p className='py-6 text-gray-400 text-xl font-semibold'>Check out some of my work right here</p>
                </div>

                {/* .............project.........*/}


                <div className='flex flex-col  mb-10  lg:gap-y-36 gap-y-24 w-[100%] '>

                    {
                        projects.map(({ title, image, link, codelink, description }, index) => (
                            <div key={index} className={` ${index % 2 ? 'flex-row-reverse' : 'flex-row'} w-[100%]   flex  items-end overflow-hidden gap-4 group `}  >

                                {/* project card */}
                                <div className='relative flex flex-col gap-y-4 border-gray-600 border rounded-sm bg-gray-800 lg:ml-4  lg:p-4 p-3 pb-5  w-[300px] lg:w-[600px] group ' >

                                    {/* project image */}
                                    <div className='lg:w-[100%]  lg:h-[300px]      '>
                                        <img src={image}
                                            className='lg:w-[100%]  lg:h-[300px]'
                                            alt='courseImage missing' />
                                    </div>

                                    <h1 className='text-2xl font-bold text-gray-400'>{title}</h1>


                                    {/* button */}
                                    <div className='flex gap-5  '>
                                        {/* Demo button */}
                                        <a href={link} target='_blank'
                                            rel="noreferrer"
                                            className=' py-2 bg-gray-600 hover:scale-95 duration-200 text-gray-200  lg:w-24 lg:px-0 px-2 text-center font-bold rounded-md'> Demo </a>

                                        {/* Code button */}
                                        <a href={codelink} target='_blank'
                                            rel="noreferrer"
                                            className=' py-2 bg-gray-600 hover:scale-95 duration-200 text-gray-200  lg:w-24 lg:px-0 px-2 text-center font-bold rounded-md'>  Code </a>

                                        {/* description button */}
                                        <div className=''>
                                            <button className=' py-2 bg-gray-600 hover:scale-95 duration-200 text-gray-200  lg:w-28 lg:px-0 px-2 text-center font-bold rounded-md'
                                                onClick={() => descriptionHandler(index)}>
                                                Description
                                            </button>

                                            {
                                                indexNo === index && (
                                                    <div className={` ${index % 2 ? ' lg:bottom-4 lg:-left-20  bottom-20 right-10 ' : ' lg:bottom-4 lg:-right-20 bottom-24 right-0  '} absolute   p-4 w-[300px]  rounded-lg  lg:max-h-[400px] bg-gray-600 z-10`}>
                                                        <p className='    '>{description}</p>
                                                        <div className={` ${index % 2 ? 'lg:-right-3 lg:bottom-4 right-6' : ' lg:-left-3 lg:bottom-5 -bottom-3 right-10'}     absolute  h-7 aspect-square rotate-45 bg-gray-600`}></div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>




                                </div>

                                {/* project No */}
                                <p className='lg:text-9xl text-2xl text-gray-400 font-sans opacity-0 group-hover:opacity-50 transition-opacity duration-700'>0{index + 1}</p>


                            </div>
                        ))

                    }

                </div>
            </div>

        </div>
    )
}

export default Portfolio




