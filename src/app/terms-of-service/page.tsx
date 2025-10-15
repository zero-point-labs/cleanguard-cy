"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, CheckCircle, AlertTriangle, Scale, Phone, Mail } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <FileText className="h-12 w-12 text-emerald-200 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Όροι Υπηρεσίας
              </h1>
            </div>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Οι όροι και προϋποθέσεις χρήσης των υπηρεσιών της Clean Guard
            </p>
            <p className="text-sm text-emerald-200 mt-4">
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
                <Scale className="h-6 w-6 text-emerald-600 mr-3" />
                Εισαγωγή
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Καλώς ήρθατε στην Clean Guard. Αυτοί οι Όροι Υπηρεσίας διέπουν τη χρήση των υπηρεσιών μας και του 
                ιστότοπού μας. Με τη χρήση των υπηρεσιών μας, συμφωνείτε να δεσμεύεστε από αυτούς τους όρους.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                Υπηρεσίες
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">Η Clean Guard παρέχει τις ακόλουθες υπηρεσίες:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Απεντόμωση (εξάλειψη εντόμων και παρασίτων)</li>
                  <li>Μυοκτονία (έλεγχος τρωκτικών)</li>
                  <li>Απολύμανση (εξουδετέρωση μικροβίων)</li>
                  <li>Προστασία αποθηκών τροφίμων</li>
                  <li>Συμβουλευτικές υπηρεσίες πρόληψης</li>
                </ul>
              </div>
            </div>

            {/* Booking and Scheduling */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Κράτηση και Προγραμματισμός</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Οι κρατήσεις γίνονται τηλεφωνικά ή μέσω της φόρμας επικοινωνίας</li>
                <li>Επιβεβαίωση του ραντεβού απαιτείται 24 ώρες πριν</li>
                <li>Ακυρώσεις πρέπει να γίνονται τουλάχιστον 12 ώρες πριν</li>
                <li>Σε περίπτωση καθυστέρησης, παρακαλούμε ενημερώστε μας άμεσα</li>
              </ul>
            </div>

            {/* Pricing and Payment */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Τιμολόγηση και Πληρωμή</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Οι τιμές καθορίζονται βάσει του τύπου και του μεγέθους της εργασίας</li>
                <li>Δωρεάν εκτίμηση και προσφορά πριν την έναρξη των εργασιών</li>
                <li>Πληρωμή μετά την ολοκλήρωση της υπηρεσίας</li>
                <li>Δεκτές μεθόδους πληρωμής: μετρητά, τραπεζική κατάθεση</li>
                <li>Τιμολόγιο εκδίδεται για κάθε παρεχόμενη υπηρεσία</li>
              </ul>
            </div>

            {/* Guarantees */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Εγγυήσεις</h2>
              <div className="bg-emerald-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">Εγγύηση Αποτελέσματος</h3>
                <ul className="list-disc list-inside text-emerald-700 space-y-2 ml-4">
                  <li>Εγγυόμαστε την αποτελεσματικότητα των υπηρεσιών μας</li>
                  <li>Δωρεάν επανεπέμβαση εάν το πρόβλημα επιστρέψει εντός της περιόδου εγγύησης</li>
                  <li>Η διάρκεια εγγύησης εξαρτάται από τον τύπο της υπηρεσίας</li>
                  <li>Η εγγύηση ισχύει υπό κανονικές συνθήκες χρήσης</li>
                </ul>
              </div>
            </div>

            {/* Safety and Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-amber-600 mr-3" />
                Ασφάλεια και Υποχρεώσεις
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Υποχρεώσεις Εταιρείας</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Χρήση εγκεκριμένων και ασφαλών προϊόντων</li>
                    <li>Εκπαιδευμένο και πιστοποιημένο προσωπικό</li>
                    <li>Τήρηση όλων των κανονισμών ασφαλείας</li>
                    <li>Ασφαλιστική κάλυψη αστικής ευθύνης</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Υποχρεώσεις Πελάτη</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Παροχή ακριβών πληροφοριών για το πρόβλημα</li>
                    <li>Εξασφάλιση πρόσβασης στους χώρους εργασίας</li>
                    <li>Τήρηση των οδηγιών ασφαλείας που δίνονται</li>
                    <li>Ενημέρωση για ευαίσθητα άτομα ή κατοικίδια</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitations */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Περιορισμοί Ευθύνης</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <p className="text-amber-800 mb-4">
                  Η Clean Guard δεν φέρει ευθύνη για:
                </p>
                <ul className="list-disc list-inside text-amber-700 space-y-2 ml-4">
                  <li>Ζημιές που προκύπτουν από μη τήρηση των οδηγιών μας</li>
                  <li>Προβλήματα που οφείλονται σε εξωτερικούς παράγοντες</li>
                  <li>Καθυστερήσεις λόγω καιρικών συνθηκών ή ανωτέρας βίας</li>
                  <li>Αλλεργικές αντιδράσεις που δεν έχουν δηλωθεί εκ των προτέρων</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Πνευματική Ιδιοκτησία</h2>
              <p className="text-gray-700">
                Όλο το περιεχόμενο του ιστότοπου, συμπεριλαμβανομένων κειμένων, εικόνων, λογοτύπων και σχεδίων, 
                προστατεύεται από δικαιώματα πνευματικής ιδιοκτησίας και ανήκει στην Clean Guard ή τους αντίστοιχους κατόχους.
              </p>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Τροποποιήσεις Όρων</h2>
              <p className="text-gray-700">
                Διατηρούμε το δικαίωμα να τροποποιούμε αυτούς τους όρους ανά πάσα στιγμή. Οι αλλαγές θα 
                δημοσιεύονται στον ιστότοπό μας και θα ισχύουν άμεσα μετά τη δημοσίευση.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Εφαρμοστέο Δίκαιο</h2>
              <p className="text-gray-700">
                Αυτοί οι όροι διέπονται από το δίκαιο της Κυπριακής Δημοκρατίας. Τυχόν διαφορές θα 
                επιλύονται από τα αρμόδια δικαστήρια της Κύπρου.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Mail className="h-6 w-6 text-emerald-600 mr-3" />
                Επικοινωνία
              </h2>
              <p className="text-gray-700 mb-4">
                Για ερωτήσεις σχετικά με αυτούς τους όρους ή τις υπηρεσίες μας:
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Phone className="h-4 w-4 text-emerald-600 mr-2" />
                  <span>Τηλέφωνο: 94 300 800</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="h-4 w-4 text-emerald-600 mr-2" />
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
