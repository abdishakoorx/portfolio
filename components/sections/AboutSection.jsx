import { Card, CardContent } from "@/components/ui/card"
import { Code2, Users, TrendingUp, Award, MapPin, Calendar } from "lucide-react"

export default function AboutSection() {
    const stats = [
        {
            icon: Code2,
            value: "5+",
            label: "Projects Completed",
            color: "text-blue-400",
        },
        {
            icon: Users,
            value: "120+",
            label: "Students Taught",
            color: "text-emerald-400",
        },
        {
            icon: TrendingUp,
            value: "3+",
            label: "Years Experience",
            color: "text-amber-400",
        },
        {
            icon: Award,
            value: "10+",
            label: "Technologies",
            color: "text-purple-400",
        },
    ]

    return (
        <section id="about" className="px-6 py-20 bg-gray-900/50">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold">About Me</h2>
                    <div className="w-20 h-1 mx-auto bg-blue-400"></div>
                </div>

                <div className="grid items-center gap-12 md:grid-cols-2">
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

                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <Card key={index} className="p-6 text-center bg-gray-800 border-gray-700">
                                <CardContent className="p-0">
                                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                                    <div className="mb-1 text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
