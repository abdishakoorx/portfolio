import { Card, CardContent } from "@/components/ui/card"
import { Code2, Lightbulb, Users, BookOpen, MapPin, Calendar } from "lucide-react"

export default function AboutSection() {
    const values = [
        {
            icon: Code2,
            title: "Clean Code",
            description: "Writing maintainable, scalable code that tells a story and solves real problems.",
            color: "text-blue-400",
        },
        {
            icon: Lightbulb,
            title: "Innovation Driven",
            description: "Exploring AI and emerging technologies to create cutting-edge solutions.",
            color: "text-emerald-400",
        },
        {
            icon: Users,
            title: "Collaborative Spirit",
            description: "Mentoring developers and working with teams to build exceptional products.",
            color: "text-amber-400",
        },
        {
            icon: BookOpen,
            title: "Continuous Learning",
            description: "Teaching and learning from the community to stay current with technology.",
            color: "text-purple-400",
        },
    ]

    return (
        <section id="about" className="px-6 py-20 bg-gray-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold">About Me</h2>
                    <div className="w-20 h-1 mx-auto bg-blue-400"></div>
                </div>
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        <p className="text-lg leading-relaxed text-gray-300">
                            As a Full-Stack Developer I bring a unique combination of technical expertise and teaching
                            experience to every project. With a Computer Science degree from Kenyatta University and
                            hands-on experience at M-Treat, I focus on building responsive web applications
                            and AI-powered solutions that deliver real business value.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-300">
                            My passion extends beyond coding - I&apos;ve taught web development and design to students, mentored
                            aspiring developers, and contributed to UX enhancements based on user feedback.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="flex items-center space-x-2 text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span>Nairobi, Kenya</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400">
                                <Calendar className="w-4 h-4" />
                                <span>Available for new opportunities</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <Card key={index} className="p-6 bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105">
                                <CardContent className="p-0">
                                    <div className="space-y-4">
                                        <div className={`p-3 rounded-full bg-gray-700/50 w-fit`}>
                                            <value.icon className={`w-6 h-6 ${value.color}`} />
                                        </div>
                                        <h4 className="text-lg font-semibold text-white">
                                            {value.title}
                                        </h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}