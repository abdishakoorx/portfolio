'use client'
import { motion, useScroll } from 'framer-motion'
import About from "./_components/About"
import Footer from "./_components/Footer"
import Header from "./_components/Header"
import Projects from "./_components/Projects"
import TechTools from "./_components/TechTools"
import { FooterTabs } from './_components/FooterTabs'

const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

export default function Dashboard() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <Header />
      <div className="px-10 pt-24 mb-16 space-y-20">
        <motion.section 
          id="about" 
          variants={fadeInUp}
        >
          <About />
          <TechTools />
        </motion.section>
       
        <motion.section 
          id="projects" 
          variants={fadeInUp}
        >
          <Projects />
        </motion.section>
      </div>
      <FooterTabs />
    </motion.main>
  )
}