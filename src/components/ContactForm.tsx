"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  location: string
  message: string
}

const services = [
  "Απεντόμωση",
  "Απολύμανση", 
  "Μυοκτονία",
  "Απωθητικά",
  "Γενική Επικοινωνία"
]

const locations = [
  "Λευκωσία",
  "Λάρνακα", 
  "Λεμεσός",
  "Αμμόχωστος"
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          location: '',
          message: ''
        })
      } else {
        throw new Error(data.error || 'Υπήρξε πρόβλημα με την αποστολή')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          Στείλτε μας Μήνυμα
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Συμπληρώστε τη φόρμα παρακάτω και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Όνομα *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="Το όνομά σας"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Phone and Service Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Τηλέφωνο
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
              placeholder="94 300 800"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Υπηρεσία *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
            >
              <option value="">Επιλέξτε υπηρεσία</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Location Row */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Περιοχή *
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
          >
            <option value="">Επιλέξτε περιοχή</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Μήνυμα *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
            placeholder="Περιγράψτε το πρόβλημα ή την ανάγκη σας..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full font-medium shadow-lg transition-all ${
              isSubmitting
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-xl hover:shadow-green-500/25'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Αποστολή...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Στείλτε Μήνυμα</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-xl"
          >
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-800 font-medium">
              Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.
            </span>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-xl"
          >
            <AlertCircle className="h-5 w-5 text-red-600" />
            <span className="text-red-800 font-medium">
              Υπήρξε πρόβλημα με την αποστολή. Παρακαλώ δοκιμάστε ξανά ή καλέστε μας στο 94 300 800.
            </span>
          </motion.div>
        )}
      </form>

      {/* Alternative Contact Methods */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="text-center mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Προτιμάτε άλλον τρόπο επικοινωνίας;
          </h4>
          <p className="text-gray-600">
            Μπορείτε επίσης να επικοινωνήσετε μαζί μας απευθείας
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="tel:94300800"
            className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
          >
            <Phone className="h-6 w-6 text-green-600" />
            <div>
              <div className="font-medium text-gray-900">Τηλέφωνο</div>
              <div className="text-sm text-gray-600">94 300 800</div>
            </div>
          </a>
          
          <a
            href="mailto:cgcpest@gmail.com"
            className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors"
          >
            <Mail className="h-6 w-6 text-emerald-600" />
            <div>
              <div className="font-medium text-gray-900">Email</div>
              <div className="text-sm text-gray-600">cgcpest@gmail.com</div>
            </div>
          </a>
          
          <div className="flex items-center space-x-3 p-4 bg-teal-50 rounded-xl">
            <MapPin className="h-6 w-6 text-teal-600" />
            <div>
              <div className="font-medium text-gray-900">Τοποθεσία</div>
              <div className="text-sm text-gray-600">Κύπρος, Λευκωσία</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
