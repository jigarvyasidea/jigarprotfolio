import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import PratikResume from '../assets/PratikResume.pdf'

const SocialLinks = () => {

    const links = [
        {
            child: (
                <p className='flex w-32 justify-between   text-white text-xl'> LinkedIn <FaLinkedin size={30} /></p>
            ),

            href: 'https://www.linkedin.com/in/pratik-raj-verma-/'
        },
        {
            child: (
                <p className='flex w-32 justify-between   text-white text-xl'> GitHub <FaGithub size={30} /></p>
            ),

            href: 'https://github.com/pratikrajverma'
        },
        {
            child: (
                <p className='flex w-32 justify-between   text-white text-xl'> Email me <HiOutlineMail size={30} /></p>
            ),

            href: ' mailto:erpratikrajverma@gmail.com'
        },
        {
            child: (
                <p className='flex w-32 justify-between   text-white text-xl'>  Resume <BsFillPersonLinesFill size={30} /></p>
            ),

            href: PratikResume,
            download: true,

        },
    ]


    return (
        <div className='  fixed lg:top-[30%] top-[50%] z-30   '>
            <ul>

                {links.map(({ child, href, download }, index) => (

                    <li key={index} className='flex items-center h-10 w-fit bg-gray-700  py-6 px-2 ml-[-100px] hover:ml-0 duration-300'>
                        <a href={href}
                            download={download}
                            target='_blank'
                             rel="noreferrer"

                        >
                            {child}
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SocialLinks