'use client'

import { motion } from 'framer-motion'
import { Play, CheckCircle, Star, ArrowRight, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import YouTubeEmbed from '@/components/YouTubeEmbed'

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Solutions",
    quote: "APEX AI increased our lead quality by 300% and saved us 25 hours per week on manual research.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "Growth Marketing Co",
    quote: "The behavioral intelligence approach gets 15% response rates vs our previous 2%. Game changer.",
    rating: 5
  },
  {
    name: "Emma Davis",
    company: "SaaS Accelerator",
    quote: "We went from 10 meetings per month to 50+ qualified prospects. ROI was immediate.",
    rating: 5
  }
]

const benefitsList = [
  "Complete analysis of your current lead generation process",
  "Custom behavioral intelligence implementation roadmap",
  "Live demonstration of our AI system in action",
  "ROI projection based on your specific metrics",
  "No pressure consultation - just possibilities"
]

export default function LeadGenPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gray-900 text-white relative pt-24">
      {/* Hero Section */}
      <section className="py-20 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Stop Wasting{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                20+ Hours Weekly
              </span>{' '}
              on Manual Lead Research
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The behavioral intelligence system that books 50+ qualified meetings monthly
              and generated $30,000+ in revenue from automations alone
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Monthly Meetings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">$30K+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">15%</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Response Rates</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-8 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              Watch How{' '}
              <span className="text-cyan-400">Behavioral Intelligence</span>{' '}
              Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See exactly how our AI system researches prospects, identifies pain points, and crafts personalized messages that actually get responses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <YouTubeEmbed
              videoId="ay7OySbQbLA"
              title="APEX AI Behavioral Intelligence Demo"
              className="shadow-2xl shadow-cyan-500/20"
            />
          </motion.div>

          <div className="text-center bg-gray-700/50 p-6 rounded-2xl border border-gray-600">
            <p className="text-gray-200 mb-4">
              After watching this demo, book a strategy session to see how behavioral intelligence can transform your lead generation.
            </p>
            <a
              href="#booking"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              Book Your Strategy Session
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-cyan-400">Results</span> Speak Louder Than Promises
            </h2>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-cyan-400">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-400">{testimonials[currentTestimonial].company}</p>
              </div>
            </motion.div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Case Study: <span className="text-cyan-400">SaaS Company 5X'd Their Pipeline</span>
            </h2>
            <div className="bg-gray-700/50 p-8 rounded-2xl border border-gray-600 mb-8">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                A 50-person SaaS company was struggling with inconsistent lead flow and 2% email response rates.
                After implementing our behavioral intelligence system, they achieved:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">5X</div>
                  <div className="text-gray-400">Pipeline Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">15%</div>
                  <div className="text-gray-400">Response Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">$250K</div>
                  <div className="text-gray-400">Additional ARR</div>
                </div>
              </div>
            </div>
            <button className="inline-flex items-center gap-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
              Download Full Case Study
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Meet <span className="text-cyan-400">Runor Idolor</span>
            </h2>
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 text-left max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                "I started APEX AI Solutions because I was tired of watching businesses waste countless hours on manual lead research
                that barely converts. After building automation systems that generated over $30K in revenue, I realized every
                business deserves this level of efficiency."
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                "Traditional lead generation tools give you data. We give you behavioral intelligence. The difference?
                Our AI understands why prospects act the way they do, not just what they do."
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                "Currently completing my Computer Science degree while building production-ready automation systems
                that save teams hours each week and unlock real growth."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-8 bg-gradient-to-r from-cyan-900/20 via-gray-900 to-blue-900/20 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Book Your{' '}
                <span className="text-cyan-400">Strategy Session</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This isn't a sales call. It's a strategic consultation to design your automation roadmap.
              </p>

              <ul className="space-y-4 mb-8">
                {benefitsList.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="text-gray-400 font-medium">
                Nine times out of ten, what you need is possible. Let's discover your automation potential together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700"
            >
              <div className="bg-white rounded-xl overflow-hidden" style={{ height: '600px' }}>
                <iframe
                  src="https://calendly.com/runoridolor/30min?embed_domain=localhost&embed_type=Inline"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Book Your Strategy Session - Calendly"
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Stop{' '}
              <span className="text-cyan-400">Manual Research</span>{' '}
              Forever?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              You're already behind if you're still doing lead research manually while competitors use behavioral intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#booking"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Book Strategy Session
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
                Back to Homepage
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}