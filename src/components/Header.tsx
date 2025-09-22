"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-white/10 shadow-lg"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <Image
                src="/apex-logo-clean.jpg?v=2"
                alt="APEX AI Solutions Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                <span className="text-cyan-400">
                  APEX
                </span>
              </h1>
              <p className="text-xs md:text-sm text-gray-300 font-light tracking-wider">
                AI SOLUTIONS
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="#solutions" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
              Solutions
            </Link>
            <Link href="#expertise" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
              Expertise
            </Link>
            <Link href="#why" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
              Why Us
            </Link>
            <Link href="/lead-gen" className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
              Lead Gen
            </Link>
          </nav>

          {/* Contact Button */}
          <Link
            href="#contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

