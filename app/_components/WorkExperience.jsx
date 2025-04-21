"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const workExperiences = [
  {
    id: 1,
    company: "M-Treat",
    title: "Front-End Developer",
    city: "Nairobi, Kenya",
    period: "2025",
    description: [
      "Developing and maintaining responsive web applications using React, MUI, and Tailwind CSS.",
      "Collaborating with designers and backend developers to create intuitive user interfaces.",
      "Optimizing application performance and ensuring cross-browser compatibility.",
      "Implementing authentication systems and enhancing UI/UX for better user engagement."
    ],
    image: "/m-treat.webp",
    skills: ["Django", "React", "Tailwind CSS", "UI/UX", "Authentication"],
    href: "https://m-treat.com/"
  },
  {
    id: 2,
    company: "Blue Star Educational Centre",
    title: "Computer Science & IT Instructor",
    city: "Nairobi, Kenya",
    period: "2024",
    description: [
      "Teaching web development with React, Next.js, HTML, CSS, and JavaScript.",
      "Instructing students in graphic design using Adobe Photoshop, Illustrator, and Canva.",
      "Guiding students in UI/UX best practices, responsive design, and modern design trends.",
      "Mentoring students on front-end development projects, preparing them for real-world applications."
    ],
    image: "/blue-star.webp",
    skills: ["Teaching", "React", "Next.js", "HTML/CSS", "JavaScript", "Adobe Suite", "UI/UX", "Canva"],
    href: "/"
  },
  {
    id: 3,
    company: "Technical University of Mombasa (ICTS Department)",
    title: "Technical Intern & IT Support",
    city: "Mombasa, Kenya",
    period: "2023",
    description: [
      "Installed and maintained network cabling & hardware, improving network reliability.",
      "Provided student and staff support, troubleshooting technical issues and software applications.",
      "Assisted in testing newly launched websites, ensuring functionality and security compliance.",
      "Conducted training sessions on new IT services, enhancing user adoption."
    ],
    image: "/tum.webp",
    skills: ["IT Support", "Network Maintenance", "Technical Troubleshooting", "Website Testing", "Training"],
    href: "https://www.tum.ac.ke/"
  }
]

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-extrabold text-center text-gray-900">Work Experience</h2>
        <div className="grid gap-12">
          {workExperiences.map((work) => (
            <WorkItem key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  )
}

const WorkItem = ({ work }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="flex flex-col gap-8 items-start md:flex-row">
      <div
        className="overflow-hidden relative w-full rounded-lg shadow-lg md:w-2/5 aspect-video"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Link href={work.href} target="_blank" rel="noopener noreferrer">
          <Image
            src={work.image || "/placeholder.svg"}
            alt={`${work.company} workspace`}
            fill
            className={`object-cover transition-all duration-500 ${isHovering ? "scale-110" : "scale-100"}`}
          />
        </Link>
        <div className="absolute right-0 bottom-0 left-0 p-4 bg-gradient-to-t to-transparent from-black/70">
          <p className="font-semibold text-white">{work.company}</p>
          <p className="text-sm text-white/80">{work.city}</p>
        </div>
      </div>
      <div className="w-full md:w-3/5">
        <div className="flex flex-col justify-between mb-2 md:flex-row">
          <h3 className="text-xl font-bold dark:text-white">{work.title}</h3>
          <span className="text-gray-500 dark:text-gray-400">{work.period}</span>
        </div>
        <h4 className="mb-3 text-lg font-semibold text-gray-700 dark:text-gray-300">
          {work.company} - {work.city}
        </h4>

        <ul className="pl-5 mb-4 list-disc text-gray-600 dark:text-gray-400">
          {work.description.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>

        {work.skills && (
          <div className="flex flex-wrap gap-2 mt-4">
            {work.skills.map((skill, index) => (
              <Badge
                key={index}
                className="px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default WorkExperience