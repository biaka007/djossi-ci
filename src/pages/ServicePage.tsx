import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Shield, Clock, Users } from 'lucide-react';
import { services } from '../data/services';

const ServicePage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service non trouvé</h1>
          <Link to="/" className="text-orange-600 hover:text-orange-700">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const mockProfessionals = [
    {
      id: '1',
      name: 'Dr. Kouadio Marie',
      rating: 4.9,
      reviews: 127,
      price: '25,000 FCFA',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg',
      verified: true,
      location: 'Cocody, Abidjan',
      specialties: ['Consultation générale', 'Urgences']
    },
    {
      id: '2',
      name: 'Maître Yao Jean',
      rating: 4.8,
      reviews: 89,
      price: '50,000 FCFA',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg',
      verified: true,
      location: 'Plateau, Abidjan',
      specialties: ['Droit des affaires', 'Immobilier']
    },
    {
      id: '3',
      name: 'Koffi Michel',
      rating: 4.7,
      reviews: 156,
      price: '15,000 FCFA',
      image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg',
      verified: true,
      location: 'Marcory, Abidjan',
      specialties: ['Réparation auto', 'Diagnostic']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.name}</h1>
            <p className="text-xl md:text-2xl mb-6 max-w-2xl">{service.detailedDescription}</p>
            <Link
              to={`/request/${service.id}`}
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center"
            >
              Demander un service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 py-4">
            <a href="#benefits" className="text-orange-600 font-medium border-b-2 border-orange-600 pb-2">
              Avantages
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-orange-600 transition-colors">
              Comment ça marche
            </a>
            <a href="#professionals" className="text-gray-600 hover:text-orange-600 transition-colors">
              Professionnels
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Avantages */}
        <section id="benefits" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pourquoi choisir nos {service.name.toLowerCase()} ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Système de vérification */}
        <section className="mb-16 bg-gradient-to-r from-orange-50 to-green-50 p-8 rounded-xl">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">
              Système de Vérification de Confiance Certifié Djossi
            </h2>
          </div>
          <p className="text-gray-700 mb-6">
            Tous nos professionnels en {service.name.toLowerCase()} passent par notre processus rigoureux de vérification :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🆔</div>
              <div className="font-semibold text-sm">Identité Vérifiée</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">📋</div>
              <div className="font-semibold text-sm">Casier Judiciaire</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🎓</div>
              <div className="font-semibold text-sm">Diplômes Validés</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">✅</div>
              <div className="font-semibold text-sm">Références Contrôlées</div>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section id="how-it-works" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 text-white text-lg font-bold rounded-full mb-4">
                  {index + 1}
                </div>
                <p className="text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Professionnels recommandés */}
        <section id="professionals" className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Professionnels recommandés</h2>
            <Link to="/search" className="text-orange-600 hover:text-orange-700 font-medium">
              Voir tous les professionnels →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockProfessionals.map((pro) => (
              <div key={pro.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={pro.image}
                    alt={pro.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold text-gray-900">{pro.name}</h3>
                      {pro.verified && (
                        <Shield className="h-4 w-4 text-green-500 ml-2" title="Vérifié Djossi" />
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span>{pro.rating} ({pro.reviews} avis)</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">📍 {pro.location}</div>
                  <div className="flex flex-wrap gap-2">
                    {pro.specialties.slice(0, 2).map((specialty, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-orange-600">{pro.price}</div>
                  <Link
                    to={`/request/${service.id}`}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
                  >
                    Contacter
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-orange-600 to-green-600 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Prêt à bénéficier de nos {service.name.toLowerCase()} ?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Décrivez votre besoin et recevez des propositions de professionnels vérifiés
          </p>
          <Link
            to={`/request/${service.id}`}
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Demander un devis gratuit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;