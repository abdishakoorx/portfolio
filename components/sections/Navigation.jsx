import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
            <div className="max-w-6xl px-6 py-4 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-400">{"<Abdishakoor />"}</div>
                    <div className="items-center hidden space-x-8 md:flex">
                        <Link href="#about" className="text-gray-300 transition-colors hover:text-blue-400">
                            About
                        </Link>
                        <Link href="#experience" className="text-gray-300 transition-colors hover:text-blue-400">
                            Experience
                        </Link>
                        <Link href="#projects" className="text-gray-300 transition-colors hover:text-blue-400">
                            Projects
                        </Link>
                        <Link href="#skills" className="text-gray-300 transition-colors hover:text-blue-400">
                            Skills
                        </Link>
                        <Link href="#contact" className="text-gray-300 transition-colors hover:text-blue-400">
                            Contact
                        </Link>
                    </div>
                    <Link href="/ABDISHAKOOR-HASSAN-CV-2025.pdf" target="_blank" download>
                        <Button
                            variant="outline"
                            className="text-blue-400 bg-transparent border-blue-400 hover:bg-blue-400 hover:text-gray-950 cursor-pointer"
                        >
                            <Download className="w-4 h-4 mr-2" />
                            Resume
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
