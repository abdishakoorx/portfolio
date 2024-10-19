'use client'

import { motion } from 'framer-motion'
import About from "./_components/About"
import Footer from "./_components/Footer"
import Header from "./_components/Header"
import Projects from "./_components/Projects"
import TechTools from "./_components/TechTools"

// Smooth fade-in and upward motion
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeInOut' } // Adjusted for smoother effect
}

// Stagger children animations for better flow
const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.4, // Longer stagger for smoother effect
      ease: 'easeInOut'
    }
  }
}

// Smoothly fade in the entire main container
const fadeContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, ease: 'easeInOut' } // Container-level smoothness
}

export default function Dashboard() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={fadeContainer} // Smooth entry for the whole container
    >
      <Header />
      <div className="px-10 pt-24 space-y-20">
        {/* About and TechTools section */}
        <motion.section id="about" variants={fadeInUp}>
          <About />
          <TechTools />
        </motion.section>
        
        {/* Projects section */}
        <motion.section id="projects" variants={fadeInUp}>
          <Projects />
        </motion.section>
        
        {/* Footer section */}
        <motion.section id="contact" variants={fadeInUp}>
          <Footer />
        </motion.section>
      </div>
    </motion.main>
  )
}
