'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from 'next/image'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const projects = [
  {
    title: "Doctor Appointment System",
    description: "A web app for managing doctor appointments, with a seamless user experience.",
    technologies: ["NextJs", "Hygraph CMS", "TailwindCSS", "GraphQL", "Kinde"],
    githubUrl: "https://github.com/abdishakoorx/doctor_appoinment",
    liveUrl: "https://doctorwhere.vercel.app/",
    imageUrl: "/doctorwhere.webp"
  },
  {
    title: "AI Travel Planner",
    description: "A web app with AI that generates smart recommendations for trips.",
    technologies: ["Vite", "JavaScript", "Gemini AI", "Tailwind CSS"],
    githubUrl: "https://github.com/abdishakoorx/trip_planner",
    liveUrl: "https://greatertrips.vercel.app/",
    imageUrl: "/greatertrips.webp"
  },
  {
    title: "Property Management System",
    description: "A full-stack property management solution for landlords and agents.",
    technologies: ["React", "Node.js", "NextJs", "Supabase", "Clerk"],
    githubUrl: "https://github.com/abdishakoorx/primestate",
    liveUrl: "https://primestate-eta.vercel.app/",
    imageUrl: "/primestate.webp"
  },
  {
    title: "Video Creator",
    description: "AI-powered platform for creating professional videos with ease.",
    technologies: ["NextJs", "TypeScript", "NeonPg", "TailwindCSS", "Clerk"],
    githubUrl: "https://github.com/abdishakoorx/meeedia",
    liveUrl: "https://meeeedia.vercel.app/",
    imageUrl: "/meeedia.webp"
  },
]

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="flex flex-col h-full bg-transparent">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className='text-gray-700'>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <Image
              height={800}
              width={800}
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
              className="mb-4 rounded-md"
            />
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} className="text-[#2a2d6f] bg-teal-300 hover:bg-teal-500">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button size="sm" asChild className='text-gray-800 bg-transparent border-2 border-gray-700 hover:bg-accent'>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon className="w-4 h-4 mr-2" />
              GitHub
            </Link>
          </Button>
          <Button size="sm" asChild className='bg-gray-900 hover:bg-gray-700'>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="mb-8 text-4xl font-extrabold text-center text-gray-900"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects