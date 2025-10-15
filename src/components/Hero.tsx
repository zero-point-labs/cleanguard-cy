"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Star, CheckCircle, ArrowRight, Bug, Play, Clock, Shield } from 'lucide-react'
import Link from 'next/link'
import { R2_ASSETS } from '@/lib/r2-config'

const benefits = [
  { icon: CheckCircle, text: "Ολοκληρωμένη Κάλυψη για Επιχειρήσεις & Οικίες", color: "text-green-400" },
  { icon: Shield, text: "Άμεση Ανταπόκριση & Εξυπηρέτηση", color: "text-emerald-400" },
  { icon: Bug, text: "Διαφάνεια και Επαγγελματισμός", color: "text-green-500" },
  { icon: Clock, text: "Αποτελεσματικότητα με Πιστοποίηση", color: "text-lime-400" }
]

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Full-width background video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={R2_ASSETS.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Improved video overlay with better gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30" />
        {/* Extra overlay for mobile to ensure readability */}
        <div className="absolute inset-0 bg-black/20 lg:bg-transparent" />
      </div>

      {/* Animated light streaks - hidden on mobile for performance */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-32 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '-128px',
            }}
            animate={{
              x: [0, typeof window !== 'undefined' ? window.innerWidth + 256 : 1920],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Subtle floating particles - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 w-0.5 lg:h-1 lg:w-1 bg-white/20 rounded-full"
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
              y: typeof window !== 'undefined' ? window.innerHeight + 20 : 0,
              opacity: 0
            }}
            animate={{
              y: -50,
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-20 sm:pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6"
            >
              Απαλλαγείτε από τα Παράσιτα με την
              <span className="block mt-1 sm:mt-2">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">Clean Guard</span>
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6"
                  >
                    <Bug className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-green-400" />
                  </motion.span>
                </span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Η Cleanguard ειναι διπλα σας για ενα καθαρο και ασφαλη χωρο. Επαγγελματικές υπηρεσίες απεντόμωσης που εξαλείφουν ανεπιθύμητους επισκέπτες και διατηρούν το χώρο σας ασφαλή.
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-200"
              >
                <span>Επικοινωνία</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center space-x-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white hover:bg-white/20 transition-all duration-200"
              >
                <span>Οι Υπηρεσίες μας</span>
              </Link>
            </motion.div>

            {/* Benefits grid - redesigned for mobile */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-lg mx-auto lg:max-w-none lg:mx-0"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  className="flex items-center space-x-2 text-xs sm:text-sm justify-center lg:justify-start"
                >
                  <benefit.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${benefit.color} flex-shrink-0`} />
                  <span className="text-gray-300">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Redesigned cards for mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-5 mt-8 lg:mt-0"
          >
            {/* Main feature card with video reference */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10 mb-4 sm:mb-6"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Δείτε μας σε Δράση</h3>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                >
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white ml-0.5 sm:ml-1" />
                </motion.div>
              </div>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                Δείτε πώς οι έμπειροι τεχνικοί μας εξαλείφουν τα παράσιτα με ακρίβεια και φροντίδα για το χώρο σας.
              </p>
              
              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">10K+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Χώροι Προστατευμένοι</div>
                </div>
                <div className="bg-white/5 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-400">Άμεση Υπηρεσία</div>
                </div>
              </div>
            </motion.div>

            {/* Team showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Πιστοποιημένη Ομάδα</h4>
                  <div className="flex -space-x-2 sm:-space-x-3">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-black/20 flex items-center justify-center text-white font-semibold text-xs sm:text-sm"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">+25</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl sm:text-2xl font-bold text-white">4.9</div>
                  <div className="flex items-center space-x-0.5 sm:space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 