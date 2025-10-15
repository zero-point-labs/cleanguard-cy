"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { R2_ASSETS } from '@/lib/r2-config'

const navigation = [
  { name: 'Οι Υπηρεσίες μας', href: '#services' },
  { name: 'Η Ομάδα μας', href: '#team' },
  { name: 'Eγκυκλοπαίδεια', href: '#encyclopedia' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white shadow-lg">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          {/* Mobile Layout */}
          <div className="flex lg:hidden w-full items-center justify-between py-6">
            {/* Left side - Logo and Company Name */}
            <div className="flex items-center space-x-3 flex-1">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                  <Image
                    src={R2_ASSETS.logo}
                    alt="Clean Guard Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-gray-900 leading-tight">Clean Guard</span>
                  <span className="text-sm text-gray-600 leading-tight">Pest Control Cyprus</span>
                </div>
              </Link>
            </div>

            {/* Right side - Menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-3 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 touch-manipulation flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex w-full items-center justify-between py-8">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-4">
                <div className="h-14 w-14 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={R2_ASSETS.logo}
                    alt="Clean Guard Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900 leading-tight">Clean Guard</span>
                  <span className="text-sm text-gray-600 leading-tight">Pest Control Cyprus</span>
                </div>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="flex items-center space-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA buttons */}
            <div className="flex items-center space-x-6">
              <Link
                href="tel:94300800"
                className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold">94 300 800</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-4 text-base font-medium text-white shadow-lg hover:shadow-xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-200"
              >
                <Calendar className="h-5 w-5" />
                <span>Επικοινωνία</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-white rounded-b-3xl border-t border-gray-200 shadow-2xl"
              >
                <div className="px-4 py-6">
                  {/* Navigation links */}
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200 touch-manipulation"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Contact info and CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                    <Link
                      href="tel:94300800"
                      className="flex items-center justify-center space-x-2 rounded-xl px-4 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200 touch-manipulation"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-medium">94 300 800</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-4 py-4 text-base font-medium text-white shadow-lg hover:shadow-xl hover:shadow-green-500/25 transition-all duration-200 touch-manipulation"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Calendar className="h-5 w-5" />
                      <span>Επικοινωνία</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  )
} 