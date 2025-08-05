import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"



export default function ContactSection() {
    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            value: "alex.chen@email.com",
        },
        {
            icon: LinkedInLogoIcon,
            title: "LinkedIn",
            value: "linkedin.com/in/alexchen",
        },
        {
            icon: GitHubLogoIcon,
            title: "GitHub",
            value: "github.com/alexchen",
        },
    ]

    return (
        <section id="contact" className="px-6 py-20 bg-gray-900/50">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-16">
                    <h2 className="mb-4 text-4xl font-bold">Let&apos;s Work Together</h2>
                    <div className="w-20 h-1 mx-auto mb-6 bg-blue-400"></div>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        I&apos;m always interested in new opportunities and exciting projects. Whether you&apos;re a company looking to hire
                        or have a project in mind, let&apos;s connect!
                    </p>
                </div>

                <div className="grid gap-8 mb-12 md:grid-cols-3">
                    {contactMethods.map((method, index) => (
                        <Card key={index} className="p-6 transition-colors bg-gray-800 border-gray-700 hover:border-blue-400">
                            <CardContent className="p-0 text-center">
                                <method.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                                <h3 className="mb-2 text-lg font-bold text-white">{method.title}</h3>
                                <p className="text-gray-400">{method.value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="space-y-6">
                    <Button className="px-8 py-3 text-lg text-white bg-blue-600 hover:bg-blue-700">
                        <Mail className="w-5 h-5 mr-2" />
                        Get In Touch
                    </Button>
                    <p className="text-sm text-gray-500">Currently based in San Francisco, CA • Open to remote opportunities</p>
                </div>
            </div>
        </section>
    )
}
