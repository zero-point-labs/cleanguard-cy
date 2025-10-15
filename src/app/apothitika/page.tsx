import type { Metadata } from "next";
import { Building2, CheckCircle, Phone, ArrowRight, Shield, Zap, Leaf } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Απωθητικά - Clean Guard Pest Control Cyprus",
  description: "Εφαρμόζουμε φυσικά και χημικά απωθητικά για ζώα και έντομα σε σπίτια, επιχειρήσεις και κήπους.",
};

const features = [
  "Φυσικά και χημικά απωθητικά",
  "Εξειδικευμένες τεχνικές και ποιοτικά προϊόντα",
  "Καθαρό και ασφαλή χώρο με έμφαση στην πρόληψη",
  "Προστασία για σπίτια, επιχειρήσεις και κήπους",
  "Προληπτική προσέγγιση στον έλεγχο παρασίτων",
  "Μακροχρόνια λύσεις προστασίας"
];

const repellentTypes = [
  {
    icon: Leaf,
    title: "Φυσικά Απωθητικά",
    description: "Χρήση φυσικών ουσιών που απωθούν τα παράσιτα χωρίς να τα βλάπτουν.",
    applications: ["Κήποι και εξωτερικοί χώροι", "Ασφαλή για παιδιά και κατοικίδια", "Φιλικά προς το περιβάλλον"]
  },
  {
    icon: Zap,
    title: "Ηλεκτρονικά Απωθητικά",
    description: "Σύγχρονα ηλεκτρονικά συστήματα που εκπέμπουν απωθητικά σήματα.",
    applications: ["Εσωτερικοί χώροι", "Αποτελεσματικά για έντομα", "Ασφαλή για ανθρώπους"]
  },
  {
    icon: Shield,
    title: "Χημικά Απωθητικά",
    description: "Εξειδικευμένα χημικά προϊόντα για αποτελεσματική προστασία.",
    applications: ["Επαγγελματικές εφαρμογές", "Μακροχρόνια προστασία", "Εξειδικευμένες τεχνικές"]
  }
];

const applicationAreas = [
  {
    title: "Κήποι και Εξωτερικοί Χώροι",
    description: "Προστασία κήπων, αυλών και εξωτερικών χώρων από παράσιτα.",
    benefits: ["Φυσικά απωθητικά", "Ασφαλή για φυτά", "Μακροχρόνια προστασία"]
  },
  {
    title: "Εσωτερικοί Χώροι",
    description: "Απωθητικά για εσωτερικούς χώρους σπιτιών και επιχειρήσεων.",
    benefits: ["Ασφαλή για ανθρώπους", "Αποτελεσματικά", "Εύκολη εφαρμογή"]
  },
  {
    title: "Επιχειρήσεις",
    description: "Επαγγελματικές λύσεις για επιχειρήσεις και βιομηχανικές εγκαταστάσεις.",
    benefits: ["Εξειδικευμένες τεχνικές", "Συνεχής προστασία", "Συμμόρφωση με κανονισμούς"]
  }
];

const preventionSteps = [
  {
    step: "1",
    title: "Αξιολόγηση Χώρου",
    description: "Πλήρης αξιολόγηση του χώρου για τον εντοπισμό πιθανών προβλημάτων."
  },
  {
    step: "2",
    title: "Σχεδιασμός Προστασίας",
    description: "Εξατομικευμένος σχεδιασμός απωθητικών για κάθε χώρο."
  },
  {
    step: "3",
    title: "Εφαρμογή Απωθητικών",
    description: "Επαγγελματική εφαρμογή των κατάλληλων απωθητικών."
  },
  {
    step: "4",
    title: "Συντήρηση και Παρακολούθηση",
    description: "Συνεχής συντήρηση και παρακολούθηση για μακροχρόνια αποτελεσματικότητα."
  }
];

const targetSpaces = [
  "Κατοικίες και διαμερίσματα",
  "Επιχειρήσεις και γραφεία",
  "Κήποι και εξωτερικοί χώροι",
  "Εστιατόρια και καταστήματα",
  "Αποθήκες και βιομηχανίες",
  "Αγροτικές εγκαταστάσεις"
];

const benefits = [
  "Προληπτική προστασία από παράσιτα",
  "Ασφαλείς λύσεις για οικογένεια και κατοικίδια",
  "Φιλικές προς το περιβάλλον μεθόδους",
  "Μακροχρόνια και αποτελεσματική προστασία",
  "Εξειδικευμένες τεχνικές εφαρμογής",
  "Συνεχής υποστήριξη και συντήρηση"
];

export default function ApothitikaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-green-600 to-lime-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 mb-6">
              <Building2 className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">Επαγγελματικά Απωθητικά</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Απωθητικά
              <span className="block mt-2 text-green-200">
                Φυσικά & Χημικά
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Εφαρμόζουμε φυσικά και χημικά απωθητικά για ζώα και έντομα σε σπίτια, 
              επιχειρήσεις και κήπους. Με έμφαση στην πρόληψη.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:94300800"
                className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-full font-medium hover:bg-green-50 transition-colors"
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
              Γιατί τα Απωθητικά είναι Αποτελεσματικά
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Με εξειδικευμένες τεχνικές και ποιοτικά προϊόντα, εξασφαλίζουμε καθαρό, 
              ασφαλή χώρο με έμφαση στην πρόληψη.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-green-50 rounded-2xl">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repellent Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Τύποι Απωθητικών
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Προσφέρουμε διάφορους τύπους απωθητικών για κάθε ανάγκη και χώρο
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {repellentTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Εφαρμογές:</h4>
                  {type.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Περιοχές Εφαρμογής
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Προσαρμόζουμε τις λύσεις μας σε διάφορους τύπους χώρων
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applicationAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <div className="space-y-2">
                  {area.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Διαδικασία Προληπτικής Προστασίας
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ακολουθούμε μια επαγγελματική διαδικασία για αποτελεσματική προληπτική προστασία
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preventionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Spaces */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Χώροι Προστασίας
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Προσφέρουμε υπηρεσίες απωθητικών σε όλους τους τύπους χώρων
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetSpaces.map((space, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{space}</span>
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
              Οφέλη των Απωθητικών
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Τα απωθητικά προσφέρουν πολλαπλά οφέλη για την προστασία του χώρου σας
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-lime-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Χρειάζεστε Προληπτική Προστασία;
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Επικοινωνήστε μαζί μας για επαγγελματικά απωθητικά που εξασφαλίζουν μακροχρόνια προστασία
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:94300800"
              className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-full font-medium hover:bg-green-50 transition-colors"
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
