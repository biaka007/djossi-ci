import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold text-orange-500">DJOSSI</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              La plateforme de confiance qui connecte les Ivoiriens avec des professionnels 
              qualifiés et vérifiés. Votre sécurité et satisfaction sont notre priorité.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/service/juridique" className="text-gray-300 hover:text-white transition-colors">Services Juridiques</Link></li>
              <li><Link to="/service/medical" className="text-gray-300 hover:text-white transition-colors">Services Médicaux</Link></li>
              <li><Link to="/service/psychologue" className="text-gray-300 hover:text-white transition-colors">Psychologie</Link></li>
              <li><Link to="/service/mecanique" className="text-gray-300 hover:text-white transition-colors">Mécanique</Link></li>
              <li><Link to="/service/plomberie" className="text-gray-300 hover:text-white transition-colors">Plomberie</Link></li>
              <li><Link to="/service/nettoyage" className="text-gray-300 hover:text-white transition-colors">Nettoyage</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">Abidjan, Côte d'Ivoire</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">+225 07 07 84 18 44</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span className="text-gray-300">contact@djossi.ci</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Djossi. BIAKA corp - TECHive group Tous droits réservés. | 
            <Link to="/support" className="text-green-500 hover:text-green-400 ml-2">
              Politique de Confidentialité
            </Link> | 
            <Link to="/support" className="text-green-500 hover:text-green-400 ml-2">
              Conditions d'Utilisation
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;