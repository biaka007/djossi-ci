import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'normal'
  });

  const faqCategories = [
    {
      id: 'general',
      name: 'Questions générales',
      questions: [
        {
          id: '1',
          question: 'Comment fonctionne Djossi ?',
          answer: 'Djossi est une plateforme qui connecte les clients avec des professionnels vérifiés. Vous décrivez votre besoin, recevez des propositions, choisissez votre professionnel et bénéficiez d\'un service de qualité.'
        },
        {
          id: '2',
          question: 'Qu\'est-ce que le Système de Vérification de Confiance Certifié Djossi ?',
          answer: 'C\'est notre processus rigoureux de vérification qui inclut le contrôle d\'identité, du casier judiciaire, des diplômes/certifications et des références de chaque professionnel pour garantir votre sécurité.'
        },
        {
          id: '3',
          question: 'Comment sont sélectionnés les professionnels ?',
          answer: 'Tous nos professionnels passent par un processus de vérification strict incluant la validation de leur identité, de leurs qualifications, de leur casier judiciaire et de leurs références clients.'
        }
      ]
    },
    {
      id: 'payment',
      name: 'Paiements',
      questions: [
        {
          id: '4',
          question: 'Quels moyens de paiement acceptez-vous ?',
          answer: 'Nous acceptons MTN Mobile Money, Orange Money, Moov Money, Wave et les cartes bancaires (Visa, Mastercard).'
        },
        {
          id: '5',
          question: 'Quand dois-je payer ?',
          answer: 'Le paiement s\'effectue après la réalisation du service et votre validation. Votre argent est sécurisé jusqu\'à la fin de la prestation.'
        },
        {
          id: '6',
          question: 'Y a-t-il des frais supplémentaires ?',
          answer: 'Djossi prend une commission de 10% sur le montant du service pour assurer le fonctionnement de la plateforme et les vérifications.'
        }
      ]
    },
    {
      id: 'professional',
      name: 'Pour les professionnels',
      questions: [
        {
          id: '7',
          question: 'Comment devenir professionnel sur Djossi ?',
          answer: 'Inscrivez-vous en tant que professionnel, soumettez vos documents pour la vérification Djossi, et une fois approuvé, commencez à recevoir des demandes de clients.'
        },
        {
          id: '8',
          question: 'Combien coûte l\'inscription ?',
          answer: 'L\'inscription et la vérification sont gratuites. Djossi prend uniquement une commission sur les services réalisés.'
        },
        {
          id: '9',
          question: 'Comment recevoir plus de demandes ?',
          answer: 'Maintenez un profil complet, des photos de qualité, des tarifs compétitifs et de bons avis clients pour augmenter votre visibilité.'
        }
      ]
    }
  ];

  const toggleFaq = (questionId: string) => {
    setExpandedFaq(expandedFaq === questionId ? null : questionId);
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support request:', supportForm);
    // Ici on enverrait la demande au backend
    alert('Votre demande a été envoyée ! Nous vous répondrons dans les plus brefs délais.');
    setSupportForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      priority: 'normal'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Centre d'aide Djossi
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous sommes là pour vous aider. Trouvez des réponses à vos questions ou contactez-nous.
          </p>
        </div>

        {/* Contact rapide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 text-sm mb-4">Chat en direct avec notre équipe</p>
            <a
              href="https://wa.me/524443113785"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Ouvrir WhatsApp
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
            <p className="text-gray-600 text-sm mb-4">Lun-Ven 8h-18h, Sam 9h-15h</p>
            <a
              href="tel:+2250707841844"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              +225 07 07 84 18 44
            </a>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm mb-4">Réponse sous 24h</p>
            <a
              href="mailto:contact@djossi.ci"
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              contact@djossi.ci
            </a>
          </div>
        </div>

        {/* Onglets */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'faq', name: 'FAQ', icon: '❓' },
                { id: 'contact', name: 'Nous contacter', icon: '💬' },
                { id: 'policies', name: 'Politiques', icon: '📜' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'faq' && (
              <div>
                <div className="mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Rechercher dans la FAQ..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="space-y-8">
                  {faqCategories.map((category) => (
                    <div key={category.id}>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        {category.name}
                      </h2>
                      <div className="space-y-2">
                        {category.questions.map((faq) => (
                          <div key={faq.id} className="border border-gray-200 rounded-lg">
                            <button
                              onClick={() => toggleFaq(faq.id)}
                              className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                              <span className="font-medium text-gray-900">{faq.question}</span>
                              {expandedFaq === faq.id ? (
                                <ChevronUp className="h-5 w-5 text-gray-500" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-500" />
                              )}
                            </button>
                            {expandedFaq === faq.id && (
                              <div className="px-4 pb-4 text-gray-600">
                                {faq.answer}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="max-w-2xl">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Formulaire de contact
                </h2>
                <form onSubmit={handleSupportSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={supportForm.name}
                        onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={supportForm.email}
                        onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      required
                      value={supportForm.subject}
                      onChange={(e) => setSupportForm({...supportForm, subject: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priorité
                    </label>
                    <select
                      value={supportForm.priority}
                      onChange={(e) => setSupportForm({...supportForm, priority: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="low">Faible</option>
                      <option value="normal">Normale</option>
                      <option value="high">Élevée</option>
                      <option value="urgent">Urgente</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={supportForm.message}
                      onChange={(e) => setSupportForm({...supportForm, message: e.target.value})}
                      placeholder="Décrivez votre problème ou votre question en détail..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'policies' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Politique de confidentialité
                  </h2>
                  <div className="prose text-gray-600">
                    <p className="mb-4">
                      Chez Djossi, nous nous engageons à protéger vos données personnelles. 
                      Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
                    </p>
                    <h3 className="font-semibold text-gray-900 mt-6 mb-2">Collecte des données</h3>
                    <p className="mb-4">
                      Nous collectons uniquement les informations nécessaires au fonctionnement de notre service :
                      nom, email, téléphone, localisation et informations de service.
                    </p>
                    <h3 className="font-semibold text-gray-900 mt-6 mb-2">Utilisation des données</h3>
                    <p className="mb-4">
                      Vos données sont utilisées pour vous mettre en relation avec des professionnels, 
                      traiter les paiements et améliorer nos services.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Conditions d'utilisation
                  </h2>
                  <div className="prose text-gray-600">
                    <p className="mb-4">
                      En utilisant Djossi, vous acceptez nos conditions d'utilisation qui régissent 
                      l'accès et l'usage de notre plateforme.
                    </p>
                    <h3 className="font-semibold text-gray-900 mt-6 mb-2">Responsabilités des utilisateurs</h3>
                    <p className="mb-4">
                      Les utilisateurs s'engagent à fournir des informations exactes et à utiliser 
                      la plateforme de manière respectueuse et conforme à la loi.
                    </p>
                    <h3 className="font-semibold text-gray-900 mt-6 mb-2">Garanties et limitations</h3>
                    <p className="mb-4">
                      Djossi facilite la mise en relation mais n'est pas responsable des services 
                      fournis par les professionnels. Nous nous efforçons de vérifier nos partenaires.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;