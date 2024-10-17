import React from 'react'

function About() {
    return (
        <div className="relative w-full overflow-hidden min-h-96">
            {/* Grid background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                  linear-gradient(to right, #DBDCDA 1px, transparent 1px),
                  linear-gradient(to bottom, #DBDCDA 1px, transparent 1px)
                `,
                    backgroundSize: '64px 64px',
                }}
            />

            {/* Radial gradient for blurring effect */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle, transparent 50%, #E7E7E7 50%)',
                }}
            />

            {/* Content area */}
            <main className="relative z-10 flex items-center justify-center h-full pt-16">
                <div div className='flex items-center justify-center' >
                    <div className='flex flex-col items-center justify-center max-w-3xl mx-auto space-y-8 text-center'>
                        <h1 className='text-4xl font-extrabold leading-tight text-gray-950 sm:text-5xl lg:text-6xl'>Hi! My name is
                            <span className='ml-4 text-transparent bg-gradient-to-b from-[#333333] to-[#dd1818] bg-clip-text'>
                                Abdishakoor Hassan
                            </span>.
                        </h1>
                        <h2 className='max-w-4xl text-xl tracking-wide text-gray-600'>I am a Software Developer specializing in full-stack web development with a passion for creating efficient, scalable, and user-friendly applications.</h2>
                    </div>
                </div>
                
            </main>
        </div>
    )
}

export default About

