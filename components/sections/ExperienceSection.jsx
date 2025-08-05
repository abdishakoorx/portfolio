import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function ExperienceSection() {
    const experience = [
        {
            company: "TechCorp Inc.",
            role: "Senior Full-Stack Engineer",
            period: "2022 - Present",
            location: "San Francisco, CA",
            achievements: [
                "Led development of core platform serving 50K+ daily active users",
                "Reduced API response time by 70% through optimization and caching",
                "Mentored 5 junior developers and established coding standards",
                "Architected microservices migration reducing infrastructure costs by 40%",
            ],
            tech: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
        },
        {
            company: "StartupXYZ",
            role: "Full-Stack Developer",
            period: "2020 - 2022",
            location: "Austin, TX",
            achievements: [
                "Built MVP from scratch that secured $2M Series A funding",
                "Implemented real-time features serving 10K+ concurrent users",
                "Established CI/CD pipeline reducing deployment time by 80%",
                "Collaborated with design team to create pixel-perfect user interfaces",
            ],
            tech: ["Vue.js", "Python", "MongoDB", "Redis", "GCP"],
        },
        {
            company: "Digital Agency Pro",
            role: "Frontend Developer",
            period: "2018 - 2020",
            location: "Remote",
            achievements: [
                "Delivered 20+ client projects with 100% on-time completion rate",
                "Improved website performance by 60% through optimization techniques",
                "Created reusable component library used across 15+ projects",
                "Collaborated with UX designers to enhance user experience",
            ],
            tech: ["React", "JavaScript", "SASS", "WordPress", "Figma"],
        },
    ]

    return (
        <section id="experience" className="px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold">Experience</h2>
                    <div className="w-20 h-1 mx-auto bg-blue-400"></div>
                </div>

                <div className="space-y-8">
                    {experience.map((job, index) => (
                        <Card key={index} className="transition-colors bg-gray-800 border-gray-700 hover:border-blue-400">
                            <CardContent className="p-8">
                                <div className="flex flex-col mb-6 md:flex-row md:items-start md:justify-between">
                                    <div>
                                        <h3 className="mb-2 text-xl font-bold text-white">{job.role}</h3>
                                        <div className="mb-1 font-medium text-blue-400">{job.company}</div>
                                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                                            <span>{job.period}</span>
                                            <span>•</span>
                                            <span>{job.location}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                                        {job.tech.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-gray-300 bg-gray-700">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start text-gray-300">
                                            <span className="mt-2 mr-3 text-blue-400">•</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
