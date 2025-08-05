import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Zap, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"



export default function ProjectsSection() {
    const projects = [
        {
            title: "Enterprise SaaS Platform",
            description:
                "Full-stack B2B platform serving 10K+ users with real-time collaboration, advanced analytics, and multi-tenant architecture.",
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS"],
            github: "#",
            live: "#",
            impact: "40% increase in user productivity",
            image: "/placeholder.svg?height=300&width=500",
        },
        {
            title: "AI-Powered Analytics Dashboard",
            description:
                "Real-time data visualization platform with ML-driven insights, processing 1M+ events daily with sub-second latency.",
            tech: ["React", "Python", "FastAPI", "TensorFlow", "Docker"],
            github: "#",
            live: "#",
            impact: "60% faster decision making",
            image: "/placeholder.svg?height=300&width=500",
        },
        {
            title: "Microservices E-commerce",
            description:
                "Scalable e-commerce platform with microservices architecture, handling 100K+ transactions with 99.9% uptime.",
            tech: ["Node.js", "MongoDB", "Kubernetes", "GraphQL", "Stripe"],
            github: "#",
            live: "#",
            impact: "300% revenue growth",
            image: "/placeholder.svg?height=300&width=500",
        },
        {
            title: "Real-time Collaboration Tool",
            description:
                "WebRTC-based collaboration platform with live editing, video calls, and seamless file sharing for remote teams.",
            tech: ["Vue.js", "WebRTC", "Socket.io", "Express.js", "AWS"],
            github: "#",
            live: "#",
            impact: "50% reduction in meeting time",
            image: "/placeholder.svg?height=300&width=500",
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
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                                        {project.title}
                                    </h3>
                                    <div className="flex space-x-2">
                                        <Link href={project.github} className="text-gray-400 transition-colors hover:text-blue-400">
                                            <GitHubLogoIcon className="w-5 h-5" />
                                        </Link>
                                        <Link href={project.live} className="text-gray-400 transition-colors hover:text-blue-400">
                                            <ExternalLink className="w-5 h-5" />
                                        </Link>
                                    </div>
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
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button
                        variant="outline"
                        className="text-blue-400 bg-transparent border-blue-400 hover:bg-blue-400 hover:text-gray-950"
                    >
                        View All Projects
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
