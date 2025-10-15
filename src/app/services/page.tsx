"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Shield, Zap, Bug, Users } from 'lucide-react'
import Link from 'next/link'

const mainServices = [
  {
    id: 'apentomosi',
    title: 'Απεντόμωση',
    subtitle: 'Εξάλειψη Εντόμων & Παρασίτων',
    description: 'Ολοκληρωμένες λύσεις απεντόμωσης για κατσαρίδες, μυρμήγκια, μύγες, κουνούπια και όλα τα είδη εντόμων που απειλούν τον χώρο σας.',
    features: [
      'Εξάλειψη κατσαριδών και μυρμηγκιών',
      'Αντιμετώπιση μυγών και κουνουπιών',
      'Καταπολέμηση εντόμων αποθηκών',
      'Προστασία από σκόρους και ψαράκια',
      'Ασφαλή προϊόντα για οικογένειες',
      'Μακροχρόνια προστασία'
    ],
    color: 'from-red-500 to-red-600',
    href: '/apentomosi'
  },
  {
    id: 'myoktonia',
    title: 'Μυοκτονία',
    subtitle: 'Έλεγχος Τρωκτικών',
    description: 'Επαγγελματική αντιμετώπιση ποντικιών και αρουραίων με ασφαλείς μεθόδους που προστατεύουν την υγεία σας και το περιβάλλον.',
    features: [
      'Εξάλειψη ποντικιών και αρουραίων',
      'Ασφαλείς δολωματικοί σταθμοί',
      'Μηχανικές και κολλώδεις παγίδες',
      'Προστασία παιδιών και κατοικιδίων',
      'Επαναληπτικοί έλεγχοι',
      'Πρόληψη επανεμφάνισης'
    ],
    color: 'from-orange-500 to-orange-600',
    href: '/myoktonia'
  },
  {
    id: 'apolymansi',
    title: 'Απολύμανση',
    subtitle: 'Εξουδετέρωση Μικροβίων',
    description: 'Προστασία από βακτήρια, ιούς και μύκητες με σύγχρονες μεθόδους απολύμανσης για σπίτια, γραφεία και επιχειρήσεις.',
    features: [
      'Εξουδετέρωση βακτηρίων και ιών',
      'Ψεκασμός υψηλής πίεσης',
      'Νεφελοψεκασμός (fogging)',
      'Απολυμαντικά υπεροξειδίου',
      'Κατάλληλο για όλους τους χώρους',
      'Πιστοποιημένα προϊόντα'
    ],
    color: 'from-blue-500 to-blue-600',
    href: '/apolymansi'
  },
  {
    id: 'apothitika',
    title: 'Προστασία Αποθηκών',
    subtitle: 'Φύλαξη Προϊόντων & Τροφίμων',
    description: 'Ειδικές υπηρεσίες για την προστασία αποθηκών τροφίμων από έντομα και τρωκτικά που μπορούν να καταστρέψουν τα αποθέματά σας.',
    features: [
      'Προστασία σιτηρών και οσπρίων',
      'Υποκαπνισμός (fumigation)',
      'Φερομονικές παγίδες',
      'Βιολογικές μέθοδοι',
      'Συνεχής παρακολούθηση',
      'Συμμόρφωση με πρότυπα HACCP'
    ],
    color: 'from-green-500 to-green-600',
    href: '/apothitika'
  }
]

const whyChooseUs = [
  {
    title: 'Πιστοποιημένοι Ειδικοί',
    description: 'Εκπαιδευμένο προσωπικό με πιστοποιήσεις και χρόνια εμπειρίας',
    icon: Users
  },
  {
    title: 'Ασφαλή Προϊόντα',
    description: 'Εγκεκριμένα βιοκτόνα που προστατεύουν την υγεία σας',
    icon: Shield
  },
  {
    title: 'Γρήγορη Ανταπόκριση',
    description: '24/7 διαθεσιμότητα για επείγουσες περιπτώσεις',
    icon: Zap
  },
  {
    title: 'Εγγύηση Αποτελέσματος',
    description: 'Μακροχρόνια προστασία με εγγύηση επανεπέμβασης',
    icon: CheckCircle
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Οι Υπηρεσίες μας
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              Ολοκληρωμένες λύσεις προστασίας για κάθε ανάγκη - από απεντόμωση μέχρι απολύμανση
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Bug className="h-4 w-4" />
                <span>4 Κύριες Υπηρεσίες</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="h-4 w-4" />
                <span>Πιστοποιημένα Προϊόντα</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <CheckCircle className="h-4 w-4" />
                <span>Εγγύηση Αποτελέσματος</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Κύριες Υπηρεσίες
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Επιλέξτε την υπηρεσία που χρειάζεστε για λεπτομερείς πληροφορίες και άμεση εξυπηρέτηση
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{service.title}</h3>
                      <p className="text-lg opacity-90">{service.subtitle}</p>
                    </div>
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-white/90 leading-relaxed">{service.description}</p>
                </div>

                <div className="p-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Τι Περιλαμβάνει:</h4>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-full justify-center`}
                  >
                    <span>Μάθετε Περισσότερα</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Γιατί να Επιλέξετε την Clean Guard;
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Η εμπειρία, η ποιότητα και η αξιοπιστία μας κάνουν τη διαφορά
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="text-center group"
              >
                <div className="h-16 w-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Έτοιμοι να Προστατεύσουμε τον Χώρο σας;
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας σήμερα για δωρεάν εκτίμηση και άμεση εξυπηρέτηση
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                <span>Επικοινωνία</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="tel:94300800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors duration-200"
              >
                <span>94 300 800</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
