import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function ExperienceSection() {
    const experience = [
        {
            id: 1,
            company: "M-Treat",
            title: "Front-End Developer",
            city: "Nairobi, Kenya",
            period: "2025",
            descriptions: [
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
            descriptions: [
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
            descriptions: [
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
                                <div>
                                    <h3 className="mb-2 text-xl font-bold text-white">{job.role}</h3>
                                    <div className="mb-1 font-medium text-blue-400">{job.company}</div>
                                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                                        <span>{job.period}</span>
                                        <span>•</span>
                                        <span>{job.city}</span>
                                    </div>
                                </div>
                                <ul className="space-y-2 mt-3">
                                    {job.descriptions.map((description, i) => (
                                        <li key={i} className="flex items-start text-gray-300">
                                            <span className="mr-3 text-blue-400">•</span>
                                            {description}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                                    {job.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary" className="text-gray-300 bg-gray-700">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
