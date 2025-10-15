"use client"

import React from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Award, Users, Calendar, Bug, CheckCircle, ArrowUpRight, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { R2_ASSETS } from '@/lib/r2-config'

const stats = [
  { 
    number: "10K+", 
    label: "Χώροι Προστατευμένοι", 
    icon: Users,
    gradient: "from-green-500 to-emerald-500" 
  },
  { 
    number: "24/7", 
    label: "Άμεση Υπηρεσία", 
    icon: Calendar,
    gradient: "from-emerald-500 to-teal-500" 
  },
  { 
    number: "2", 
    label: "Έμπειροι Τεχνικοί", 
    icon: Award,
    gradient: "from-lime-500 to-green-500" 
  },
  { 
    number: "100%", 
    label: "Εγγύηση Αποτελεσμάτων", 
    icon: Star,
    gradient: "from-green-600 to-emerald-600" 
  }
]

const values = [
  {
    title: "Ασφαλείς & Αποτελεσματικές Μέθοδοι",
    description: "Χρησιμοποιούμε μόνο αποδεδειγμένες, οικολογικές θεραπείες που προστατεύουν την οικογένεια, τα κατοικίδια και το περιβάλλον.",
    icon: "🛡️"
  },
  {
    title: "Πλήρεις Ελέγχους",
    description: "Κάθε πρόβλημα παρασίτων είναι μοναδικό. Πραγματοποιούμε λεπτομερείς ελέγχους για τον εντοπισμό των αιτίων.",
    icon: "🔍"
  },
  {
    title: "Πιστοποιημένοι Επαγγελματίες",
    description: "Όλοι οι τεχνικοί μας είναι πιστοποιημένοι, εκπαιδευμένοι και ασφαλισμένοι για την πλήρη ασφάλειά σας.",
    icon: "✅"
  },
  {
    title: "Ικανοποίηση Πελατών",
    description: "Η ικανοποίησή σας είναι εγγυημένη. Στέκουμε πίσω από την εργασία μας με ολοκληρωμένες εγγυήσεις.",
    icon: "⭐"
  }
]

export default function AboutUs() {
  const ref = React.useRef(null)
  const imageRef = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} id="about" className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div style={{ opacity }} className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div 
          style={{ y }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-green-100/60 to-emerald-100/60 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(y, value => -value * 0.5) }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-lime-100/60 to-green-100/60 rounded-full blur-3xl"
        />
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Bug className={`h-6 w-6 text-green-200/40`} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 mb-6"
          >
            <Award className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-green-900">Σχετικά με την Clean Guard</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Η Ομάδα μας
            <span className="block mt-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Εμπειρία & Επιστήμη
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Η Clean Guard ιδρύθηκε από τον Γιώργο Παρμακλή με ένα όραμα: να προσφέρει αποτελεσματικές 
            και ασφαλείς λύσεις για την καταπολέμηση παρασίτων.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Η Ιστορία της 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> Clean Guard</span>
            </h3>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-lg leading-relaxed">
                Η Clean Guard ιδρύθηκε από τον Γιώργο Παρμακλή με ένα όραμα: να προσφέρει αποτελεσματικές 
                και ασφαλείς λύσεις για την καταπολέμηση παρασίτων. Με την εμπειρία και τη δέσμευσή μας για ποιότητα, 
                εξασφαλίζουμε καθαρούς και υγιείς χώρους για το σπίτι ή την επιχείρησή σας.
              </p>
              <p className="text-lg leading-relaxed">
                Είμαστε πάντα δίπλα σας — με άμεση υποστήριξη και πραγματικό ενδιαφέρον για τη λύση του προβλήματος, 
                όχι απλώς για μια «επίσκεψη ρουτίνας». Η ομάδα μας αποτελείται από έμπειρους τεχνικούς που έχουν 
                εξειδικευτεί στον τομέα της απεντόμωσης και της προστασίας χώρων.
              </p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA button */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-medium shadow-xl hover:shadow-2xl transition-all"
              >
                <span>Επικοινωνήστε μαζί μας</span>
                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 30 }}
            animate={isImageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Image container with effects */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Animated border gradient */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(0deg, #22C55E, #10B981)",
                    "linear-gradient(90deg, #22C55E, #10B981)",
                    "linear-gradient(180deg, #22C55E, #10B981)",
                    "linear-gradient(270deg, #22C55E, #10B981)",
                    "linear-gradient(360deg, #22C55E, #10B981)",
                  ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 p-1 rounded-3xl"
              >
                <div className="absolute inset-1 bg-white rounded-2xl" />
              </motion.div>
              
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={R2_ASSETS.aboutUsImage}
                  alt="Clean Guard Pest Control Team"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                
                {/* Image overlay with stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isImageInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                      ))}
                    </div>
                    <div className="text-white">
                      <p className="font-semibold">Πιστοποιημένοι Τεχνικοί</p>
                      <p className="text-sm text-white/80">Άδεια & Επαγγελματική Εκπαίδευση</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating accent elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl shadow-xl flex items-center justify-center"
            >
              <Star className="h-12 w-12 text-white" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-xl flex items-center justify-center"
            >
              <Bug className="h-10 w-10 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
              
              <div className="relative">
                <stat.icon className={`h-8 w-8 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4`} />
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 