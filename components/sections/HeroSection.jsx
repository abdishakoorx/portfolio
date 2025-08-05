import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Mail, ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
    return (
        <section className="px-6 pt-32 pb-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="font-medium text-blue-400">Hello, I&apos;m</div>
                            <h1 className="text-5xl font-bold leading-tight lg:text-7xl">Alex Chen</h1>
                            <h2 className="text-2xl font-light text-gray-300 lg:text-3xl">Senior Full-Stack Engineer</h2>
                            <p className="max-w-lg text-xl leading-relaxed text-gray-400">
                                I craft scalable web applications and robust backend systems that power modern businesses. Passionate
                                about clean code, performance optimization, and creating exceptional user experiences.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button className="px-8 py-3 text-lg text-white bg-blue-600 hover:bg-blue-700">
                                View My Work
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                variant="outline"
                                className="px-8 py-3 text-lg text-gray-300 bg-transparent border-gray-600 hover:bg-gray-800"
                            >
                                Get In Touch
                            </Button>
                        </div>

                        <div className="flex items-center pt-4 space-x-6">
                            <Link href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                                <GitHubLogoIcon className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                                <LinkedInLogoIcon className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                                <Mail className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur-2xl opacity-20"></div>
                            <Image
                                src="/abdishakoor.jpg"
                                alt="Alex Chen"
                                width={400}
                                height={500}
                                className="relative border border-gray-700 rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-16">
                <ChevronDown className="w-8 h-8 text-gray-500 animate-bounce" />
            </div>
        </section>
    )
}
