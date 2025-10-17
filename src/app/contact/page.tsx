import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Επικοινωνία - Clean Guard Pest Control Cyprus",
  description: "Επικοινωνήστε με την Clean Guard για επαγγελματικές υπηρεσίες απεντόμωσης. Τηλέφωνο: 94 300 800, Email: cgcpest@gmail.com",
};

const contactMethods = [
  {
    icon: Phone,
    title: "Τηλέφωνο",
    details: "94 300 800",
    description: "Καλέστε μας για άμεση εξυπηρέτηση και δωρεάν έλεγχο",
    action: "Καλέστε τώρα",
    href: "tel:94300800",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: Mail,
    title: "Email",
    details: "cgcpest@gmail.com",
    description: "Στείλτε μας email για ερωτήσεις και προσφορές",
    action: "Στείλτε Email",
    href: "mailto:cgcpest@gmail.com",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    icon: MapPin,
    title: "Τοποθεσία",
    details: "Κύπρος, Λευκωσία",
    description: "Εξυπηρετούμε σε όλη την Κύπρο με άμεση μετακίνηση",
    action: "Δείτε τοποθεσία",
    href: "#location",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600"
  },
  {
    icon: Clock,
    title: "Ώρες Λειτουργίας",
    details: "24/7 Επείγοντα",
    description: "Διαθέσιμοι όλο το 24ωρο για επείγοντα περιστατικά",
    action: "Επείγοντα",
    href: "tel:94300800",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600"
  }
];


const faqs = [
  {
    question: "Πόσο γρήγορα μπορείτε να έρθετε;",
    answer: "Για επείγοντα περιστατικά, προσπαθούμε να είμαστε εκεί εντός 2-4 ωρών. Για κανονικές υπηρεσίες, συντονίζουμε την επίσκεψη σύμφωνα με τις ανάγκες σας."
  },
  {
    question: "Πόσο κοστίζει η υπηρεσία;",
    answer: "Η τιμή εξαρτάται από το μέγεθος του χώρου, τον τύπο του προβλήματος και τις υπηρεσίες που χρειάζεστε. Προσφέρουμε δωρεάν έλεγχο και προσφορά."
  },
  {
    question: "Είναι ασφαλή για την οικογένεια;",
    answer: "Ναι, χρησιμοποιούμε μόνο πιστοποιημένα και ασφαλή προϊόντα που δεν θέτουν σε κίνδυνο την οικογένεια ή τα κατοικίδια."
  },
  {
    question: "Παρέχετε εγγύηση;",
    answer: "Ναι, παρέχουμε εγγύηση για τις υπηρεσίες μας και επιστρέφουμε δωρεάν εάν το πρόβλημα επαναφανεί εντός της περιόδου εγγύησης."
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Minimal */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-600 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-2 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5 mb-4">
              <MessageCircle className="h-4 w-4 text-white" />
              <span className="text-xs font-semibold text-white">Επικοινωνία</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Επικοινωνήστε μαζί μας
            </h1>
            
            <p className="text-sm sm:text-base text-green-100 max-w-2xl mx-auto mb-6">
              Η Clean Guard είναι εδώ για εσάς! Επικοινωνήστε μαζί μας για δωρεάν έλεγχο και προσφορά.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="tel:94300800"
                className="inline-flex items-center space-x-2 bg-white text-green-600 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>Καλέστε 94 300 800</span>
              </Link>
              <Link
                href="mailto:cgcpest@gmail.com"
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>Στείλτε Email</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Τρόποι Επικοινωνίας
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Επιλέξτε τον τρόπο που σας βολεύει περισσότερο για να επικοινωνήσετε μαζί μας
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method) => (
              <div key={method.title} className="group relative">
                <div className={`relative h-full ${method.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Card content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                      <method.icon className={`h-8 w-8 ${method.iconColor}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-lg font-semibold text-gray-800 mb-2">{method.details}</p>
                    <p className="text-gray-600 text-sm mb-6">{method.description}</p>
                    
                    {/* Action button */}
                    <Link
                      href={method.href}
                      className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${method.color} text-white rounded-full font-medium hover:shadow-lg transition-all`}
                    >
                      <span>{method.action}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Συχνές Ερωτήσεις
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Απαντήσεις σε κοινές ερωτήσεις για τις υπηρεσίες μας
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Έτοιμοι να Εξαλείψετε τα Παράσιτα;
          </h2>
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
      </section>
    </div>
  );
}
