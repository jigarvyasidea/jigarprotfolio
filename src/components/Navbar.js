import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'


const Navbar = () => {



    const links = [
        {
            title: 'Home',
            path: "home",
        },
        {
            title: 'projects',
            path: "projects",

        },
        {
            title: 'skills',
            path: "skills",
        },
        {
            title: 'about',
            path: "about",
        },
        {
            title: 'contact',
            path: "contact",

        },
    ]


    const [navicon, setNavicon] = useState(true)





    return (
        <div className='relative'>
            <div className='flex z-20 justify-between items-center border-b border-gray-600 w-full h-20  px-10 text-white bg-black fixed'>

                <Link to='home'>
                    <div className='flex gap-x-3 -ml-4 cursor-pointer'>
                        <h1 className='lg:text-6xl text-5xl great-vibes-regular -rotate-6'> Pratik</h1>
                        <h1 className='lg:text-5xl text-4xl great-vibes-regular -rotate-6'> Raj</h1>
                        <h1 className='lg:text-4xl text-3xl great-vibes-regular -rotate-6'> Verma</h1>
                    </div>
                </Link>


                <ul className=' gap-x-4 hidden md:flex '>
                    {
                        links.map((link, index) => (

                            <li key={index} className='w-16   text-center relative '>
                                <Link to={`${link.path}`} smooth duration={500}>
                                    <div className=' cursor-pointer capitalize    font-bold text-gray-300   group '>
                                        {link.title}
                                    </div>
                                    <div className='   h-2  invisible  bg-gray-200 absolute top-[42px] rounded-md shadow-md w-16 transition-all duration-100 group2'></div>
                                </Link>


                            </li>


                        ))
                    }

                </ul>


                <div className='cursor-pointer md:hidden ml-3 text-gray-400'
                    onClick={() => setNavicon(!navicon)}
                >
                    {
                        navicon ? <FaBars size={30} /> : <FaTimes size={30} />
                    }

                </div>




            </div>

            {
                !navicon && (
                    <ul className='flex mt-16 fixed opacity-100 z-20 flex-col items-center justify-center bg-black h-screen gap-y-10 w-screen '>

                        {
                            links.map((link, index) => (

                                <Link to={`${link.path}`}
                                    key={index}>
                                    <li className=' cursor-pointer capitalize font-semibold text-gray-600  bg-gradient-to-r from-black to-gray-800 w-56 py-1  text-center rounded-md text-5xl shadow-md shadow-gray-400   '
                                        onClick={() => setNavicon(true)}
                                    >
                                        {link.title}


                                    </li>
                                </Link>


                            ))
                        }

                    </ul>
                )
            }

        </div>
    )
}

export default Navbar