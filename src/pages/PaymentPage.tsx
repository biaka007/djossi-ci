import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Shield, ArrowLeft, Check } from 'lucide-react';

const PaymentPage: React.FC = () => {
  const { requestId } = useParams<{ requestId: string }>();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const mockService = {
    title: 'Réparation plomberie salle de bain',
    professional: 'Kouadio Marcel',
    amount: 45000,
    commission: 4500,
    total: 49500
  };

  const paymentMethods = [
    {
      id: 'mtn',
      name: 'MTN Mobile Money',
      icon: '📱',
      description: 'Paiement sécurisé via MTN MoMo',
      color: 'border-yellow-400'
    },
    {
      id: 'orange',
      name: 'Orange Money',
      icon: '🧡',
      description: 'Paiement sécurisé via Orange Money',
      color: 'border-orange-400'
    },
    {
      id: 'moov',
      name: 'Moov Money',
      icon: '🔵',
      description: 'Paiement sécurisé via Moov Money',
      color: 'border-blue-400'
    },
    {
      id: 'wave',
      name: 'Wave',
      icon: '💜',
      description: 'Paiement sécurisé via Wave',
      color: 'border-purple-400'
    },
    {
      id: 'card',
      name: 'Carte bancaire',
      icon: '💳',
      description: 'Visa, Mastercard acceptées',
      color: 'border-gray-400'
    }
  ];

  const handlePayment = async () => {
    if (!selectedMethod) return;

    setIsProcessing(true);
    
    // Simulation du processus de paiement
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setIsCompleted(true);
    
    // Redirection après 2 secondes vers les messages
    setTimeout(() => {
      navigate('/messages');
    }, 2000);
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-md w-full mx-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Paiement réussi !</h1>
          <p className="text-gray-600 mb-6">
            Votre paiement a été traité avec succès. Le professionnel va être notifié.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="text-sm text-gray-600">Montant payé</div>
            <div className="text-2xl font-bold text-green-600">{mockService.total.toLocaleString()} FCFA</div>
          </div>
          <p className="text-sm text-gray-500">
            Redirection automatique vers vos messages...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Paiement sécurisé</h1>
            <p className="text-gray-600">Finalisez votre commande de service</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Résumé de la commande */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Résumé de la commande</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">{mockService.title}</h3>
                  <p className="text-sm text-gray-600">Professionnel: {mockService.professional}</p>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service</span>
                    <span className="font-medium">{mockService.amount.toLocaleString()} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Commission Djossi (10%)</span>
                    <span className="font-medium">{mockService.commission.toLocaleString()} FCFA</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-2">
                    <span>Total</span>
                    <span>{mockService.total.toLocaleString()} FCFA</span>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-800">Paiement protégé</span>
                  </div>
                  <p className="text-xs text-green-700 mt-1">
                    Votre argent est sécurisé jusqu'à la fin du service
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Moyens de paiement */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Choisissez votre moyen de paiement</h2>
              
              <div className="space-y-4 mb-8">
                {paymentMethods.map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      selectedMethod === method.id
                        ? `${method.color} bg-orange-50`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={selectedMethod === method.id}
                      onChange={(e) => setSelectedMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="text-2xl">{method.icon}</div>
                      <div>
                        <div className="font-medium text-gray-900">{method.name}</div>
                        <div className="text-sm text-gray-600">{method.description}</div>
                      </div>
                    </div>
                    {selectedMethod === method.id && (
                      <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </label>
                ))}
              </div>

              {/* Formulaire de paiement */}
              {selectedMethod && selectedMethod !== 'card' && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-gray-900 mb-4">
                    Informations {paymentMethods.find(m => m.id === selectedMethod)?.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Numéro de téléphone
                      </label>
                      <input
                        type="tel"
                        placeholder="+225 XX XX XX XX XX"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Code de confirmation
                      </label>
                      <input
                        type="text"
                        placeholder="Code reçu par SMS"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {selectedMethod === 'card' && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-gray-900 mb-4">Informations de carte</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Numéro de carte
                      </label>
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date d'expiration
                        </label>
                        <input
                          type="text"
                          placeholder="MM/AA"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVC
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bouton de paiement */}
              <button
                onClick={handlePayment}
                disabled={!selectedMethod || isProcessing}
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Traitement en cours...
                  </>
                ) : (
                  `Payer ${mockService.total.toLocaleString()} FCFA`
                )}
              </button>

              <div className="mt-4 text-center text-sm text-gray-600">
                <p>🔒 Paiement sécurisé SSL. Vos données sont protégées.</p>
                <p className="mt-2">
                  En effectuant ce paiement, vous acceptez nos{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-700">conditions d'utilisation</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;