import { create } from 'zustand';
import { Event } from '../types/events';
import Amapiano2 from '../assets/Amapiano 2.jpg';
import Launch from '../assets/launch1.jpg';
import Tumbler from '../assets/tumbler.png';
import Gitwe from '../assets/Gitwe.jpg';
import Kiangai from '../assets/Kiangai.jpg';
import Bikers from '../assets/Bikers.png';

interface EventStore {
  events: Event[];
  getFilteredEvents: (category: string) => Event[];
  getFeaturedEvents: () => Event[];
  getPastEvents: () => Event[];
  getUpcomingEvents: () => Event[];
}

export const useEventStore = create<EventStore>((set, get) => ({
  events: [
    {
      id: 1,
      title: "Graduation After Party - Amapiano Night",
      date: "Oct 09, 2025",
      time: "6:00 PM till dawn",
      location: "Sifa Gardens, Kutus",
      attendees: "2,000+",
      image: Amapiano2,
      category: "Concert",
      description: "Join us for the Amapiano Graduation After Party, featuring top DJs, live performances, and an unforgettable night of music and dance as we celebrate the class of 2025.",
      status: "featured"
    },
    {
      id: 2,
      title: "Seroxide Entertainment Launching Event",
      date: "April 19, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Sifa Gardens, Kutus",
      attendees: "500+",
      image: Launch,
      category: "Launch Event",
      description: "Seroxide Entertainment launch was vibrant and with unforgettable performances and immersive energy which culminated to Tumbler Fest.",
      status: "Past"
    },
    {
      id: 3,
      title: "Tumbler Fest - Music & Culture Festival",
      date: "April 19, 2024",
      time: "6:00 PM to dawn",
      location: "Sifa Gardens, Kutus",
      attendees: "1,000+",
      image: Tumbler,
      category: "Concert",
      description: "Every April, Tumbler Fest celebrates Kenyan music and culture with a series of concerts featuring top artists.",
      status: "Past"
    },
    {
      id: 4,
      title: "School Drive",
      date: "May 31, 2024",
      time: "3PM",
      location: "Gitwe Secondary School",
      attendees: "500+",
      image: Gitwe,
      category: "School Tour",
      description: "A fun and engaging school empowerment program for students, featuring workshops, mentorship, and entertainment.",
      status: "Past"
    },
    {
      id: 5,
      title: "School Drive",
      date: "June 06, 2024",
      time: "3PM",
      location: "Kiangai Secondary School",
      attendees: "300+",
      image: Kiangai,
      category: "School Tour",
      description: "A fun and engaging school empowerment program for students, featuring workshops, mentorship, and entertainment.",
      status: "Past"
    },
    {
      id: 6,
      title: "Community Outreach Program",
      date: "July 16, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Kutus Social Hall",
      attendees: "100+",
      image: Bikers,
      category: "Community Drive",
      description: "A community outreach program aimed at empowering local youth and bodaboda operators through education and mentorship.",
      status: "Past"
    }
  ],
  
  getFilteredEvents: (category: string) => {
    const { events } = get();
    if (category === "All Events") {
      return events;
    }
    
    const categoryMap = {
      "Concerts": "Concert",
      "School Tours": "School Tour",
      "Community Drives": "Community Drive",
      "Tours & Travel": "Tours & Travel"
    };
    
    return events.filter(event => 
      event.category === categoryMap[category as keyof typeof categoryMap]
    );
  },

  getFeaturedEvents: () => {
    const { events } = get();
    return events.filter(event => event.status === 'featured');
  },

  getPastEvents: () => {
    const { events } = get();
    return events.filter(event => event.status === 'Past');
  },

  getUpcomingEvents: () => {
    const { events } = get();
    return events.filter(event => event.status === 'upcoming' || event.status === 'featured');
  }
}));