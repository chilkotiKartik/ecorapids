export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'mentor';
  badges: string[];
  points: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'workshop' | 'cleanup' | 'plantation' | 'webinar';
  location: string;
  capacity: number;
  participants: string[];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  category: 'environment' | 'education' | 'technology';
  duration: number; // in days
  participants: string[];
}