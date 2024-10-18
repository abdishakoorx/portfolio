import Image from 'next/image';
import React from 'react';

function TechTools() {
    const techStack = [
        {
            name: 'React',
            imgSrc: '/React.png',
        },
        {
            name: 'AWS',
            imgSrc: '/AWS.png',
        },
        // {
        //     name: 'Bun',
        //     imgSrc: '/Bun.png',
        // },
        {
            name: 'Python',
            imgSrc: '/Python.png',
        },
        // {
        //     name: 'Flutter',
        //     imgSrc: '/Flutter.png',
        // },
        // {
        //     name: 'Node.js',
        //     imgSrc: '/Node.js.png',
        // },
        // {
        //     name: 'Google Cloud',
        //     imgSrc: '/Google Cloud.png',
        // },
        // {
        //     name: 'GraphQL',
        //     imgSrc: '/GraphQL.png',
        // },
        {
            name: 'Java',
            imgSrc: '/Java.png',
        },
        // {
        //     name: 'MongoDB',
        //     imgSrc: '/MongoDB.png',
        // },
        {
            name: 'Next.js',
            imgSrc: '/Next.js.png',
        },
        // {
        //     name: 'Go',
        //     imgSrc: '/Go.png',
        // },
        {
            name: 'PostgreSQL',
            imgSrc: '/PostgresSQL.png',
        },
        // {
        //     name: 'Django',
        //     imgSrc: '/Django.png',
        // },
        // {
        //     name: 'TypeScript',
        //     imgSrc: '/TypeScript.png',
        // },
    ];

    return (
        <div className="w-full py-8">
            <div className="flex items-center justify-center max-w-5xl px-4 mx-auto">
                {/* <h2 className="mb-12 text-3xl font-bold text-center ">
                    Tech Stack & Tools
                </h2> */}
                <div className="grid items-center max-w-2xl grid-cols-3 gap-8 justify-items-center lg:grid-cols-6">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 transition-colors duration-200 rounded-lg"
                        >
                            <div className="relative flex items-center justify-center w-16 h-16 max-w-2xl">
                                <Image
                                    height={60}
                                    width={60}
                                    src={tech.imgSrc}
                                    alt={`${tech.name} logo`}
                                    className="object-contain w-12 h-12 transition-transform duration-200 group-hover:scale-110"
                                />
                            </div>
                            {/* <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                                {tech.name}
                            </span> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TechTools;