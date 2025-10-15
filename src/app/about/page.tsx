"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Users, Award, Clock, CheckCircle, Phone, Calendar, MapPin } from 'lucide-react'

const stats = [
  { number: '10K+', label: 'Χώροι Προστατευμένοι' },
  { number: '15+', label: 'Χρόνια Εμπειρίας' },
  { number: '24/7', label: 'Διαθεσιμότητα' },
  { number: '100%', label: 'Ικανοποίηση Πελατών' }
]

const values = [
  {
    title: 'Ασφάλεια Πρώτα',
    description: 'Χρησιμοποιούμε μόνο εγκεκριμένα και ασφαλή προϊόντα που προστατεύουν την υγεία σας και το περιβάλλον.',
    icon: Shield
  },
  {
    title: 'Επαγγελματισμός',
    description: 'Εκπαιδευμένο προσωπικό με πιστοποιήσεις και συνεχή εκπαίδευση στις νεότερες τεχνικές.',
    icon: Award
  },
  {
    title: 'Αξιοπιστία',
    description: 'Τηρούμε πάντα τις υποσχέσεις μας και παρέχουμε υπηρεσίες υψηλής ποιότητας με συνέπεια.',
    icon: CheckCircle
  },
  {
    title: 'Άμεση Ανταπόκριση',
    description: '24/7 διαθεσιμότητα για επείγουσες περιπτώσεις και γρήγορη εξυπηρέτηση όλων των αιτημάτων.',
    icon: Clock
  }
]

const team = [
  {
    name: 'Ομάδα Απεντόμωσης',
    description: 'Ειδικοί στην αντιμετώπιση εντόμων και παρασίτων',
    expertise: 'Κατσαρίδες, Μυρμήγκια, Μύγες, Κουνούπια'
  },
  {
    name: 'Ομάδα Μυοκτονίας',
    description: 'Εξπέρ στον έλεγχο τρωκτικών',
    expertise: 'Ποντίκια, Αρουραίοι, Πρόληψη'
  },
  {
    name: 'Ομάδα Απολύμανσης',
    description: 'Ειδικοί σε μικροβιολογικό έλεγχο',
    expertise: 'Βακτήρια, Ιοί, Μύκητες'
  },
  {
    name: 'Ομάδα Αποθηκών',
    description: 'Προστασία τροφίμων και προϊόντων',
    expertise: 'HACCP, Fumigation, Παρακολούθηση'
  }
]

export default function AboutPage() {
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
              Η Ομάδα μας
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              Πάνω από 15 χρόνια εμπειρίας στην προστασία χώρων από παράσιτα και επιβλαβείς οργανισμούς
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3">
              <MapPin className="h-5 w-5" />
              <span className="text-lg font-medium">🇨🇾 Pest Control Cyprus</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ποιοι Είμαστε
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Η <strong>Clean Guard</strong> είναι μια κυπριακή εταιρεία που ειδικεύεται στην προστασία 
                  χώρων από παράσιτα και επιβλαβείς οργανισμούς. Με πάνω από 15 χρόνια εμπειρίας, 
                  έχουμε προστατεύσει χιλιάδες σπίτια και επιχειρήσεις σε όλη την Κύπρο.
                </p>
                <p>
                  Η αποστολή μας είναι να παρέχουμε <strong>ασφαλείς, αποτελεσματικές και φιλικές 
                  προς το περιβάλλον λύσεις</strong> για την αντιμετώπιση κάθε είδους παρασίτων. 
                  Χρησιμοποιούμε μόνο πιστοποιημένα προϊόντα και σύγχρονες τεχνικές.
                </p>
                <p>
                  Το εκπαιδευμένο προσωπικό μας διαθέτει όλες τις απαραίτητες πιστοποιήσεις και 
                  συνεχίζει την εκπαίδευσή του για να παραμένει ενημερωμένο με τις νεότερες 
                  εξελίξεις στον τομέα.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Η Φιλοσοφία μας</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ασφάλεια Πρώτα</h4>
                    <p className="text-gray-600">Προστασία της υγείας σας και του περιβάλλοντος</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Αποτελεσματικότητα</h4>
                    <p className="text-gray-600">Μακροχρόνια λύσεις με εγγύηση αποτελέσματος</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Διαφάνεια</h4>
                    <p className="text-gray-600">Ξεκάθαρη ενημέρωση και τιμολόγηση</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Οι Αξίες μας
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Αυτό που μας κάνει διαφορετικούς και αξιόπιστους
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="h-16 w-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Οι Ειδικές μας Ομάδες
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Εξειδικευμένες ομάδες για κάθε τύπο προβλήματος
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center"
              >
                <div className="h-16 w-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.description}</p>
                <div className="text-sm text-green-600 font-medium">{member.expertise}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ας Μιλήσουμε για τις Ανάγκες σας
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για δωρεάν συμβουλή και εξατομικευμένη λύση
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Phone className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Τηλέφωνο</h3>
                <p className="text-green-100">94 300 800</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Calendar className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Διαθεσιμότητα</h3>
                <p className="text-green-100">24/7 Εξυπηρέτηση</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MapPin className="h-8 w-8 text-white mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Περιοχή</h3>
                <p className="text-green-100">Όλη η Κύπρος</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                <Calendar className="h-5 w-5" />
                <span>Κλείστε Ραντεβού</span>
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="tel:94300800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
                <span>Καλέστε Τώρα</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
