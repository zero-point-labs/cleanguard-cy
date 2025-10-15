"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bug, Shield, AlertTriangle, Info, ChevronRight, Eye, Home, Factory, Droplets, Zap, Users, Clock, CheckCircle } from 'lucide-react'

const pestCategories = [
  {
    id: 'katsarides',
    title: 'Κατσαρίδες',
    icon: Bug,
    color: 'bg-red-500',
    description: 'Οι κατσαρίδες είναι έντομα της τάξης Blattodea, γνωστά για την αντοχή και την προσαρμοστικότητά τους σε διάφορα περιβάλλοντα.',
    healthRisks: [
      'Σαλμονέλλωση, δυσεντερία, και γαστρεντερίτιδα',
      'Μολύνουν τρόφιμα με περιττώματα και εκκρίσεις',
      'Προκαλούν αλλεργικές αντιδράσεις και αναπνευστικά προβλήματα',
      'Αλλεργικό άσθμα, ιδιαίτερα σε παιδιά και ηλικιωμένους'
    ],
    commonTypes: [
      {
        name: 'Γερμανική Κατσαρίδα',
        scientific: 'Blattella germanica',
        size: '~1 cm',
        color: 'Ανοιχτό καφέ με δύο μαύρες γραμμές',
        characteristics: 'Πολύ παραγωγική, ταχύτατη αναπαραγωγή. Το πιο διαδεδομένο παρασιτικό έντομο παγκοσμίως.'
      },
      {
        name: 'Αμερικανική Κατσαρίδα',
        scientific: 'Periplaneta americana',
        size: 'Έως 4 cm',
        color: 'Καστανό-κοκκινωπό',
        characteristics: 'Το μεγαλύτερο είδος, ζει έως 1,5 έτος. Προτιμά υπόγεια και υγρά μέρη.'
      },
      {
        name: 'Ανατολική Κατσαρίδα',
        scientific: 'Blatta orientalis',
        size: '~2,5 cm',
        color: 'Μαύρο ή σκούρο καφέ',
        characteristics: 'Ζει έως 2 χρόνια. Συχνή σε υπόγεια, αποθήκες και σκοτεινούς χώρους.'
      }
    ],
    whereFound: [
      'Υγρά και σκοτεινά μέρη: Αποχετεύσεις, φρεάτια, βόθροι',
      'Υπόγεια, κελάρια, αποθήκες',
      'Κουζίνες, μπάνια, εστιατόρια',
      'Εμπορικά καταστήματα, σουπερ μάρκετ',
      'Ηλεκτρικές συσκευές που παράγουν θερμότητα'
    ],
    prevention: [
      'Αποθήκευση τροφίμων σε κλειστά δοχεία',
      'Τακτική απομάκρυνση απορριμμάτων',
      'Επιδιόρθωση διαρροών νερού ή υγρασίας',
      'Αερισμός χώρων για μείωση υγρασίας',
      'Σφράγιση ρωγμών σε τοίχους και πατώματα',
      'Καθαριότητα εντός και εκτός κτιρίων'
    ],
    treatment: [
      'Εφαρμογή εγκεκριμένων εντομοκτόνων σε στοχευμένα σημεία',
      'Παγίδες και δολώματα που εξαλείφουν ολόκληρους πληθυσμούς',
      'Ψεκασμός υψηλής πίεσης σε δυσπρόσιτα σημεία',
      'Θερμική απεντόμωση με υψηλές θερμοκρασίες',
      'Καθαρισμός και απολύμανση για μακροπρόθεσμη προστασία'
    ]
  },
  {
    id: 'troktica',
    title: 'Τρωκτικά',
    icon: Shield,
    color: 'bg-orange-500',
    description: 'Τα ποντίκια και οι αρουραίοι μπορούν να προκαλέσουν μεγάλα προβλήματα υγείας και ζημιές σε υποδομές.',
    healthRisks: [
      'Σαλμονέλα: Προκαλεί σοβαρά προβλήματα στο πεπτικό σύστημα',
      'Λεπτοσπείρωση: Λοίμωξη που επηρεάζει νεφρά και συκώτι',
      'Πανώλη και τύφος: Σπάνιες αλλά επικίνδυνες ασθένειες',
      'Μεταδίδονται μέσω περιττωμάτων, ούρων και τριχών'
    ],
    commonTypes: [
      {
        name: 'Οικιακός Ποντικός',
        scientific: 'Mus musculus',
        size: '6,5-9,5 εκ. (χωρίς ουρά)',
        color: 'Γκρι με μαλακό τρίχωμα',
        characteristics: 'Πανέξυπνος, σεξουαλικά ώριμος σε 35 ημέρες. Μεταδίδει σαλμονέλα και λεπτοσπείρωση.'
      },
      {
        name: 'Ποντικός των Πλοίων',
        scientific: 'Rattus rattus',
        size: '15-20 εκ. (χωρίς ουρά)',
        color: 'Καφέ με μαύρες αποχρώσεις',
        characteristics: 'Νυκτόβιος με εξαιρετική όσφρηση. Φωλιάζει ψηλά, λατρεύει σπόρους και φρούτα.'
      },
      {
        name: 'Νορβηγικός Αρουραίος',
        scientific: 'Rattus norvegicus',
        size: '18-25 εκ. (χωρίς ουρά)',
        color: 'Καφέ με τραχύ τρίχωμα',
        characteristics: 'Ο γίγαντας των τρωκτικών, πολύ ανθεκτικός. Προτιμά υγρά μέρη όπως υπόνομοι.'
      }
    ],
    whereFound: [
      'Σκοτεινά, απομονωμένα μέρη όπως ντουλάπια ή αποθήκες',
      'Ψηλά σημεία: σοφίτες, ταράτσες',
      'Υγρά μέρη: υπόνομοι, υγρά υπόγεια',
      'Κουζίνες, εστιατόρια, αποθήκες τροφίμων',
      'Εμπορικά κέντρα και βιομηχανικές εγκαταστάσεις'
    ],
    prevention: [
      'Σφράγιση τρυπών με τσιμέντο ή μέταλλο',
      'Τοποθέτηση πλεγμάτων σε αποχετεύσεις',
      'Επισκευή φθορών σε πόρτες και παράθυρα',
      'Διατήρηση καθαριότητας και τακτοποίησης',
      'Σωστή αποθήκευση τροφίμων σε κλειστά δοχεία',
      'Έλεγχος και επισκευή διαρροών νερού'
    ],
    treatment: [
      'Επιθεώρηση χώρου με ειδικές παγίδες παρακολούθησης',
      'Χρήση εγκεκριμένων ροδοντοκτόνων σε ασφαλείς σταθμούς',
      'Τοποθέτηση μηχανικών παγίδων σε στρατηγικά σημεία',
      'Ασφαλείς δολωματικοί σταθμοί που προστατεύουν παιδιά',
      'Επαναληπτικοί έλεγχοι για πλήρη εξάλειψη'
    ]
  },
  {
    id: 'entoma-apothikon',
    title: 'Έντομα Αποθηκών',
    icon: Factory,
    color: 'bg-yellow-500',
    description: 'Τα έντομα αποθηκών προκαλούν τεράστιες ζημιές σε σιτηρά, όσπρια και άλλα προϊόντα τροφίμων.',
    healthRisks: [
      'Μόλυνση και καταστροφή αποθηκευμένων τροφίμων',
      'Οικονομικές απώλειες σε επιχειρήσεις τροφίμων',
      'Αλλεργικές αντιδράσεις από υπολείμματα εντόμων',
      'Μείωση διατροφικής αξίας προϊόντων'
    ],
    commonTypes: [
      {
        name: 'Κοινό Σκουλήκι Αποθηκών',
        scientific: 'Plodia interpunctella',
        size: 'Άνοιγμα πτερύγων 15–20 mm',
        color: 'Καστανέρυθρο με αργυρόλευκες λεπτομέρειες',
        characteristics: 'Προσβάλλει σπόρους, ξηρούς καρπούς, σοκολάτες. Αφήνει ιστό στα τρόφιμα.'
      },
      {
        name: 'Σκαθάρι του Καπνού',
        scientific: 'Lasioderma serricorne',
        size: '2–3 mm',
        color: 'Καστανό έως ερυθροκαστανό',
        characteristics: 'Μικρό αλλά καταστροφικό. Προσβάλλει καπνό, κακάο, όσπρια, ζυμαρικά.'
      },
      {
        name: 'Σκαθάρι του Ρυζιού',
        scientific: 'Rhyzopertha dominica',
        size: '3 mm',
        color: 'Καστανό',
        characteristics: 'Διαπερνά σκληρούς σπόρους. Προσβάλλει ρύζι, καλαμπόκι, κριθάρι.'
      }
    ],
    whereFound: [
      'Αποθήκες τροφίμων και σιτηρών',
      'Εργοστάσια επεξεργασίας τροφίμων',
      'Σουπερμάρκετ και παντοπωλεία',
      'Οικιακές αποθήκες και ντουλάπια κουζίνας',
      'Βιομηχανικές εγκαταστάσεις τροφίμων'
    ],
    prevention: [
      'Τακτικοί έλεγχοι αποθηκών για σημάδια εντόμων',
      'Διατήρηση καθαριότητας και απομάκρυνση υπολειμμάτων',
      'Σφράγιση ρωγμών και ανοιγμάτων',
      'Χρήση φερομονικών παγίδων για έγκαιρο εντοπισμό',
      'Σωστή αποθήκευση σε στεγανά δοχεία',
      'Έλεγχος θερμοκρασίας και υγρασίας'
    ],
    treatment: [
      'Υποκαπνισμός (fumigation) για πλήρη καθαρισμό',
      'Εφαρμογή εγκεκριμένων εντομοκτόνων',
      'Βιολογικές μέθοδοι φιλικές προς το περιβάλλον',
      'Θερμική επεξεργασία προϊόντων',
      'Συστηματική παρακολούθηση με παγίδες'
    ]
  },
  {
    id: 'myrmigkia',
    title: 'Μυρμήγκια',
    icon: Users,
    color: 'bg-green-500',
    description: 'Τα μυρμήγκια είναι από τα πιο οργανωμένα έντομα στον πλανήτη, αλλά μπορούν να γίνουν προβληματικά όταν εισβάλλουν.',
    healthRisks: [
      'Μόλυνση τροφίμων και επιφανειών',
      'Τσιμπήματα που προκαλούν πόνο και αλλεργίες',
      'Δομικές ζημιές σε ξύλινες κατασκευές',
      'Μεταφορά μικροβίων από εξωτερικούς χώρους'
    ],
    commonTypes: [
      {
        name: 'Μαύρο Μυρμήγκι',
        scientific: 'Μυρμήγκι του Κήπου',
        size: 'Εργάτριες 4–5 mm, βασίλισσα έως 15 mm',
        color: 'Μαύρο',
        characteristics: 'Λατρεύει γλυκά τρόφιμα. Φτιάχνει φωλιές στη γη, μεταξύ τούβλων ή κάτω από φλοιούς.'
      },
      {
        name: 'Κόκκινα Μυρμήγκια',
        scientific: 'Κόκκινο προς καφέ',
        size: 'Εργάτριες 3 mm, βασίλισσα 6 mm',
        color: 'Κόκκινο προς καφέ',
        characteristics: 'Επιθετικά με κέντρισμα. Αποικίες έως 90.000 μέλη. Δημιουργούν λοφίσκους έως 40 εκ.'
      },
      {
        name: 'Μυρμήγκια του Φαραώ',
        scientific: 'Καφέ-κίτρινο',
        size: 'Εργάτριες 1,5–2 mm, βασίλισσα 4–6 mm',
        color: 'Καφέ-κίτρινο',
        characteristics: 'Πολύ μικρά, τρέφονται με αποσυντιθέμενα τρόφιμα. Φορείς μικροβίων.'
      }
    ],
    whereFound: [
      'Κήποι και εξωτερικοί χώροι',
      'Κουζίνες και χώροι τροφίμων',
      'Ρωγμές σε τοίχους και πατώματα',
      'Κάτω από πλακάκια και δάπεδα',
      'Νοσοκομεία και χώροι υγειονομικού ενδιαφέροντος'
    ],
    prevention: [
      'Διατήρηση καθαριότητας και απομάκρυνση ψίχουλων',
      'Αποθήκευση τροφίμων σε κλειστά, στεγανά δοχεία',
      'Σφράγιση ρωγμών, αρμών και σημείων εισόδου',
      'Έλεγχος υγρασίας και διατήρηση στεγνών χώρων',
      'Τακτικός καθαρισμός κουζινών και τραπεζαριών'
    ],
    treatment: [
      'Υπολειμματικός ψεκασμός με εγκεκριμένα εντομοκτόνα',
      'Ειδικό τζελ που στοχεύει την αποικία στη ρίζα',
      'Παγίδες σε περάσματα μυρμηγκιών',
      'Εντοπισμός και αντιμετώπιση φωλιών',
      'Μακροχρόνια προστασία με επαναληπτικές εφαρμογές'
    ]
  },
  {
    id: 'myges',
    title: 'Μύγες',
    icon: Bug,
    color: 'bg-blue-500',
    description: 'Οι μύγες είναι από τους πιο ενοχλητικούς και επικίνδυνους επισκέπτες που μεταφέρουν πάνω από 100 μικροοργανισμούς.',
    healthRisks: [
      'Σαλμονέλα: Τροφική δηλητηρίαση',
      'Δυσεντερία: Σοβαρή γαστρεντερική λοίμωξη',
      'Τυφοειδής πυρετός: Βακτηριακή λοίμωξη',
      'Χολέρα, άνθρακας, πολιομυελίτιδα: Σπάνιες αλλά επικίνδυνες'
    ],
    commonTypes: [
      {
        name: 'Οικιακή Μύγα',
        scientific: 'Musca domestica',
        size: '6–8 mm',
        color: 'Γκριζωπό με μαύρες ρίγες',
        characteristics: 'Το πιο συνηθισμένο είδος. Μεταφέρει 1.000.000+ μικροοργανισμούς στο σώμα της.'
      },
      {
        name: 'Μύγα των Φρούτων',
        scientific: 'Drosophila melanogaster',
        size: '2–4 mm',
        color: 'Ανοιχτόχρωμη με κόκκινα μάτια',
        characteristics: 'Εμφανίζεται κοντά σε φρούτα που σαπίζουν. Αναπαράγεται ταχύτατα.'
      },
      {
        name: 'Μύγα του Κρέατος',
        scientific: 'Sarcophaga carnaria',
        size: '8–12 mm',
        color: 'Γκρι με μαύρα σχέδια',
        characteristics: 'Προσβάλλει κρέας και ζωικά προϊόντα. Προκαλεί γαστρεντερικές ασθένειες.'
      }
    ],
    whereFound: [
      'Σπίτια, εστιατόρια, αποθήκες τροφίμων',
      'Κτηνοτροφικές μονάδες',
      'Χώροι με οργανικά απορρίμματα',
      'Κουζίνες και χώροι προετοιμασίας φαγητού',
      'Εξωτερικοί χώροι με τρόφιμα'
    ],
    prevention: [
      'Διατήρηση καθαριότητας χωρίς υπολείμματα τροφίμων',
      'Σωστή διαχείριση απορριμμάτων με σφραγισμένους κάδους',
      'Τοποθέτηση σιτών σε πόρτες και παράθυρα',
      'Αποθήκευση τροφίμων σε κλειστά δοχεία',
      'Τακτικός καθαρισμός κάδων απορριμμάτων'
    ],
    treatment: [
      'Υπολειμματικοί ψεκασμοί σε εξωτερικούς χώρους',
      'Εντομοκτόνα επιχρίσματα σε στοχευμένα σημεία',
      'Τροφικές παγίδες με ελκυστικά δολώματα',
      'Ηλεκτρικές παγίδες UV για εσωτερικούς χώρους',
      'Αυτοκόλλητες παγίδες για διακριτική παγίδευση'
    ]
  },
  {
    id: 'kounoupia',
    title: 'Κουνούπια',
    icon: Droplets,
    color: 'bg-purple-500',
    description: 'Τα κουνούπια μπορούν να μεταδώσουν σοβαρές ασθένειες και είναι ιδιαίτερα ενεργά σε υγρά περιβάλλοντα.',
    healthRisks: [
      'Ελονοσία (μαλάρια): Σοβαρή ασθένεια από Anopheles',
      'Κίτρινος πυρετός: Μεταδίδεται από Aedes',
      'Εγκεφαλίτιδα: Σπάνια στην Ευρώπη αλλά επικίνδυνη',
      'Φιλαρίαση: Κυρίως σε τροπικές περιοχές'
    ],
    commonTypes: [
      {
        name: 'Ανωφελές Κουνούπι',
        scientific: 'Anopheles spp.',
        size: 'Σώμα και προβοσκίδα σε ευθεία γραμμή',
        color: 'Φτερά με χαρακτηριστικά στίγματα',
        characteristics: 'Κύριος φορέας ελονοσίας. Πιο ενεργό το βράδυ, προτιμά στάσιμα νερά.'
      },
      {
        name: 'Κοινό Κουνούπι',
        scientific: 'Culex pipiens',
        size: 'Προβοσκίδα στραμμένη προς τα κάτω',
        color: 'Φτερά ομοιόμορφα χωρίς στίγματα',
        characteristics: 'Αναπαράγεται σε μολυσμένα νερά. Ενοχλητικό σε αστικές περιοχές.'
      },
      {
        name: 'Κουνούπι-Τίγρης',
        scientific: 'Aedes albopictus',
        size: 'Ασημένιο σχέδιο στον μαύρο θώρακα',
        color: 'Μαύρο με λευκές λωρίδες',
        characteristics: 'Μεταδίδει κίτρινο πυρετό, Zika, Chikungunya. Ενεργό τη μέρα.'
      }
    ],
    whereFound: [
      'Στάσιμα νερά: λίμνες, έλη, ορυζώνες',
      'Πιατάκια γλαστρών και δοχεία νερού',
      'Παλιά λάστιχα και δεξαμενές βρόχινου νερού',
      'Διακοσμητικές λίμνες και συντριβάνια',
      'Υγρές περιοχές με πυκνή βλάστηση'
    ],
    prevention: [
      'Απομάκρυνση στάσιμων νερών από γλάστρες και δοχεία',
      'Κάλυψη δεξαμενών με σίτες ή καπάκια',
      'Διατήρηση καθαρών κήπων χωρίς πυκνή βλάστηση',
      'Τοποθέτηση σιτών σε παράθυρα και πόρτες',
      'Χρήση απωθητικών σε εξωτερικούς χώρους'
    ],
    treatment: [
      'Υπολειμματικός ψεκασμός σε κήπους και βεράντες',
      'Νεφελοψεκασμός για μεγάλες εκτάσεις',
      'Παγίδες κουνουπιών με ελκυστικά',
      'Βιολογικά σκευάσματα για προνύμφες σε νερά',
      'Περιμετρική προστασία χώρων'
    ]
  }
]

const additionalServices = [
  {
    title: 'Απολύμανση',
    description: 'Εξουδετέρωση επιβλαβών μικροοργανισμών σε σπίτια και επιχειρήσεις',
    icon: Shield,
    methods: ['Ψεκασμός υψηλής πίεσης', 'Νεφελοψεκασμός', 'Απολυμαντικά με υπεροξείδιο', 'Υπεριώδης απολύμανση']
  },
  {
    title: 'Αποστείρωση',
    description: '100% εξάλειψη μικροοργανισμών για εξειδικευμένους χώρους',
    icon: Zap,
    methods: ['Θερμική αποστείρωση', 'Χημική αποστείρωση', 'Αποστείρωση με όζον', 'Ακτινοβολία UV-C']
  }
]

export default function Encyclopedia() {
  const [selectedPest, setSelectedPest] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>('overview')

  const selectedPestData = pestCategories.find(pest => pest.id === selectedPest)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Εγκυκλοπαίδεια Παρασίτων
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              Ολοκληρωμένος οδηγός για τα κυριότερα παράσιτα, τους κινδύνους που εγκυμονούν και τις μεθόδους αντιμετώπισης
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Bug className="h-4 w-4" />
                <span>6 Κύριες Κατηγορίες</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="h-4 w-4" />
                <span>Μέθοδοι Πρόληψης</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Zap className="h-4 w-4" />
                <span>Επαγγελματική Αντιμετώπιση</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          {!selectedPest ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Pest Categories Grid */}
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Κύρια Κατηγορίες Παρασίτων
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Κάντε κλικ σε μια κατηγορία για να δείτε λεπτομερείς πληροφορίες
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pestCategories.map((category, index) => (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      onClick={() => setSelectedPest(category.id)}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-105"
                    >
                      <div className={`${category.color} p-6 text-white`}>
                        <div className="flex items-center justify-between mb-4">
                          <div></div>
                          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                        <p className="text-sm opacity-90 line-clamp-2">{category.description}</p>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>{category.commonTypes.length} Είδη</span>
                          <span>{category.healthRisks.length} Κίνδυνοι</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{category.healthRisks[0]}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Eye className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{category.commonTypes[0].name}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Additional Services */}
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Επιπλέον Υπηρεσίες
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Ολοκληρωμένες λύσεις για την προστασία του χώρου σας
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  {additionalServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center mb-6">
                        <div className="h-12 w-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mr-4">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {service.methods.map((method, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{method}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedPest(null)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
              >
                <ChevronRight className="h-5 w-5 rotate-180" />
                <span>Επιστροφή στις κατηγορίες</span>
              </button>

              {selectedPestData && (
                <div>
                  {/* Header */}
                  <div className={`${selectedPestData.color} rounded-2xl p-8 text-white mb-8`}>
                    <div className="mb-4">
                      <h1 className="text-3xl md:text-4xl font-bold">{selectedPestData.title}</h1>
                      <p className="text-lg opacity-90 mt-2">{selectedPestData.description}</p>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
                    {[
                      { id: 'overview', label: 'Επισκόπηση', icon: Info },
                      { id: 'types', label: 'Είδη', icon: Bug },
                      { id: 'risks', label: 'Κίνδυνοι', icon: AlertTriangle },
                      { id: 'prevention', label: 'Πρόληψη', icon: Shield },
                      { id: 'treatment', label: 'Αντιμετώπιση', icon: Zap }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg font-medium transition-colors ${
                          activeTab === tab.id
                            ? 'bg-white text-gray-900 border-b-2 border-green-500'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <tab.icon className="h-4 w-4" />
                        <span>{tab.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <AnimatePresence mode="wait">
                      {activeTab === 'overview' && (
                        <motion.div
                          key="overview"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">Γενικές Πληροφορίες</h3>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <Home className="h-5 w-5 text-blue-500 mr-2" />
                                Πού Εμφανίζονται
                              </h4>
                              <ul className="space-y-2">
                                {selectedPestData.whereFound.map((location, idx) => (
                                  <li key={idx} className="flex items-start text-gray-600">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                    <span>{location}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <Clock className="h-5 w-5 text-green-500 mr-2" />
                                Βασικά Χαρακτηριστικά
                              </h4>
                              <div className="space-y-4">
                                <div className="bg-gray-50 rounded-lg p-4">
                                  <p className="text-gray-700">{selectedPestData.description}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-center">
                                  <div className="bg-blue-50 rounded-lg p-3">
                                    <div className="text-2xl font-bold text-blue-600">{selectedPestData.commonTypes.length}</div>
                                    <div className="text-sm text-gray-600">Κύρια Είδη</div>
                                  </div>
                                  <div className="bg-red-50 rounded-lg p-3">
                                    <div className="text-2xl font-bold text-red-600">{selectedPestData.healthRisks.length}</div>
                                    <div className="text-sm text-gray-600">Κίνδυνοι Υγείας</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'types' && (
                        <motion.div
                          key="types"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">Κύρια Είδη</h3>
                          <div className="space-y-6">
                            {selectedPestData.commonTypes.map((type, idx) => (
                              <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                  <div>
                                    <h4 className="text-xl font-semibold text-gray-900">{type.name}</h4>
                                    <p className="text-sm text-gray-500 italic">{type.scientific}</p>
                                  </div>
                                  <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                      {type.size}
                                    </span>
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                      {type.color}
                                    </span>
                                  </div>
                                </div>
                                <p className="text-gray-700">{type.characteristics}</p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'risks' && (
                        <motion.div
                          key="risks"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">Κίνδυνοι για την Υγεία</h3>
                          <div className="grid gap-4">
                            {selectedPestData.healthRisks.map((risk, idx) => (
                              <div key={idx} className="flex items-start bg-red-50 border border-red-200 rounded-lg p-4">
                                <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="text-gray-800 font-medium">{risk}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                            <h4 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center">
                              <AlertTriangle className="h-5 w-5 mr-2" />
                              Σημαντική Σημείωση
                            </h4>
                            <p className="text-yellow-700">
                              Αν αντιμετωπίζετε πρόβλημα με {selectedPestData.title.toLowerCase()}, επικοινωνήστε άμεσα με επαγγελματίες για ασφαλή και αποτελεσματική αντιμετώπιση.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'prevention' && (
                        <motion.div
                          key="prevention"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">Μέτρα Πρόληψης</h3>
                          <div className="grid gap-4">
                            {selectedPestData.prevention.map((measure, idx) => (
                              <div key={idx} className="flex items-start bg-green-50 border border-green-200 rounded-lg p-4">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-800">{measure}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h4 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                              <Info className="h-5 w-5 mr-2" />
                              Συμβουλή Ειδικών
                            </h4>
                            <p className="text-blue-700">
                              Η πρόληψη είναι πάντα πιο αποτελεσματική και οικονομική από την αντιμετώπιση. Εφαρμόστε αυτά τα μέτρα τακτικά για βέλτιστα αποτελέσματα.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'treatment' && (
                        <motion.div
                          key="treatment"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">Επαγγελματική Αντιμετώπιση</h3>
                          <div className="grid gap-4">
                            {selectedPestData.treatment.map((method, idx) => (
                              <div key={idx} className="flex items-start bg-purple-50 border border-purple-200 rounded-lg p-4">
                                <Zap className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-800">{method}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                            <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                              <Shield className="h-5 w-5 mr-2" />
                              Γιατί να Επιλέξετε Επαγγελματίες;
                            </h4>
                            <ul className="space-y-2 text-green-700">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                                <span>Εγκεκριμένα και ασφαλή προϊόντα</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                                <span>Στοχευμένη και αποτελεσματική εφαρμογή</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                                <span>Μακροχρόνια προστασία και εγγύηση</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                                <span>Ασφάλεια για οικογένεια και κατοικίδια</span>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Χρειάζεστε Επαγγελματική Βοήθεια;
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Οι πιστοποιημένοι ειδικοί μας είναι έτοιμοι να σας βοηθήσουν με οποιοδήποτε πρόβλημα παρασίτων
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                <span>Επικοινωνήστε Μαζί Μας</span>
                <ChevronRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="tel:94300800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors duration-200"
              >
                <span>94 300 800</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}