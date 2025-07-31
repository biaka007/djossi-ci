import React, { useState } from 'react';
import { Search, Send, Phone, Video, MoreVertical, Star, Shield } from 'lucide-react';

const MessagesPage: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState('1');
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: '1',
      professionalName: 'Dr. Kouadio Marie',
      service: 'Services Médicaux',
      avatar: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg',
      lastMessage: 'Je peux vous recevoir demain à 14h pour la consultation.',
      timestamp: '14:30',
      unread: 2,
      verified: true,
      rating: 4.9
    },
    {
      id: '2',
      professionalName: 'Maître Yao Jean',
      service: 'Services Juridiques',
      avatar: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg',
      lastMessage: 'J\'ai préparé le contrat selon vos spécifications. Pouvons-nous programmer un rendez-vous ?',
      timestamp: '12:15',
      unread: 0,
      verified: true,
      rating: 4.8
    },
    {
      id: '3',
      professionalName: 'Koffi Michel',
      service: 'Services Mécaniques',
      avatar: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg',
      lastMessage: 'Le diagnostic est terminé. Je vous envoie le devis dans quelques minutes.',
      timestamp: '11:45',
      unread: 1,
      verified: true,
      rating: 4.7
    }
  ];

  const messages = {
    '1': [
      {
        id: '1',
        senderId: 'professional',
        content: 'Bonjour ! J\'ai bien reçu votre demande de consultation médicale. Pouvez-vous me préciser vos symptômes ?',
        timestamp: '14:00',
        read: true
      },
      {
        id: '2',
        senderId: 'user',
        content: 'Bonjour docteur. J\'ai des maux de tête récurrents depuis une semaine et de la fatigue.',
        timestamp: '14:05',
        read: true
      },
      {
        id: '3',
        senderId: 'professional',
        content: 'Je comprends. Ces symptômes nécessitent un examen. Je peux vous recevoir demain à 14h pour la consultation.',
        timestamp: '14:30',
        read: false
      }
    ],
    '2': [
      {
        id: '1',
        senderId: 'professional',
        content: 'Bonjour, j\'ai examiné votre demande concernant la rédaction du contrat de bail. Avez-vous les documents du propriétaire ?',
        timestamp: '11:30',
        read: true
      },
      {
        id: '2',
        senderId: 'user',
        content: 'Oui, j\'ai tous les documents. Quand pouvons-nous nous rencontrer ?',
        timestamp: '12:00',
        read: true
      },
      {
        id: '3',
        senderId: 'professional',
        content: 'J\'ai préparé le contrat selon vos spécifications. Pouvons-nous programmer un rendez-vous ?',
        timestamp: '12:15',
        read: false
      }
    ],
    '3': [
      {
        id: '1',
        senderId: 'professional',
        content: 'Bonjour ! J\'ai pris connaissance du problème de votre véhicule. Je peux passer faire le diagnostic cet après-midi.',
        timestamp: '10:00',
        read: true
      },
      {
        id: '2',
        senderId: 'user',
        content: 'Parfait, je serai disponible à partir de 15h.',
        timestamp: '10:30',
        read: true
      },
      {
        id: '3',
        senderId: 'professional',
        content: 'Le diagnostic est terminé. Je vous envoie le devis dans quelques minutes.',
        timestamp: '11:45',
        read: false
      }
    ]
  };

  const currentConversation = conversations.find(c => c.id === selectedConversation);
  const currentMessages = messages[selectedConversation] || [];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Ici on enverrait le message au backend
      console.log('Nouveau message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Liste des conversations */}
      <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
        {/* Header des conversations */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900 mb-4">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une conversation..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Liste des conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedConversation === conversation.id ? 'bg-orange-50 border-l-4 border-l-orange-600' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={conversation.avatar}
                    alt={conversation.professionalName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {conversation.verified && (
                    <Shield className="absolute -bottom-1 -right-1 h-4 w-4 text-green-500 bg-white rounded-full" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-gray-900 truncate">
                      {conversation.professionalName}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {conversation.unread > 0 && (
                        <span className="bg-orange-600 text-white text-xs rounded-full px-2 py-0.5">
                          {conversation.unread}
                        </span>
                      )}
                      <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs text-orange-600 font-medium">{conversation.service}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-500">{conversation.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zone de conversation */}
      <div className="flex-1 flex flex-col">
        {currentConversation ? (
          <>
            {/* Header de la conversation */}
            <div className="bg-white p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={currentConversation.avatar}
                  alt={currentConversation.professionalName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="font-semibold text-gray-900">{currentConversation.professionalName}</h2>
                    {currentConversation.verified && (
                      <Shield className="h-4 w-4 text-green-500" title="Professionnel Vérifié" />
                    )}
                  </div>
                  <p className="text-sm text-orange-600">{currentConversation.service}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Phone className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Video className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-orange-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {currentMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.senderId === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.senderId === 'user'
                        ? 'bg-orange-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.senderId === 'user' ? 'text-orange-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Zone de saisie */}
            <form onSubmit={handleSendMessage} className="bg-white p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="bg-orange-600 text-white p-2 rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vos conversations</h3>
              <p className="text-gray-600">
                Sélectionnez une conversation pour commencer à discuter avec un professionnel.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;