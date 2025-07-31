import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Star, Users, CheckCircle, MessageCircle } from 'lucide-react';
import { services } from '../data/services';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge de vérification */}
            <div className="inline-flex items-center bg-green-900/30 border border-green-600/30 text-green-400 px-4 py-2 rounded-full mb-8">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Système de Vérification de Confiance Certifié Djossi</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-green-400">
              DJOSSI
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-gray-300">
              La première plateforme de services professionnels certifiés en Côte d'Ivoire.
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-400">
              Connectez-vous avec des experts vérifiés pour tous vos besoins.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/search"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                Commencer maintenant
              </Link>
              <button
                onClick={() => {
                  const message = encodeURIComponent('Bonjour! J\'aimerais en savoir plus sur les services Djossi.');
                  window.open(`https://wa.me/+5244431137845?text=${message}`, '_blank');
                }}
                className="border-2 border-green-600 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contacter par WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi Choisir Djossi */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-6">
              <Shield className="h-8 w-8 text-green-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Pourquoi Choisir Djossi ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-600/20 rounded-full mb-4">
                <Shield className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">🔒 Sécurité Garantie</h3>
              <p className="text-gray-400">
                Tous nos professionnels passent par un processus de vérification rigoureux
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-600/20 rounded-full mb-4">
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">⚡ Service Rapide</h3>
              <p className="text-gray-400">
                Trouvez et contactez des experts en quelques clics
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-full mb-4">
                <CheckCircle className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">💎 Qualité Certifiée</h3>
              <p className="text-gray-400">
                Seuls les professionnels les plus qualifiés rejoignent notre plateforme
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nos Services Certifiés
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300"
              >
                <div
                  className="h-48 bg-cover bg-center opacity-30"
                  style={{ backgroundImage: `url(${service.backgroundImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/50 to-transparent"></div>
                </div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <Link
                    to={`/service/${service.id}`}
                    className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors text-center"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-green-400">2,500+</div>
              <div className="text-xl text-gray-300">Professionnels Vérifiés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-green-400">15,000+</div>
              <div className="text-xl text-gray-300">Services Réalisés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-green-400">4.9/5</div>
              <div className="text-xl text-gray-300">Satisfaction Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-400">
              Simple, rapide et sécurisé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Décrivez votre besoin',
                description: 'Expliquez ce dont vous avez besoin avec détails et photos si nécessaire'
              },
              {
                step: '2',
                title: 'Recevez des propositions',
                description: 'Des professionnels vérifiés vous envoient leurs devis personnalisés'
              },
              {
                step: '3',
                title: 'Choisissez votre expert',
                description: 'Comparez les profils, avis et tarifs pour faire le meilleur choix'
              },
              {
                step: '4',
                title: 'Service réalisé',
                description: 'Profitez d\'un service de qualité et laissez votre avis'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white text-xl font-bold rounded-full mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Mariam Koné',
                service: 'Nettoyage',
                rating: 5,
                comment: 'Service exceptionnel ! L\'équipe était ponctuelle et très professionnelle. Je recommande vivement Djossi.'
              },
              {
                name: 'Yves Kouassi',
                service: 'Mécanique',
                rating: 5,
                comment: 'Mon véhicule a été réparé rapidement et à un prix très correct. La vérification Djossi me donne confiance.'
              },
              {
                name: 'Aya Traoré',
                service: 'Services Juridiques',
                rating: 5,
                comment: 'L\'avocat trouvé via Djossi m\'a parfaitement accompagnée. Process de vérification rassurant.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à trouver votre professionnel de confiance ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers d'Ivoiriens qui font confiance à Djossi
          </p>
          <Link
            to="/search"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Commencer maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;