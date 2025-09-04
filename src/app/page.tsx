'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Play, CheckCircle, TrendingUp, Clock, Mail, Target, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'

type YTAPI = {
  Player?: new (
    elementId: string,
    params?: { events?: { onStateChange?: (event: { data: number }) => void } }
  ) => unknown
  PlayerState: { ENDED: number }
}

type YTWindow = Window & {
  YT?: YTAPI
  onYouTubeIframeAPIReady?: () => void
}

const stats = [
  { number: "50+", label: "Monthly Meetings" },
  { number: "$30K+", label: "Revenue Generated" },
  { number: "15%", label: "Response Rates" }
]

const problems = [
  {
    icon: Clock,
    title: "20+ Hours Weekly Wasted",
    description: "Your team spends entire days manually researching leads, checking LinkedIn profiles, and crafting personalized emails that still get ignored."
  },
  {
    icon: Mail,
    title: "Generic Emails Get Deleted", 
    description: "Apollo and ZoomInfo&apos;s &apos;AI personalization&apos; is just ChatGPT with basic data. Your prospects get the same template emails as everyone else."
  },
  {
    icon: TrendingUp,
    title: "1% Response Rates",
    description: "You&apos;re sending 1,000 generic emails hoping for 1% response rates while your competitors are getting 10-15% with behavioral intelligence."
  }
]

const solutions = [
  {
    number: "1",
    title: "Multi-Source Intelligence",
    description: "System analyzes LinkedIn posts, website content, Google research, and engagement patterns to build comprehensive behavioral profiles."
  },
  {
    number: "2", 
    title: "AI Behavioral Analysis",
    description: "Advanced AI processes multiple data points to understand pain points, communication style, and decision-making patterns."
  },
  {
    number: "3",
    title: "Custom Email Generation", 
    description: "Creates completely personalized emails based on behavioral intelligence - not templates with names dropped in."
  },
  {
    number: "4",
    title: "Automated Campaign Management",
    description: "Handles responses, books meetings, updates CRM, and follows up until they book or ask to stop."
  }
]

const benefits = [
  "Review your current lead generation process",
  "Identify automation opportunities", 
  "Custom solution design for your business",
  "See if behavioral intelligence fits your needs",
  "No pressure, just possibilities"
]

export default function Home() {
  const [showFloatingButton, setShowFloatingButton] = useState(true)
  const [videoEnded, setVideoEnded] = useState(false)
  const [videoSrc, setVideoSrc] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const bookingSection = document.getElementById('booking')
      if (bookingSection) {
        const rect = bookingSection.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0
        setShowFloatingButton(!isVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Prepare YouTube embed with JS API enabled and wire end event
  useEffect(() => {
    // Set video src on client to include correct origin
    setVideoSrc(
      `https://www.youtube.com/embed/ay7OySbQbLA?rel=0&modestbranding=1&showinfo=0&enablejsapi=1&origin=${window.location.origin}`
    )

    const setupPlayer = () => {
      const w = window as YTWindow
      if (w.YT && w.YT.Player) {
        try {
          // Create/attach a YT player to listen for end event
          // If already initialized, ignore errors gracefully
          new w.YT.Player('demo-video', {
            events: {
              onStateChange: (event: { data: number }) => {
                if (w.YT && event?.data === w.YT.PlayerState.ENDED) {
                  setVideoEnded(true)
                  setTimeout(() => scrollToBooking(), 800)
                }
              },
            },
          })
        } catch {
          // no-op
        }
      }
    }

    const w = window as YTWindow
    if (w.YT && w.YT.Player) {
      setupPlayer()
    } else {
      w.onYouTubeIframeAPIReady = setupPlayer
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(tag)
    }
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-white relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-slate-950 to-emerald-900/20" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>

        {/* Logo moved to global fixed header in layout */}


        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Stop Wasting{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                20+ Hours Weekly
              </span>{' '}
              on Manual Lead Research
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              The behavioral intelligence system that books 50+ qualified meetings monthly 
              and generated $30,000+ in revenue from automations alone
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#demo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <Play className="w-5 h-5" />
              Watch The Demo Below
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Problem Every{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Agency Faces
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon
              return (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    <IconComponent className="w-12 h-12 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Watch How{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Behavioral Intelligence
              </span>{' '}
              Works
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              You are one step away from solving your client acquisition problems and having your dream clients book straight into your calendar, on autopilot, all day long, without having to raise a finger!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20"
          >
            {/* YouTube Video Embed */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                id="demo-video"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src={videoSrc || "about:blank"}
                title="Behavioral Intelligence Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Persistent CTA under the video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-center bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50"
          >
            <p className="text-slate-200 mb-4">
              After you watch this video to learn more about our behavioral intelligence system,
              book a meeting so we can discuss and start maximizing with AI as soon as possible.
            </p>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault()
                scrollToBooking()
              }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <Target className="w-5 h-5" />
              Book Your Consultation
            </a>
          </motion.div>

          {videoEnded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-8"
            >
              <p className="text-slate-400">Thanks for watching — booking your discovery call now will save you time.</p>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-slate-400 italic mt-6"
          >
            This isn&apos;t template personalization - this is behavioral intelligence understanding pain points
          </motion.p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How The{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                System Works
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {solution.number}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-slate-300 leading-relaxed ml-16">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Quality Over Quantity
              </span>
            </h2>

            <div className="bg-slate-800/50 backdrop-blur-sm p-12 rounded-2xl border border-slate-700/50">
              <blockquote className="text-2xl text-slate-300 italic mb-8 leading-relaxed">
                &quot;While competitors send 1,000 generic emails hoping for 1% response rates, we send 200 behavioral intelligence emails and get 10-15% response rates. The quality of research is what separates us from everyone else.&quot;
              </blockquote>
              <p className="text-cyan-400 font-semibold">
                — Proven Results from Behavioral Intelligence
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-slate-950 to-emerald-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Stop{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Manual Research
              </span>{' '}
              Forever?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              You&apos;re already behind if you&apos;re still doing lead research manually while competitors use behavioral intelligence
            </p>
            <a
              href="#booking"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <Target className="w-5 h-5" />
              Book Your Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-slate-900/50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Book Your{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Discovery Call
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                This isn&apos;t a sales call - it&apos;s a strategic consultation to see what&apos;s possible for your business.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <p className="text-slate-400 font-medium">
                Nine times out of ten, what you need is possible. Let&apos;s find out what automation would look like for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
            >
              {/* Calendly Integration - Simple Iframe Approach */}
              <div className="calendly-embed bg-white rounded-xl overflow-hidden" style={{ height: '700px' }}>
                <iframe 
                  src="https://calendly.com/runoridolor/30min?embed_domain=localhost&embed_type=Inline"
                  width="100%" 
                  height="100%"
                  frameBorder="0"
                  title="Select a Date & Time - Calendly"
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Book Meeting Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: showFloatingButton ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={scrollToBooking}
          className="group bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-4"
        >
          <Calendar className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
          <span>Book Discovery Meeting</span>
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
        </button>
      </motion.div>
    </main>
  )
}
