import React from 'react'

function About() {
    return (
        <div className='flex items-center justify-center pt-16'>
            <div className='flex flex-col items-center justify-center max-w-3xl mx-auto space-y-8 text-center'>
                <h1 className='text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl'>Hi! My name is 
                <span className='ml-4 text-transparent bg-gradient-to-b from-purple-700 to-blue-400 bg-clip-text'>Abdishakoor Hassan</span>.</h1>
                <h2 className='max-w-2xl text-xl text-gray-600'>I am a Software Developer specializing in full-stack web development with a passion for creating efficient, scalable, and user-friendly applications.</h2>
            </div>
        </div>
    )
}

export default About