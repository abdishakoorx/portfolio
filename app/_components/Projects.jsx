'use client'

import React, { useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from 'next/image'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

const projects = [
  {
    title: "Property Management System",
    description: "A full-stack property management solution for landlords and agents.",
    technologies: ["React", "Node.js", "NextJs", "Supabase"],
    githubUrl: "https://github.com/abdishakoorx/primestate",
    liveUrl: "https://primestate-eta.vercel.app/",
    imageUrl: "/primestate.png"
  },
  {
    title: "Doctor Appointment System",
    description: "A web app for managing doctor appointments, with a seamless user experience.",
    technologies: ["NextJs", "Hygraph CMS", "TailwindCSS", "GraphQL"],
    githubUrl: "https://github.com/abdishakoorx/doctor_appoinment",
    liveUrl: "https://doctorwhere.vercel.app/",
    imageUrl: "/doctorwhere.png"
  },
  {
    title: "Food Scoring System",
    description: "Choose your food, submit them, and receive a score with feedback.",
    technologies: ["React", "NodeJs", "Python", "GraphQL"],
    githubUrl: "https://github.com/abdishakoorx/whiteplates",
    liveUrl: "https://whiteplates.vercel.app/",
    imageUrl: "/whiteplates.png"
  },
]

const ProjectCard = ({ project, index }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
    >
      <Card className="flex flex-col h-full bg-transparent">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription className='text-gray-700'>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <Image
            height={800}
            width={800}
            src={project.imageUrl}
            alt={`Screenshot of ${project.title}`}
            className="mb-4 rounded-md"
          />
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <Badge key={techIndex} className="text-gray-900 bg-teal-600 hover:bg-teal-500">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button size="sm" asChild className='text-gray-800 bg-transparent border-2 border-gray-700 hover:bg-accent'>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button size="sm" asChild className='bg-gray-900 hover:bg-gray-700'>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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