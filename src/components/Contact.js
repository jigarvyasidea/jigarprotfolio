import React from 'react'

export const Contact = () => {
  return (
    <div name="contact" 
        className='bg-gradient-to-br from-black to-gray-700 text-white   p-4 lg:min-h-screen'>

        <div className='flex flex-col p-4 justify-center   w-11/12  mx-auto h-full'>
            <div>
                <p className='text-4xl font-bold inline-block border-b-4 border-gray-500 p-1'>Contact</p>
                <p className='py-6 text-gray-400 text-xl font-semibold '>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center mt-20  '>
                <form className='flex flex-col w-full md:w-1/2'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                        className='p-3 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Enter your email address'
                        className='p-3 bg-transparent border-2 my-5 rounded-md text-white focus:outline-none'
                    />

                    <textarea
                        name='message'
                        placeholder='Enter your message'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        cols='30'
                        rows='10'
                    />

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8
                                        mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                                            Let's talk
                                        </button>
                </form>
            </div>
        </div>
    </div>
  )
}
