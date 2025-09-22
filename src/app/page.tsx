'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Target, Calendar, Zap, Users, BarChart3, ArrowRight, PlayCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedLogo from '@/components/AnimatedLogo'
import YouTubeEmbed from '@/components/YouTubeEmbed'

const industries = [
  "Marketing Agencies", "Consulting", "SaaS Companies", "E-commerce",
  "Real Estate", "Healthcare", "Financial Services", "Technology",
  "Education", "Manufacturing", "Professional Services", "Cybersecurity"
]

const expertise = [
  {
    title: "Behavioral Intelligence",
    description: "Advanced AI analysis of prospect behavior patterns and communication styles"
  },
  {
    title: "Lead Sourcing",
    description: "Multi-platform data gathering and prospect identification"
  },
  {
    title: "Deliverability",
    description: "Email infrastructure optimization for maximum inbox placement"
  },
  {
    title: "Automation",
    description: "End-to-end campaign management and response handling"
  },
  {
    title: "AI Personalization",
    description: "Dynamic message generation based on behavioral insights"
  }
]

const processSteps = [
  { number: "1", title: "AI", description: "Behavioral Intelligence Analysis" },
  { number: "2", title: "Lead Gen", description: "Multi-Source Lead Generation" },
  { number: "3", title: "Automation", description: "Campaign Management & Follow-up" }
]

const scaleFeatures = [
  "Predictable results every month",
  "No limit on potential output",
  "Optimization & Growth refining and scaling automation for efficiency",
  "15% average response rates vs industry 1-3%",
  "50+ qualified meetings monthly",
  "$30,000+ revenue generated from automation alone"
]

export default function Home() {
  const [showFloatingButton, setShowFloatingButton] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0
        setShowFloatingButton(!isVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-8 py-32"
               style={{
                 background: 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.1) 0%, rgba(10, 10, 10, 1) 70%)'
               }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                AI powered behavioral intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              APEX AI Solutions strategically integrates behavioral intelligence lead generation systems into your business
            </p>
            <div className="flex gap-4">
              <Link href="#contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                <Target className="w-5 h-5" />
                Get Started
              </Link>
              <Link href="/lead-gen" className="inline-flex items-center gap-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <AnimatedLogo size="hero" className="drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">Watch The Demo Below</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See how APEX AI transforms your lead generation process with behavioral intelligence and automation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Replace "YOUR_VIDEO_ID" with your actual YouTube video ID */}
            <YouTubeEmbed
              videoId="ay7OySbQbLA"
              title="APEX AI Solutions Demo"
              className="shadow-2xl shadow-cyan-500/20"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="services" className="py-20 px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">Together</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At APEX AI Solutions, we empower businesses to integrate behavioral intelligence lead generation seamlessly,
              driving more appointments, sales and revenue.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our system provides a structured, strategic and automated approach to lead generation,
              ensuring reliable bookings that will help you grow your business.
            </p>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-white">Industries we have worked with</h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={industry}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-700/50 border border-cyan-500/20 rounded-lg p-4 text-center font-medium text-white hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {industry}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Business Analytics"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solutions Section */}
      <section id="solutions" className="py-20 px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">We redefine client acquisition.</h2>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              If you're still manually hunting for leads, sending cold messages that get ignored, spending a fortune on expensive ads
              or even relying on other people to bring you business, you are not alone. Most B2B businesses are stuck in the same cycle:
              inconsistent leads, wasted time, burning money and zero predictability in their sales pipeline, and that's exactly the problem we solve.
            </p>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed mt-6">
              We've built a fully automated system that handles lead generation from end to end using behavioral intelligence,
              real-time data scraping, and human-like outreach that actually gets responses.
            </p>
          </motion.div>

          <h3 className="text-2xl font-semibold mb-8 text-cyan-400">Our Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 border border-cyan-500/20 rounded-2xl p-8 text-center hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="expertise" className="py-20 px-8 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                By blending behavioral intelligence and automation…
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              We bring together what was once impossible: With our team of AI developers and behavioral intelligence specialists,
              we have bridged the gap between one-to-one, personal outreach to integrate the same feel of personalization, but at scale.
              From painfully researching and contacting each person individually, AI can now do the heavy lifting!
            </p>
          </motion.div>

          <h3 className="text-2xl font-semibold mb-8 text-cyan-400">Our Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale Section */}
      <section id="why" className="py-20 px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Business Growth"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-white">…We build systems that scale with your business.</h2>
            <ul className="space-y-4">
              {scaleFeatures.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 text-lg text-gray-300"
                >
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-8 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">Redefining Lead generation, reshaping Scalability</h2>
            <div className="text-left space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>APEX AI Solutions isn't just another lead generation agency. We work differently. We provide you with a lifetime solution, not just a monthly service.</p>
              <p>We believe AI is the greatest shift in human history since modern farming, reshaping how we live, work, and create. AI has unlocked new opportunities, industries, and thousands of careers.</p>
              <p>By integrating intelligent behavioral analysis, we help businesses scale, adapt, and lead in this new era. AI isn't the future. It's happening now, and we're driving the change.</p>
              <p><strong className="text-cyan-400">Together, we turn behavioral intelligence into opportunity.</strong> Call us – and let's get started!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 px-8 bg-gradient-to-r from-cyan-900/20 via-gray-900 to-blue-900/20 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">The next era of work starts now</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Want to shape the future of AI with us? Stop wasting 20+ hours weekly on manual lead research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/runoridolor/30min"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Start the conversation
              </a>
              <Link
                href="/lead-gen"
                className="inline-flex items-center gap-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: showFloatingButton ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={scrollToContact}
          className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
        >
          <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          <span>Book Call</span>
        </button>
      </motion.div>
    </main>
  )
}