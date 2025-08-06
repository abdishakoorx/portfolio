import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Zap, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"



export default function ProjectsSection() {
    const projects = [
        {
            title: "AI Travel Planner",
            description:
                "A web app with AI that generates smart recommendations for trips.",
            tech: ["Vite", "JavaScript", "Gemini AI", "Tailwind CSS"],
            github: "https://github.com/abdishakoorx/trip_planner",
            live: "https://greatertrips.vercel.app/",
            image: "/greatertrips.webp",
            impact: "40% increase in user productivity",
        },
        {
            title: "AI Video Shorts Creator",
            description: "AI-powered platform for creating professional YouTube shorts with ease.",
            tech: ["NextJs", "TypeScript", "NeonPg", "TailwindCSS", "Clerk"],
            github: "https://github.com/abdishakoorx/meeedia",
            live: "https://meeeedia.vercel.app/",
            image: "/meeedia.webp",
            impact: "60% faster decision making",
        },
        {
            title: "Doctor Appointment System",
            description: "A web app for managing doctor appointments, with a seamless user experience.",
            tech: ["NextJs", "Hygraph CMS", "TailwindCSS", "GraphQL", "Kinde"],
            github: "https://github.com/abdishakoorx/doctor_appoinment",
            live: "https://doctorwhere.vercel.app/",
            image: "/doctorwhere.webp",
            impact: "300% revenue growth",
        },
        {
            title: "Property Management System",
            description: "A full-stack property management solution for landlords and agents.",
            tech: ["React", "Node.js", "NextJs", "Supabase", "Clerk"],
            github: "https://github.com/abdishakoorx/primestate",
            live: "https://primestate-eta.vercel.app/",
            image: "/primestate.webp",
            impact: "50% reduction in meeting time",
        },
    ]

    return (
        <section id="projects" className="px-6 py-20 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold">Featured Projects</h2>
                    <div className="w-20 h-1 mx-auto mb-6 bg-blue-400"></div>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        A showcase of my recent work, demonstrating expertise in full-stack development, system architecture, and
                        modern web technologies.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden transition-all duration-300 bg-gray-800 border-gray-700 hover:border-blue-400 group"
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    width={500}
                                    height={300}
                                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent opacity-20"></div>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="mb-4 leading-relaxed text-gray-300">{project.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-xs text-gray-300 bg-gray-700">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <Badge variant="secondary" className="text-xs text-gray-300 bg-gray-700">
                                                +{project.tech.length - 3}
                                            </Badge>
                                        )}
                                    </div>
                                    <div className="text-sm font-medium text-emerald-400">
                                        <Zap className="inline w-4 h-4 mr-1" />
                                        {project.impact}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button asChild variant="ghost" className="bg-gray-100">
                                    <Link href={project.github} className="text-gray-900 transition-colors hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                                        <GitHubLogoIcon className="w-5 h-5" />
                                        Github
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="border-gray-100">
                                    <Link href={project.live} className="text-gray-100 bg-transparent transition-colors hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-5 h-5" />
                                        Live Demo
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button
                        asChild
                        variant="outline"
                        className="text-blue-400 bg-transparent border-blue-400 hover:bg-blue-400 hover:text-gray-950"
                    >
                        <Link href="https://github.com/abdishakoorx" target="_blank" rel="noopener noreferrer">
                            <span>View All Projects</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
