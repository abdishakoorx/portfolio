import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    const socialLinks = [
        { icon: GitHubLogoIcon, href: "#", label: "GitHub" },
        { icon: LinkedInLogoIcon, href: "#", label: "LinkedIn" },
        { icon: Mail, href: "#", label: "Email" },
    ]

    return (
        <footer className="px-6 py-8 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-4 text-gray-400 md:mb-0">© 2024 Abdishakoor Hassan. All rights reserved.</div>
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((social, index) => (
                            <Link
                                key={index}
                                href={social.href}
                                className="text-gray-400 transition-colors hover:text-blue-400"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
