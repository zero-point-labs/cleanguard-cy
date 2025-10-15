import type { Metadata } from "next";
import { Home, CheckCircle, Phone, ArrowRight, Mouse, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Μυοκτονία - Clean Guard Pest Control Cyprus",
  description: "Προσφέρουμε οικολογικές λύσεις για τρωκτικά με σύγχρονες τεχνικές και ασφαλή, πιστοποιημένα προϊόντα.",
};

const features = [
  "Οικολογικές λύσεις για τρωκτικά",
  "Σύγχρονες τεχνικές και ασφαλή προϊόντα",
  "Μακροχρόνια προστασία",
  "Χωρίς κίνδυνο για οικογένεια ή κατοικίδια",
  "Αξιόπιστη και διαρκής προστασία",
  "Εξειδικευμένες τεχνικές εξάλειψης"
];

const rodentTypes = [
  {
    icon: Mouse,
    title: "Ποντίκια",
    description: "Εξάλειψη ποντικιών με ασφαλείς και αποτελεσματικές μεθόδους.",
    characteristics: ["Μικρό μέγεθος", "Γρήγορη αναπαραγωγή", "Εμφανίζονται σε εσωτερικούς χώρους"]
  },
  {
    icon: Home,
    title: "Αρουραίοι",
    description: "Επαγγελματική εξάλειψη αρουραίων με σύγχρονες τεχνικές.",
    characteristics: ["Μεγαλύτερο μέγεθος", "Εμφανίζονται σε αποθήκες", "Κίνδυνος για υγεία"]
  }
];

const treatmentMethods = [
  {
    step: "1",
    title: "Εντοπισμός και Αξιολόγηση",
    description: "Πλήρης έλεγχος για τον εντοπισμό των τρωκτικών και την αξιολόγηση του προβλήματος."
  },
  {
    step: "2",
    title: "Στεγανοποίηση Εισόδων",
    description: "Κλείσιμο όλων των σημείων εισόδου για την αποτροπή νέων εισβολών."
  },
  {
    step: "3",
    title: "Τοποθέτηση Παγίδων",
    description: "Στρατηγική τοποθέτηση παγίδων και δηλητηρίων σε ασφαλείς θέσεις."
  },
  {
    step: "4",
    title: "Παρακολούθηση και Συντήρηση",
    description: "Συνεχής παρακολούθηση και προληπτικές ενέργειες για μακροχρόνια προστασία."
  }
];

const targetAreas = [
  "Κατοικίες και διαμερίσματα",
  "Αποθήκες και βιομηχανίες",
  "Εστιατόρια και καταστήματα",
  "Γραφεία και εμπορικά κέντρα",
  "Αγροτικές εγκαταστάσεις",
  "Υπόγεια και κελάρια"
];

const safetyFeatures = [
  "Ασφαλή προϊόντα για οικογένεια και κατοικίδια",
  "Εξειδικευμένες τεχνικές εφαρμογής",
  "Πλήρης καθαρισμός μετά την εξάλειψη",
  "Επαγγελματική διαχείριση αποβλήτων",
  "Συνεχής παρακολούθηση και υποστήριξη",
  "Εγγύηση αποτελεσμάτων"
];

export default function MyoktoniaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-lime-600 to-green-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 mb-6">
              <Home className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">Επαγγελματική Μυοκτονία</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Μυοκτονία
              <span className="block mt-2 text-lime-200">
                Οικολογικές Λύσεις
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-lime-100 max-w-3xl mx-auto mb-8">
              Προσφέρουμε οικολογικές λύσεις για τρωκτικά με σύγχρονες τεχνικές και ασφαλή, 
              πιστοποιημένα προϊόντα. Αξιόπιστη, διαρκής προστασία.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:94300800"
                className="inline-flex items-center space-x-2 bg-white text-lime-600 px-8 py-4 rounded-full font-medium hover:bg-lime-50 transition-colors"
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
              Γιατί να Επιλέξετε την Μυοκτονία μας
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Εξασφαλίζουμε μακροχρόνια προστασία σε αποθήκες, εστιατόρια, κατοικίες, 
              χωρίς κίνδυνο για οικογένεια ή κατοικίδια.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-lime-50 rounded-2xl">
                <CheckCircle className="h-6 w-6 text-lime-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodent Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Τύποι Τρωκτικών
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Εξειδικευμένες λύσεις για κάθε είδος τρωκτικού που μπορεί να εμφανιστεί στον χώρο σας
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rodentTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-lime-100 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon className="h-8 w-8 text-lime-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Χαρακτηριστικά:</h4>
                  {type.characteristics.map((char, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{char}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Διαδικασία Μυοκτονίας
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ακολουθούμε μια επαγγελματική διαδικασία για αποτελεσματική εξάλειψη τρωκτικών
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentMethods.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-lime-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Χώροι Θεραπείας
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Προσφέρουμε υπηρεσίες μυοκτονίας σε όλους τους τύπους χώρων
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAreas.map((area, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-lime-50 to-green-50 rounded-2xl border border-lime-100">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ασφάλεια και Ποιότητα
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Εξασφαλίζουμε την ασφάλεια της οικογένειάς σας και των κατοικιδίων σας
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-lime-50 rounded-2xl">
                <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-lime-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lime-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Έχετε Πρόβλημα με Τρωκτικά;
          </h2>
          <p className="text-lg text-lime-100 mb-8 max-w-2xl mx-auto">
            Επικοινωνήστε μαζί μας σήμερα για οικολογική και ασφαλή εξάλειψη τρωκτικών
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:94300800"
              className="inline-flex items-center space-x-2 bg-white text-lime-600 px-8 py-4 rounded-full font-medium hover:bg-lime-50 transition-colors"
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
