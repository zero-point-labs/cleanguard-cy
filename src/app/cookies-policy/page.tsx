"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Cookie, Settings, BarChart3, Shield, Phone, Mail } from 'lucide-react'

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Cookie className="h-12 w-12 text-purple-200 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Πολιτική Cookies
              </h1>
            </div>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Πώς χρησιμοποιούμε cookies για τη βελτίωση της εμπειρίας σας
            </p>
            <p className="text-sm text-purple-200 mt-4">
              Τελευταία ενημέρωση: {new Date().toLocaleDateString('el-GR')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8"
          >
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Cookie className="h-6 w-6 text-purple-600 mr-3" />
                Τι είναι τα Cookies;
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Τα cookies είναι μικρά αρχεία κειμένου που αποθηκεύονται στη συσκευή σας όταν επισκέπτεστε 
                έναν ιστότοπο. Μας βοηθούν να θυμόμαστε τις προτιμήσεις σας και να βελτιώνουμε την εμπειρία 
                περιήγησής σας.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Η Clean Guard χρησιμοποιεί cookies για να παρέχει καλύτερες υπηρεσίες και να κατανοεί πώς 
                χρησιμοποιείτε τον ιστότοπό μας.
              </p>
            </div>

            {/* Types of Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Τύποι Cookies που Χρησιμοποιούμε</h2>
              
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Απαραίτητα Cookies</h3>
                    <span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Πάντα Ενεργά</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Αυτά τα cookies είναι απαραίτητα για τη λειτουργία του ιστότοπου και δεν μπορούν να απενεργοποιηθούν.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Διατήρηση της συνεδρίας σας</li>
                    <li>Ασφάλεια και προστασία από επιθέσεις</li>
                    <li>Λειτουργικότητα φορμών επικοινωνίας</li>
                    <li>Προτιμήσεις γλώσσας</li>
                  </ul>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Settings className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Λειτουργικά Cookies</h3>
                    <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Προαιρετικά</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Βελτιώνουν τη λειτουργικότητα του ιστότοπου και την εμπειρία χρήσης.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Αποθήκευση προτιμήσεων χρήστη</li>
                    <li>Προσαρμογή περιεχομένου</li>
                    <li>Βελτιωμένη πλοήγηση</li>
                    <li>Υποστήριξη chat και επικοινωνίας</li>
                  </ul>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Αναλυτικά Cookies</h3>
                    <span className="ml-auto bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Προαιρετικά</span>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Μας βοηθούν να κατανοήσουμε πώς χρησιμοποιείτε τον ιστότοπό μας για να τον βελτιώσουμε.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Στατιστικά επισκεψιμότητας</li>
                    <li>Ανάλυση συμπεριφοράς χρηστών</li>
                    <li>Βελτίωση περιεχομένου</li>
                    <li>Μέτρηση απόδοσης ιστότοπου</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third Party Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies Τρίτων</h2>
              <p className="text-gray-700 mb-4">
                Ενδέχεται να χρησιμοποιούμε υπηρεσίες τρίτων που τοποθετούν δικά τους cookies:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Για στατιστικά και ανάλυση επισκεψιμότητας</li>
                <li><strong>Google Maps:</strong> Για εμφάνιση χαρτών και τοποθεσιών</li>
                <li><strong>reCAPTCHA:</strong> Για προστασία από spam και bots</li>
              </ul>
            </div>

            {/* Cookie Management */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Settings className="h-6 w-6 text-purple-600 mr-3" />
                Διαχείριση Cookies
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Ρυθμίσεις Φυλλομετρητή</h3>
                  <p className="text-gray-700 mb-2">
                    Μπορείτε να ελέγξετε τα cookies μέσω των ρυθμίσεων του φυλλομετρητή σας:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Αποδοχή ή απόρριψη όλων των cookies</li>
                    <li>Διαγραφή υπαρχόντων cookies</li>
                    <li>Ειδοποίηση πριν την αποδοχή cookies</li>
                    <li>Εξαιρέσεις για συγκεκριμένους ιστότοπους</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Οδηγίες για Δημοφιλείς Φυλλομετρητές:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><strong>Chrome:</strong> Ρυθμίσεις → Απόρρητο και ασφάλεια → Cookies</li>
                    <li><strong>Firefox:</strong> Προτιμήσεις → Απόρρητο και ασφάλεια</li>
                    <li><strong>Safari:</strong> Προτιμήσεις → Απόρρητο</li>
                    <li><strong>Edge:</strong> Ρυθμίσεις → Cookies και δικαιώματα ιστότοπου</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookie Consent */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Συναίνεση για Cookies</h2>
              <p className="text-gray-700 mb-4">
                Όταν επισκέπτεστε τον ιστότοπό μας για πρώτη φορά, θα σας ζητήσουμε τη συναίνεσή σας για 
                τη χρήση προαιρετικών cookies. Μπορείτε να:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Αποδεχτείτε όλα τα cookies</li>
                <li>Επιλέξετε συγκεκριμένες κατηγορίες</li>
                <li>Απορρίψετε όλα τα προαιρετικά cookies</li>
                <li>Αλλάξετε τις προτιμήσεις σας ανά πάσα στιγμή</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Διατήρηση Δεδομένων</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">Τα cookies διατηρούνται για διαφορετικές περιόδους:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Cookies Συνεδρίας</h4>
                    <p className="text-sm text-gray-600">Διαγράφονται όταν κλείσετε τον φυλλομετρητή</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Μόνιμα Cookies</h4>
                    <p className="text-sm text-gray-600">Διατηρούνται για 1-24 μήνες ανάλογα με τον τύπο</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ενημερώσεις Πολιτικής</h2>
              <p className="text-gray-700">
                Ενδέχεται να ενημερώνουμε αυτή την πολιτική cookies περιστασιακά. Οι αλλαγές θα δημοσιεύονται 
                σε αυτή τη σελίδα με ενημερωμένη ημερομηνία.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Mail className="h-6 w-6 text-purple-600 mr-3" />
                Επικοινωνία
              </h2>
              <p className="text-gray-700 mb-4">
                Για ερωτήσεις σχετικά με τη χρήση cookies:
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Phone className="h-4 w-4 text-purple-600 mr-2" />
                  <span>Τηλέφωνο: 94 300 800</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="h-4 w-4 text-purple-600 mr-2" />
                  <span>Email: cgcpest@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
