export interface Service {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  backgroundImage: string;
  icon: string;
  benefits: string[];
  howItWorks: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  type: 'client' | 'professional';
  verified?: boolean;
  location?: string;
}

export interface Professional extends User {
  type: 'professional';
  services: string[];
  rating: number;
  reviewCount: number;
  certifications: string[];
  portfolio: string[];
  hourlyRate: number;
  availability: boolean;
  djossiVerified: boolean;
  verificationBadges: VerificationBadge[];
}

export interface VerificationBadge {
  type: 'identity' | 'criminal_record' | 'diploma' | 'reference';
  verified: boolean;
  verifiedDate?: string;
}

export interface ServiceRequest {
  id: string;
  clientId: string;
  professionalId?: string;
  serviceId: string;
  title: string;
  description: string;
  images?: string[];
  location: string;
  budget: number;
  status: 'pending' | 'quoted' | 'accepted' | 'in_progress' | 'completed' | 'cancelled';
  createdAt: string;
  scheduledDate?: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
  requestId?: string;
}

export interface Review {
  id: string;
  clientId: string;
  professionalId: string;
  requestId: string;
  rating: number;
  comment: string;
  createdAt: string;
}