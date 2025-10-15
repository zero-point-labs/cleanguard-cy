"use client"

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Bug, Home, Building2, Shield, CheckCircle, ArrowRight, Star, Zap } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Bug,
    title: "Απεντόμωση",
    slug: "apentomosi",
    description: "Χρησιμοποιούμε προηγμένες τεχνικές και πιστοποιημένα προϊόντα για κάθε είδος εντόμου και χώρο, εξασφαλίζοντας άμεσα, διαρκή αποτελέσματα. Συμπεριλαμβάνει υποκαπνισμό για αποθήκες και βιομηχανίες.",
    features: [
      "Προηγμένες τεχνικές και πιστοποιημένα προϊόντα",
      "Άμεσα και διαρκή αποτελέσματα",
      "Ασφαλείς μέθοδοι που προστατεύουν την υγεία",
      "Πλήρη κάλυψη σε κατοικίες και επιχειρήσεις",
      "Υποκαπνισμός για αποθήκες και βιομηχανίες",
      "Έμπειροι τεχνικοί με εξειδικευμένες γνώσεις"
    ],
    color: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    accentColor: "text-green-600"
  },
  {
    icon: Shield,
    title: "Απολύμανση",
    slug: "apolymansi",
    description: "Παρέχουμε απολύμανση με πιστοποιημένα σκευάσματα τελευταίας γενιάς, δημιουργώντας φράγμα προστασίας για κάθε χώρο.",
    features: [
      "Πιστοποιημένα σκευάσματα τελευταίας γενιάς",
      "Φράγμα προστασίας για κάθε χώρο",
      "Προσαρμοσμένες λύσεις σε σχολεία και ιατρικούς χώρους",
      "Καθαρό και υγιές περιβάλλον",
      "Προάγει την ευημερία όλων",
      "Εξασφαλίζει υγειονομική συμμόρφωση"
    ],
    color: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-100",
    accentColor: "text-emerald-600"
  },
  {
    icon: Home,
    title: "Μυοκτονία",
    slug: "myoktonia",
    description: "Προσφέρουμε οικολογικές λύσεις για τρωκτικά με σύγχρονες τεχνικές και ασφαλή, πιστοποιημένα προϊόντα.",
    features: [
      "Οικολογικές λύσεις για τρωκτικά",
      "Σύγχρονες τεχνικές και ασφαλή προϊόντα",
      "Μακροχρόνια προστασία",
      "Χωρίς κίνδυνο για οικογένεια ή κατοικίδια",
      "Αξιόπιστη και διαρκής προστασία",
      "Εξειδικευμένες τεχνικές εξάλειψης"
    ],
    color: "from-lime-500 to-green-500",
    bgGradient: "from-lime-50 to-green-50",
    iconBg: "bg-lime-100",
    accentColor: "text-lime-600"
  },
  {
    icon: Building2,
    title: "Απωθητικά",
    slug: "apothitika",
    description: "Εφαρμόζουμε φυσικά και χημικά απωθητικά για ζώα και έντομα σε σπίτια, επιχειρήσεις και κήπους.",
    features: [
      "Φυσικά και χημικά απωθητικά",
      "Εξειδικευμένες τεχνικές και ποιοτικά προϊόντα",
      "Καθαρό και ασφαλή χώρο με έμφαση στην πρόληψη",
      "Προστασία για σπίτια, επιχειρήσεις και κήπους",
      "Προληπτική προσέγγιση στον έλεγχο παρασίτων",
      "Μακροχρόνια λύσεις προστασίας"
    ],
    color: "from-green-600 to-lime-500",
    bgGradient: "from-green-50 to-lime-50",
    iconBg: "bg-green-100",
    accentColor: "text-green-600"
  }
]

export default function Services() {
  const ref = React.useRef(null)
  const [forceVisible, setForceVisible] = React.useState(false)
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.1,
    margin: "0px 0px -100px 0px"
  })

  // Fallback for mobile devices where intersection observer might not work properly
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setForceVisible(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const shouldAnimate = isInView || forceVisible

  return (
    <section ref={ref} id="services" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
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
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={shouldAnimate ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 mb-6"
          >
            <Zap className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-green-900">Επαγγελματικές Υπηρεσίες Απεντόμωσης</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Οι Υπηρεσίες μας
            <span className="block mt-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Για κάθε Πρόβλημα Παρασίτων
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Από την προληπτική απεντόμωση έως τις εξειδικευμένες θεραπείες, προσφέρουμε ολοκληρωμένες λύσεις 
            που διατηρούν το χώρο σας καθαρό από παράσιτα και την οικογένειά σας ασφαλή.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Card content */}
                <div className="relative p-8 lg:p-10">
                  {/* Header with icon */}
                  <div className="flex items-start space-x-5 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`flex-shrink-0 w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center`}
                    >
                      <service.icon className={`h-8 w-8 ${service.accentColor}`} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + idx * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className={`h-5 w-5 ${service.accentColor} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA button */}
                  <Link href={`/${service.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all`}
                    >
                      <span>Περισσότερα</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section with trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-8 flex-wrap justify-center gap-8">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-medium">4.9/5 Αξιολόγηση</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 font-medium">Ασφαλείς & Αποτελεσματικές Θεραπείες</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 font-medium">Πιστοποιημένοι & Άδεια</span>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10"
          >
            <p className="text-lg text-gray-600 mb-6">
              Έτοιμοι να προστατέψετε το χώρο σας; Ας εξαλείψουμε τα προβλήματα παρασίτων σας σήμερα.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-xl"
              >
                <span>Κλείστε Δωρεάν Έλεγχο</span>
                <Bug className="h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 