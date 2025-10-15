import type { Metadata } from "next";
import { Bug, CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Απεντόμωση - Clean Guard Pest Control Cyprus",
  description: "Προηγμένες τεχνικές και πιστοποιημένα προϊόντα για κάθε είδος εντόμου και χώρο. Συμπεριλαμβάνει υποκαπνισμό για αποθήκες και βιομηχανίες.",
};

const features = [
  "Προηγμένες τεχνικές και πιστοποιημένα προϊόντα",
  "Άμεσα και διαρκή αποτελέσματα",
  "Ασφαλείς μέθοδοι που προστατεύουν την υγεία",
  "Πλήρη κάλυψη σε κατοικίες και επιχειρήσεις",
  "Υποκαπνισμός για αποθήκες και βιομηχανίες",
  "Έμπειροι τεχνικοί με εξειδικευμένες γνώσεις"
];

const treatmentAreas = [
  "Κατοικίες και διαμερίσματα",
  "Εστιατόρια και καταστήματα",
  "Αποθήκες και βιομηχανίες",
  "Γραφεία και εμπορικά κέντρα",
  "Σχολεία και ιατρικά κέντρα",
  "Αγροτικές εγκαταστάσεις"
];

const processSteps = [
  {
    step: "1",
    title: "Έλεγχος και Αξιολόγηση",
    description: "Πλήρης έλεγχος του χώρου για τον εντοπισμό των παρασίτων και την αξιολόγηση του προβλήματος."
  },
  {
    step: "2", 
    title: "Σχεδιασμός Θεραπείας",
    description: "Εξατομικευμένος σχεδιασμός θεραπείας με τα πιο αποτελεσματικά και ασφαλή προϊόντα."
  },
  {
    step: "3",
    title: "Εφαρμογή Θεραπείας",
    description: "Επαγγελματική εφαρμογή της θεραπείας από έμπειρους τεχνικούς με σύγχρονους εξοπλισμό."
  },
  {
    step: "4",
    title: "Παρακολούθηση και Συντήρηση",
    description: "Συνεχής παρακολούθηση και προληπτικές θεραπείες για μακροχρόνια προστασία."
  }
];

export default function ApentomosiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-green-600 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 mb-6">
              <Bug className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white">Επαγγελματική Απεντόμωση</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Απεντόμωση
              <span className="block mt-2 text-green-200">
                Για κάθε Είδος Έντομου
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Χρησιμοποιούμε προηγμένες τεχνικές και πιστοποιημένα προϊόντα για κάθε είδος εντόμου και χώρο, 
              εξασφαλίζοντας άμεσα, διαρκή αποτελέσματα.
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
              Γιατί να Επιλέξετε την Απεντόμωση μας
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Οι ασφαλείς μέθοδοί μας προστατεύουν την υγεία σας και το περιβάλλον, 
              ενώ οι έμπειροι τεχνικοί μας προσφέρουν πλήρη κάλυψη.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Η Διαδικασία Απεντόμωσης
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ακολουθούμε μια επαγγελματική διαδικασία για να εξασφαλίσουμε τα καλύτερα αποτελέσματα
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
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

      {/* Treatment Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Χώροι Θεραπείας
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Προσφέρουμε υπηρεσίες απεντόμωσης σε όλους τους τύπους χώρων
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatmentAreas.map((area, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Έτοιμοι να Εξαλείψετε τα Παράσιτα;
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Επικοινωνήστε μαζί μας σήμερα για δωρεάν έλεγχο και προσφορά
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
