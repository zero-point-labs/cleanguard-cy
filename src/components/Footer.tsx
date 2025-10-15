import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'
import { R2_ASSETS } from '@/lib/r2-config'

const navigation = {
  services: [
    { name: 'Απεντόμωση', href: '/apentomosi' },
    { name: 'Απολύμανση', href: '/apolymansi' },
    { name: 'Μυοκτονία', href: '/myoktonia' },
    { name: 'Απωθητικά', href: '/apothitika' },
  ],
  company: [
    { name: 'Σχετικά με εμάς', href: '/about' },
    { name: 'Οι Υπηρεσίες μας', href: '/services' },
    { name: 'Eγκυκλοπαίδεια', href: '/encyclopedia' },
  ],
  legal: [
    { name: 'Πολιτική Απορρήτου', href: '/privacy-policy' },
    { name: 'Όροι Υπηρεσίας', href: '/terms-of-service' },
    { name: 'Πολιτική Cookies', href: '/cookies-policy' },
  ],
}


export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Company info */}
          <div className="space-y-6 lg:space-y-8">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                <Image
                  src={R2_ASSETS.logo}
                  alt="Clean Guard Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Clean Guard</span>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Η Clean Guard είναι δίπλα σας για έναν καθαρό και ασφαλή χώρο. Επαγγελματικές υπηρεσίες απεντόμωσης 
              με δέσμευση για ασφάλεια και αποτελεσματικότητα.
            </p>
            
            {/* Contact info highlight */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-3">Επικοινωνήστε μαζί μας</h3>
              <div className="space-y-2">
                <Link 
                  href="tel:94300800"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">94 300 800</span>
                </Link>
                <Link 
                  href="mailto:cgcpest@gmail.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">cgcpest@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation links - Mobile optimized */}
          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Υπηρεσίες</h3>
                <ul role="list" className="space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200 block py-1 touch-manipulation"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Εταιρεία</h3>
                <ul role="list" className="space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200 block py-1 touch-manipulation"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Επικοινωνία</h3>
                <ul role="list" className="space-y-3">
                  <li>
                    <Link 
                      href="tel:94300800"
                      className="flex items-start space-x-2 text-sm text-gray-400 hover:text-white transition-colors py-1 touch-manipulation"
                    >
                      <Phone className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span>94 300 800</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="mailto:cgcpest@gmail.com"
                      className="flex items-start space-x-2 text-sm text-gray-400 hover:text-white transition-colors py-1 touch-manipulation"
                    >
                      <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" />
                      <span className="break-all">cgcpest@gmail.com</span>
                    </Link>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Κύπρος<br />
                      Λευκωσία
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 sm:mt-12 border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Clean Guard Pest Control Cyprus. Όλα τα δικαιώματα διατηρούνται.
            </p>
            
            {/* Legal links */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2">
              {navigation.legal.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200 touch-manipulation"
                  >
                    {item.name}
                  </Link>
                  {index < navigation.legal.length - 1 && (
                    <span className="text-gray-600 hidden sm:inline">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Made with love */}
          <div className="mt-4 flex items-center justify-center sm:justify-start space-x-1 text-gray-400">
            <span className="text-xs sm:text-sm">Φτιαγμένο με</span>
            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 fill-current" />
            <span className="text-xs sm:text-sm">από την zeropoint</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 