import React from 'react'

const About = () => {
  return (
    <div name='about' className='  min-h-screen pb-20 bg-gradient-to-bl from-gray-800 to-black text-white'>
      <div className='w-11/12 mx-auto relative '>
        <div className='pt-10 pl-4'>
          <p className='text-4xl font-bold inline-block border-b-4 border-gray-500 p-1'>About</p>
          <p className='py-6 text-gray-400 text-xl font-semibold '>If my skills and vibe resonate with you, here's a glimpse into who I am. </p>
        </div>

        <div className='ml-4 mt-10 flex flex-col gap-6'>
          <p className='text-gray-400 text-lg '>I am a dedicated Full Stack Developer with over two years of hands-on experience specializing
            in the MERN stack "MongoDB, Express.js, React, Node.js." My passion for web development has driven me
            to successfully complete a variety of projects, including a Local Area Teacher Finder, a Course Selling Website,
            and complex Payment Integration systems.</p>

          <h1 className='text-2xl text-gray-300 font-semibold '>My technical expertise includes:</h1>

          <div>
            <p className='text-gray-400 text-lg '>Frontend Development: Proficient in React.js, HTML, CSS, and JavaScript, creating dynamic and responsive user interfaces.</p>

            <p className='text-gray-400 text-lg '>Backend Development: Experienced with Node.js and Express.js for building scalable server-side applications.</p>
            <p className='text-gray-400 text-lg '>Database Management: Skilled in MongoDB for designing and maintaining efficient database schemas.</p>
            <p className='text-gray-400 text-lg '>API Development: Adept at developing and integrating RESTful APIs.</p>
            <p className='text-gray-400 text-lg '>Payment Integration: Implementing secure and reliable payment gateways</p>
            <p className='text-gray-400 text-lg '>Version Control: Competent with Git for version control and collaborative development</p>
          </div>


          <p className='text-gray-400 text-lg '>What sets me apart is my relentless drive to master new skills and my unwavering determination to overcome challenges. While I may take a methodical approach to problem-solving, my deep understanding of concepts ensures that I deliver robust and scalable solutions.</p>
          <p className='text-gray-400 text-lg '>I thrive in environments where I can continuously learn and contribute, and I am eager to bring my strong work ethic and technical skills to a dynamic team. I am particularly passionate about leveraging my abilities to build impactful web applications that solve real-world problems.</p>
        </div>


        {/* <div className='flex flex-col items-center   absolute  -bottom-36 lg:right-0'> */}
        <div className='flex   lg:justify-end justify-center mt-32 '>
          <div className='flex flex-col items-center'>
          <p className='font-semibold lg:text-xl text-yellow-500'>Pratik Raj Verma</p>
          <p className='text-gray-400 font-sans select-text '>Mob: 7903209052</p>
          <p className='text-gray-400 font-sans  select-text '>Email: erpratikrajverma@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About