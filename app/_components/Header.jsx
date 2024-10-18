"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function Header() {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'projects'];
            const scrollPosition = window.scrollY;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className='fixed top-0 left-0 right-0 z-50 px-16 backdrop-blur-md'>
            <div className='flex items-center justify-between mt-4 mb-2'>
                <div className='flex items-center gap-12'>
                    <Image
                        src="/me.jpg"
                        width={400}
                        height={400}
                        alt='me'
                        className='rounded-full h-[36px] w-[36px] object-cover' 
                    />
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">
                            Abdishakoor
                        </h1>
                    </div>
                </div>
                <nav>
                    <ul className='items-center hidden gap-8 md:flex'>
                        {['about', 'projects'].map((section) => (
                            <li key={section}>
                                <button
                                    onClick={() => scrollToSection(section)}
                                    className={`
                                        relative px-3 py-2 text-lg capitalize transition-colors
                                        hover:text-purple-700
                                        ${activeSection === section ? 'text-purple-700' : 'text-gray-800'}
                                    `}
                                >
                                    {section}
                                    {activeSection === section && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header