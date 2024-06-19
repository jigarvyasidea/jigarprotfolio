import React from 'react'

import html from '../image/stack/CSS.png'
import tailwind from '../image/stack/Tailwind.png'
import Express from '../image/stack/Express.png'
import Git from '../image/stack/Git.svg'
import Github from '../image/stack/Github.svg'
import Javascript from '../image/stack/Javascript.svg'
import MongoDB from '../image/stack/MongoDB.svg'
import NodeJs from '../image/stack/NodeJs.svg'
import Reactjs from '../image/stack/React.png'
import Redux from '../image/stack/Redux.svg'
import Typescript from '../image/stack/Typescript.svg'
import Vercel from '../image/stack/Vercel.svg'
 



const Experience = () => {



    const techsstack = [
        {
            title: 'HTML',
            src:html,
            style:'shadow-blue-500'

        },
        {
            title: 'Tailwind',
            src:tailwind,
            style:'shadow-sky-500'
        },
        {
            title: 'Express',
            src:Express,
            style:'shadow-gray-500'
        },
        {
            title: 'Git',
            src:Git,
            style:'shadow-orange-500'
        },
        {
            title: 'Github',
            src:Github,
            style:'shadow-gray-500  ',
            imgStyle:'bg-white rounded-full'

        },
        {
            title: 'Javascript',
            src:Javascript,
            style:'shadow-yellow-500'
        },
        {
            title: 'MongoDB',
            src:MongoDB,
            style:'shadow-green-500'
        },
        {
            title: 'NodeJs',
            src:NodeJs,
            style:'shadow-lime-500'
        },
        {
            title: 'React',
            src:Reactjs,
            style:'shadow-blue-500'
        },
        {
            title: 'Redux',
            src:Redux,
            style:'shadow-purple-500'
        },
        {
            title: 'Typescript',
            src:Typescript,
            style:'shadow-sky-500 text-'
        },
        {
            title: 'Vercel',
            src:Vercel,
            style:'shadow-white bg-gray-900',
             imgStyle:'bg-white'
        },
       
 

    ]




  return (
    <div name='skills'
     className=' bg-gradient-to-bl from-gray-800 to-black min-h-screen w-full overflow-hidden'>

        <div className='flex flex-col   justify-center lg:w-11/12 w-full mx-auto  h-full text-white p-4 pt-20  '>

            <div>
                <p className='text-4xl font-bold border-b-4 rounded-2xl  border-gray-500 p-2 inline text-white'>Experience</p>
                <p className='py-10 text-gray-400 text-xl font-semibold'>These are the Technology I've worked with</p>
            </div>

            <div className='grid lg:w-11/12 grid-cols-2 sm:grid-cols-3 gap-14 text-center py-8 lg:px-14 px-10   lg:mx-auto sm:px-0'>
                 {
                    techsstack.map(({title,src,style,imgStyle},index)=>(
                            <div key={index} className={`shadow-md hover:scale-105 duration-500 py-2   ${style}`}>
                                <img src={src} alt='Tech_Image missing' className={`w-20 mx-auto ${imgStyle}`}/>
                                <p className='mt-4'>{title}</p>
                            </div>
                    ))
                 }
            </div>
        </div>
    </div>
  )
}

export default Experience