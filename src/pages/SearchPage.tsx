import React, { useState } from 'react';
import { Search, MapPin, Filter, Star, Shield } from 'lucide-react';
import { services } from '../data/services';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const mockProfessionals = [
    {
      id: '1',
      name: 'Dr. Kouadio Marie',
      service: 'Services Médicaux',
      rating: 4.9,
      reviews: 127,
      price: '25,000 FCFA',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg',
      verified: true,
      location: 'Cocody, Abidjan',
      specialties: ['Consultation générale', 'Urgences', 'Pédiatrie'],
      description: 'Médecin généraliste avec 15 ans d\'expérience, spécialisée dans les consultations à domicile.',
      availability: 'Disponible aujourd\'hui'
    },
    {
      id: '2',
      name: 'Maître Yao Jean',
      service: 'Services Juridiques',
      rating: 4.8,
      reviews: 89,
      price: '50,000 FCFA',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg',
      verified: true,
      location: 'Plateau, Abidjan',
      specialties: ['Droit des affaires', 'Immobilier', 'Contrats'],
      description: 'Avocat spécialisé en droit des affaires avec une expertise reconnue.',
      availability: 'Disponible demain'
    },
    {
      id: '3',
      name: 'Koffi Michel',
      service: 'Services Mécaniques',
      rating: 4.7,
      reviews: 156,
      price: '15,000 FCFA',
      image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg',
      verified: true,
      location: 'Marcory, Abidjan',
      specialties: ['Réparation auto', 'Diagnostic', 'Entretien'],
      description: 'Mécanicien professionnel avec atelier équipé, intervention rapide.',
      availability: 'Disponible maintenant'
    },
    {
      id: '4',
      name: 'Traoré Fatou',
      service: 'Services de Nettoyage',
      rating: 4.9,
      reviews: 203,
      price: '12,000 FCFA',
      image: 'https://images.pexels.com/photos/4099269/pexels-photo-4099269.jpeg',
      verified: true,
      location: 'Yopougon, Abidjan',
      specialties: ['Nettoyage domicile', 'Bureaux', 'Désinfection'],
      description: 'Équipe de nettoyage professionnelle, produits écologiques disponibles.',
      availability: 'Disponible cette semaine'
    }
  ];

  const filteredProfessionals = mockProfessionals.filter(professional => {
    const matchesSearch = searchQuery === '' || 
      professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesService = selectedService === '' || professional.service === selectedService;
    const matchesLocation = location === '' || professional.location.toLowerCase().includes(location.toLowerCase());
    
    return matchesSearch && matchesService && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header de recherche */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Rechercher un professionnel</h1>
          
          {/* Barre de recherche principale */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un service, un professionnel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Localisation"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full lg:w-64 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filtres</span>
            </button>
          </div>

          {/* Filtres avancés */}
          {showFilters && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie de service</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Toutes les catégories</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.name}>{service.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Tous les budgets</option>
                  <option value="0-20000">Moins de 20,000 FCFA</option>
                  <option value="20000-50000">20,000 - 50,000 FCFA</option>
                  <option value="50000+">Plus de 50,000 FCFA</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Disponibilité</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500">
                  <option value="">Toute disponibilité</option>
                  <option value="today">Aujourd'hui</option>
                  <option value="week">Cette semaine</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Résultats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            {filteredProfessionals.length} professionnels trouvés
          </h2>
          <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500">
            <option>Trier par pertinence</option>
            <option>Note la plus élevée</option>
            <option>Prix croissant</option>
            <option>Prix décroissant</option>
            <option>Proximité</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProfessionals.map((professional) => (
            <div key={professional.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{professional.name}</h3>
                      {professional.verified && (
                        <Shield className="h-4 w-4 text-green-500" title="Vérifié Djossi" />
                      )}
                    </div>
                    <p className="text-sm text-orange-600 font-medium mb-1">{professional.service}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{professional.rating}</span>
                      <span>({professional.reviews} avis)</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{professional.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{professional.location}</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    {professional.availability}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {professional.specialties.slice(0, 3).map((specialty, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold text-orange-600">
                      À partir de {professional.price}
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                        Voir profil
                      </button>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                        Contacter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProfessionals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun professionnel trouvé</h3>
            <p className="text-gray-600 mb-4">
              Essayez de modifier vos critères de recherche ou explorez d'autres catégories.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedService('');
                setLocation('');
                setPriceRange('');
              }}
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;