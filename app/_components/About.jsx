import { Badge } from '@/components/ui/badge'
import React from 'react'

function About() {
    return (
        <div className="relative w-full min-h-full overflow-hidden">
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
                <div className='flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center max-w-4xl mx-auto space-y-8 text-center'>
                        <div className='flex flex-wrap justify-center gap-3'>
                            <Badge className="text-gray-50 bg-teal-600 hover:bg-teal-600 text-sm">
                                Full Stack Developer
                            </Badge>
                            <Badge className="text-white bg-teal-600 hover:bg-teal-600 text-sm">
                                Software Engineer
                            </Badge>
                        </div>
                        <h1 className='text-4xl font-extrabold leading-tight text-gray-950 sm:text-5xl lg:text-6xl'>
                            Transforming Ideas into
                            <span className='block mt-2 text-transparent bg-gradient-to-b from-[#333333] to-[#dd1818] bg-clip-text leading-normal pb-1'>
                                Digital Solutions
                            </span>
                        </h1>
                        <div className='space-y-4'>
                            <p className='max-w-4xl text-lg tracking-wide text-gray-600 md:text-xl'>
                                I craft efficient, scalable web applications that solve real-world problems.
                                Specializing in modern web technologies like React, Next.js, and Node.js,
                                I focus on creating seamless user experiences backed by robust architecture.
                            </p>
                            <p className='text-lg text-gray-600 md:text-xl'>
                                Currently exploring <span className='font-semibold'>AI integration</span> and
                                <span className='font-semibold'> cloud-native solutions</span> to build the next generation of web applications.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About