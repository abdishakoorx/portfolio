"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Download, MessageCircle } from "lucide-react"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function ContactSection() {
    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            value: "abdishakoor145@gmail.com",
            href: "mailto:abdishakoor145@gmail.com",
            target: "_self"
        },
        {
            icon: LinkedInLogoIcon,
            title: "LinkedIn",
            value: "Abdishakoor Hassan",
            href: "https://www.linkedin.com/in/abdishakoorx/",
            target: "_blank"
        },
        {
            icon: GitHubLogoIcon,
            title: "GitHub",
            value: "Abdishakoor Hassan",
            href: "https://www.github.com/abdishakoorx",
            target: "_blank"
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            value: "+254 722 280781",
            href: "https://wa.me/254722280781",
            target: "_blank"
        },
    ]

    return (
        <section id="contact" className="px-6 py-20 bg-gray-900/50">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-16">
                    <h2 className="mb-4 text-4xl font-bold">Let&apos;s Work Together</h2>
                    <div className="w-20 h-1 mx-auto mb-6 bg-blue-400"></div>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        I&apos;m always interested in new opportunities and exciting projects. Whether you&apos;re a company looking to hire
                        or have a project in mind, let&apos;s connect!
                    </p>
                </div>
                <div className="grid gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.href}
                            target={method.target}
                            rel={method.target === "_blank" ? "noopener noreferrer" : undefined}
                            className="block"
                        >
                            <Card className="p-6 transition-colors bg-gray-800 border-gray-700 hover:border-blue-400 cursor-pointer">
                                <CardContent className="p-0 text-center">
                                    <method.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                                    <h3 className="mb-2 text-lg font-bold text-white">{method.title}</h3>
                                    <p className="text-gray-400">{method.value}</p>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
                <div className="space-y-6">
                    <Link href="/ABDISHAKOOR-HASSAN-CV-2025.pdf" target="_blank" download>
                        <Button
                            className="text-lg mb-4 text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Download Resume
                        </Button>
                    </Link>
                    <p className="text-sm text-gray-500">Currently based in Nairobi, Kenya • Open to remote opportunities</p>
                </div>
            </div>
        </section>
    )
}