import type { Metadata } from "next";
import { Shield, CheckCircle, Phone, ArrowRight, Zap, Droplets } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Απολύμανση - Clean Guard Pest Control Cyprus",
  description: "Παρέχουμε απολύμανση με πιστοποιημένα σκευάσματα τελευταίας γενιάς, δημιουργώντας φράγμα προστασίας για κάθε χώρο.",
};

const features = [
  "Πιστοποιημένα σκευάσματα τελευταίας γενιάς",
  "Φράγμα προστασίας για κάθε χώρο",
  "Προσαρμοσμένες λύσεις σε σχολεία και ιατρικούς χώρους",
  "Καθαρό και υγιές περιβάλλον",
  "Προάγει την ευημερία όλων",
  "Εξασφαλίζει υγειονομική συμμόρφωση"
];

const disinfectionTypes = [
  {
    icon: Zap,
    title: "Αποστείρωση με Ατμό",
    description: "Χρήση ατμού υπό πίεση σε υψηλή θερμοκρασία για την εξάλειψη μικροοργανισμών.",
    applications: ["Ιατρικός εξοπλισμός", "Εργαλεία", "Υλικά που αντέχουν τη θερμότητα"]
  },
  {
    icon: Droplets,
    title: "Χημική Αποστείρωση",
    description: "Χρήση αερίων όπως οξείδιο του αιθυλενίου για ευαίσθητα υλικά.",
    applications: ["Νοσοκομεία", "Φαρμακοβιομηχανίες", "Ευαίσθητα υλικά"]
  },
  {
    icon: Shield,
    title: "Αποστείρωση με Όζον",
    description: "Το όζον καταστρέφει ιούς, βακτήρια και σπόρια στον αέρα ή σε επιφάνειες.",
    applications: ["Clean rooms", "Συστήματα νερού", "Φιλική προς το περιβάλλον"]
  }
];

const targetAreas = [
  "Σχολεία και εκπαιδευτικά ιδρύματα",
  "Ιατρικά κέντρα και νοσοκομεία",
  "Εστιατόρια και καταστήματα τροφίμων",
  "Γραφεία και εμπορικά κέντρα",
  "Βιομηχανικές εγκαταστάσεις",
  "Αθλητικές εγκαταστάσεις"
];

const benefits = [
  "Μέγιστη ασφάλεια και προστασία",
  "Πρόληψη λοιμώξεων και μολύνσεων",
  "Εξασφάλιση ποιότητας και καθαρότητας",
  "Συμμόρφωση με υγειονομικούς κανονισμούς",
  "Εμπιστοσύνη πελατών και συνεργατών",
  "Μακροχρόνια προστασία"
];

export default function ApolymansiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-emerald-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 mb-6">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">Επαγγελματική Απολύμανση</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Απολύμανση
              <span className="block mt-2 text-emerald-200">
                Τελευταίας Γενιάς
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
              Παρέχουμε απολύμανση με πιστοποιημένα σκευάσματα τελευταίας γενιάς, 
              δημιουργώντας φράγμα προστασίας για κάθε χώρο.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:94300800"
                className="inline-flex items-center space-x-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-medium hover:bg-emerald-50 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Καλέστε 94 300 800</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/30 transition-colors"
              >
                <span>Επικοινωνία</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Γιατί η Απολύμανση είναι Σημαντική
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Η απολύμανση εξαλείφει όλους τους μικροοργανισμούς και δημιουργεί ένα 
              καθαρό και ασφαλή περιβάλλον για όλους.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-emerald-50 rounded-2xl">
                <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disinfection Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Τύποι Αποστείρωσης
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Χρησιμοποιούμε διάφορες μεθόδους αποστείρωσης ανάλογα με τις ανάγκες κάθε χώρου
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {disinfectionTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Εφαρμογές:</h4>
                  {type.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Χώροι Απολύμανσης
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Προσαρμόζουμε τις λύσεις μας σε διάφορους τύπους χώρων για μέγιστη αποτελεσματικότητα
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAreas.map((area, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Οφέλη της Απολύμανσης
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Η απολύμανση προσφέρει πολλαπλά οφέλη για την υγεία και την ασφάλεια
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Χρειάζεστε Απολύμανση;
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Επικοινωνήστε μαζί μας για επαγγελματική απολύμανση που εξασφαλίζει καθαρότητα και ασφάλεια
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:94300800"
              className="inline-flex items-center space-x-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-medium hover:bg-emerald-50 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>94 300 800</span>
            </Link>
            <Link
              href="mailto:cgcpest@gmail.com"
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/30 transition-colors"
            >
              <span>cgcpest@gmail.com</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
