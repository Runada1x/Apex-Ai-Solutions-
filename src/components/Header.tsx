"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 shadow-2xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 relative">
            <Image
              src="/apex-logo.jpg"
              alt="APEX AI Solutions Logo"
              width={64}
              height={64}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                APEX
              </span>
            </h1>
            <p className="text-xs md:text-sm text-slate-300 font-light tracking-wider">
              AI SOLUTIONS
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

