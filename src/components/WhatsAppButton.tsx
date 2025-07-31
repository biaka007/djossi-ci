import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);
  const whatsappNumber = '+524443113785';

  const handleSendMessage = () => {
    const message = encodeURIComponent('Bonjour! J\'aimerais en savoir plus sur les services Djossi.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showOptions && (
        <div className="mb-4 bg-white rounded-lg shadow-xl border p-4 min-w-[250px]">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900">Contactez-nous</h3>
            <button
              onClick={() => setShowOptions(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-2">
            <button
              onClick={handleSendMessage}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-green-50 rounded-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium text-gray-900">Envoyer un message</div>
                <div className="text-sm text-gray-500">WhatsApp</div>
              </div>
            </button>
            <button
              onClick={handleCall}
              className="w-full flex items-center space-x-3 p-3 text-left hover:bg-green-50 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium text-gray-900">Appeler</div>
                <div className="text-sm text-gray-500">via WhatsApp</div>
              </div>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setShowOptions(!showOptions)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Contact WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default WhatsAppButton;