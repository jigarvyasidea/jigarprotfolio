import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },

    } = useForm()

    const emailSender = async (data)=>{
        
        console.log('data is ', data);
        const toastId = toast.loading("Email Sending....")
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/emailSender`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const emailResponse = await response.json();
        console.log('emailResponse : ', emailResponse)
        toast.success('Email sent successfully...')
        toast.dismiss(toastId)
    }


    return (
        <div name="contact"
            className='bg-gradient-to-br from-black to-gray-700 text-white   p-4 lg:min-h-screen'>

            <div className='flex flex-col p-4 justify-center   w-11/12  mx-auto h-full'>
                <div>
                    <p className='text-4xl font-bold inline-block border-b-4 border-gray-500 p-1'>Contact</p>
                    <p className='py-4 text-gray-400 text-xl font-semibold '>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center mt-20  '>
                    <form onSubmit={handleSubmit(emailSender)}
                        className='flex flex-col w-full ml-2 md:w-1/2'>
                        <input
                            type='text'
                          
                            placeholder='Enter your name'
                            {...register('name',{required:true})}
                            className='p-3 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                          {errors.name && <p className="text-red-500">name is required.</p>}


                        <input
                            type='text'
                            
                            {...register('email',{required:true})}
                            placeholder='Enter your email address'
                            className='p-3 bg-transparent border-2 my-5 rounded-md text-white focus:outline-none'
                        />
                         {errors.email && <p className="text-red-500">email is required.</p>}

                        <textarea
                             
                            placeholder='Enter your message'
                            {...register('message',{required:true})}
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                            cols='30'
                            rows='10'
                        />


                        <button type='submit' className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8
                                        mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
