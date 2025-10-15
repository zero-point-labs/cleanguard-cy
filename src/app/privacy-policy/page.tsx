"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Users, Mail, Phone } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-12 w-12 text-blue-200 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Πολιτική Απορρήτου
              </h1>
            </div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Η προστασία των προσωπικών σας δεδομένων είναι προτεραιότητά μας
            </p>
            <p className="text-sm text-blue-200 mt-4">
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
                <Eye className="h-6 w-6 text-blue-600 mr-3" />
                Εισαγωγή
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Η Clean Guard δεσμεύεται να προστατεύει την ιδιωτικότητα και τα προσωπικά δεδομένα των πελατών της. 
                Αυτή η Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις πληροφορίες σας 
                όταν χρησιμοποιείτε τις υπηρεσίες μας ή επισκέπτεστε τον ιστότοπό μας.
              </p>
            </div>

            {/* Data Collection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                Συλλογή Δεδομένων
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Προσωπικά Στοιχεία</h3>
                  <p className="text-gray-700 mb-2">Συλλέγουμε τα ακόλουθα προσωπικά δεδομένα:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Όνομα και στοιχεία επικοινωνίας (τηλέφωνο, email)</li>
                    <li>Διεύθυνση και περιοχή παροχής υπηρεσιών</li>
                    <li>Πληροφορίες σχετικά με την υπηρεσία που χρειάζεστε</li>
                    <li>Ιστορικό υπηρεσιών και προτιμήσεις</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Τεχνικά Δεδομένα</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Διεύθυνση IP και πληροφορίες περιήγησης</li>
                    <li>Τύπος συσκευής και φυλλομετρητή</li>
                    <li>Cookies και παρόμοιες τεχνολογίες</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Usage */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-blue-600 mr-3" />
                Χρήση Δεδομένων
              </h2>
              <p className="text-gray-700 mb-4">Χρησιμοποιούμε τα δεδομένα σας για:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Παροχή και βελτίωση των υπηρεσιών μας</li>
                <li>Επικοινωνία μαζί σας για προγραμματισμό και παρακολούθηση</li>
                <li>Αποστολή σημαντικών ενημερώσεων και πληροφοριών</li>
                <li>Τήρηση νομικών υποχρεώσεων</li>
                <li>Βελτίωση της εμπειρίας χρήσης του ιστότοπου</li>
                <li>Στατιστική ανάλυση και έρευνα αγοράς</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Προστασία Δεδομένων</h2>
              <p className="text-gray-700 mb-4">
                Εφαρμόζουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων σας:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Κρυπτογράφηση δεδομένων κατά τη μεταφορά και αποθήκευση</li>
                <li>Περιορισμένη πρόσβαση μόνο σε εξουσιοδοτημένο προσωπικό</li>
                <li>Τακτικές ενημερώσεις ασφαλείας και παρακολούθηση</li>
                <li>Ασφαλείς διαδικασίες διαχείρισης και διαγραφής δεδομένων</li>
              </ul>
            </div>

            {/* Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Τα Δικαιώματά σας</h2>
              <p className="text-gray-700 mb-4">Σύμφωνα με τον GDPR, έχετε τα ακόλουθα δικαιώματα:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Δικαίωμα πρόσβασης στα προσωπικά σας δεδομένα</li>
                <li>Δικαίωμα διόρθωσης ανακριβών πληροφοριών</li>
                <li>Δικαίωμα διαγραφής (δικαίωμα στη λήθη)</li>
                <li>Δικαίωμα περιορισμού της επεξεργασίας</li>
                <li>Δικαίωμα φορητότητας δεδομένων</li>
                <li>Δικαίωμα αντίρρησης στην επεξεργασία</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700 mb-4">
                Χρησιμοποιούμε cookies για τη βελτίωση της εμπειρίας σας στον ιστότοπό μας. 
                Μπορείτε να διαχειριστείτε τις προτιμήσεις cookies μέσω των ρυθμίσεων του φυλλομετρητή σας.
              </p>
              <p className="text-gray-700">
                Για περισσότερες πληροφορίες, δείτε την <a href="/cookies-policy" className="text-blue-600 hover:text-blue-800 underline">Πολιτική Cookies</a> μας.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-3" />
                Επικοινωνία
              </h2>
              <p className="text-gray-700 mb-4">
                Για οποιεσδήποτε ερωτήσεις σχετικά με αυτή την Πολιτική Απορρήτου ή για να ασκήσετε τα δικαιώματά σας, 
                επικοινωνήστε μαζί μας:
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Phone className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Τηλέφωνο: 94 300 800</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Email: cgcpest@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Ενημερώσεις Πολιτικής</h2>
              <p className="text-gray-700">
                Διατηρούμε το δικαίωμα να ενημερώνουμε αυτή την Πολιτική Απορρήτου. Οι σημαντικές αλλαγές θα 
                ανακοινώνονται στον ιστότοπό μας και θα σας ενημερώνουμε εάν είναι απαραίτητο.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
