"use client"

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import ContactForm from './ContactForm'

const contactInfo = [
  {
    icon: Phone,
    title: "Τηλέφωνο",
    details: "94 300 800",
    description: "Καλέστε μας για άμεση εξυπηρέτηση",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: Mail,
    title: "Email",
    details: "cgcpest@gmail.com",
    description: "Στείλτε μας email για ερωτήσεις",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    icon: MapPin,
    title: "Τοποθεσία",
    details: "Κύπρος, Λευκωσία",
    description: "Εξυπηρετούμε σε όλη την Κύπρο",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600"
  },
  {
    icon: Clock,
    title: "Ώρες Λειτουργίας",
    details: "24/7 Επείγοντα",
    description: "Διαθέσιμοι όλο το 24ωρο",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600"
  }
]


export default function Contact() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} id="contact" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient circles */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-100/40 to-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-lime-100/40 to-green-100/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl" />
        
        {/* Beautiful greenish glows */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-green-200/60 to-emerald-200/60 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-32 right-1/3 w-48 h-48 bg-gradient-to-r from-emerald-200/50 to-teal-300/50 rounded-full blur-xl" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-lime-200/70 to-green-200/70 rounded-full blur-lg" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-emerald-200/40 to-green-200/40 rounded-full blur-xl" />
        
        {/* Floating glow orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full blur-lg ${
                i % 3 === 0 ? 'bg-gradient-to-r from-green-200/30 to-emerald-200/30' :
                i % 3 === 1 ? 'bg-gradient-to-r from-emerald-200/25 to-teal-200/25' :
                'bg-gradient-to-r from-lime-200/35 to-green-300/35'
              }`}
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-green-50/20 to-transparent" />
      </div>

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
            <Phone className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-green-900">Επικοινωνία</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Επικοινωνήστε μαζί μας
            <span className="block mt-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Για Επαγγελματική Υπηρεσία
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Η Clean Guard είναι εδώ για εσάς! Επικοινωνήστε μαζί μας για δωρεάν έλεγχο, 
            προσφορά ή οποιαδήποτε ερώτηση έχετε για τις υπηρεσίες απεντόμωσης μας.
          </p>
        </motion.div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className={`relative h-full ${info.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Card content */}
                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 ${info.bgColor} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <info.icon className={`h-8 w-8 ${info.iconColor}`} />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold text-gray-800 mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <ContactForm />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Έτοιμοι να Εξαλείψετε τα Παράσιτα;
            </h3>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας σήμερα για δωρεάν έλεγχο και προσφορά. 
              Η ομάδα μας είναι εδώ για να σας βοηθήσει!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:94300800"
                className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-full font-medium hover:bg-green-50 transition-colors shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Καλέστε 94 300 800</span>
              </Link>
              <Link
                href="mailto:cgcpest@gmail.com"
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/30 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Στείλτε Email</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
