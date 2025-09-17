export interface TicketTier {
  type: 'regular' | 'vip';
  price: number;
  description?: string;
  perks?: string[];
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  image: string;
  category: string;
  description: string;
  status: 'featured' | 'upcoming' | 'Past';
  tickets: TicketTier[];
  rating?: number;
  reviews?: number;
  organizer?: string;
  tags?: string[];
}

export interface EventCategory {
  name: string;
  count: number;
}

export type CategoryMap = {
  [key: string]: string;
}

export const categoryMap: CategoryMap = {
  "Concerts": "Concert",
  "School Tours": "School Tour",
  "Community Drives": "Community Drive",
  "Tours & Travel": "Tours & Travel",
  "Launch Events": "Launch Event"
};