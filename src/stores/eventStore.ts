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
      status: "featured",
      tickets: [
        {
          type: "regular",
          price: 2500,
          description: "Standard entry with access to all main performances"
        },
        {
          type: "vip",
          price: 5000,
          description: "VIP access with premium viewing area and complimentary drinks",
          perks: ["Premium viewing area", "Complimentary drinks", "VIP lounge access", "Reserved parking"]
        }
      ],
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      title: "Seroxide Entertainment Launching Event",
      date: "April 19, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Sifa Gardens, Kutus",
      attendees: "500+",
      image: Launch,
      category: "Concert",
      description: "Seroxide Entertainment launch was vibrant and with unforgettable performances and immersive energy which culminated to Tumbler Fest.",
      status: "Past",
      tickets: [
        {
          type: "regular",
          price: 3000,
          description: "Standard entry to the launch event"
        },
        {
          type: "vip",
          price: 6000,
          description: "VIP access with exclusive networking opportunities",
          perks: ["Exclusive networking session", "Premium seating", "Gift bag", "Reserved parking"]
        }
      ],
      rating: 4.9,
      reviews: 89
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
      status: "Past",
      tickets: [
        {
          type: "regular",
          price: 2500,
          description: "General festival access"
        },
        {
          type: "vip",
          price: 5000,
          description: "VIP festival experience with exclusive perks",
          perks: ["VIP stage viewing", "Meet & greet passes", "Festival merchandise", "VIP refreshments"]
        }
      ],
      rating: 4.7,
      reviews: 120
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
      status: "Past",
      tickets: [
        {
          type: "regular",
          price: 1500,
          description: "Standard workshop access"
        },
        {
          type: "vip",
          price: 3000,
          description: "Enhanced workshop experience",
          perks: ["One-on-one mentoring", "Workshop materials", "Certificate", "Lunch included"]
        }
      ],
      rating: 4.9,
      reviews: 45
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
      status: "Past",
      tickets: [
        {
          type: "regular",
          price: 1500,
          description: "Standard workshop access"
        },
        {
          type: "vip",
          price: 3000,
          description: "Enhanced workshop experience",
          perks: ["One-on-one mentoring", "Workshop materials", "Certificate", "Lunch included"]
        }
      ],
      rating: 4.8,
      reviews: 34
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
      status: "Past",
      tickets: [
        {
          type: "regular",
          price: 1000,
          description: "Basic program access"
        },
        {
          type: "vip",
          price: 2500,
          description: "Premium program experience",
          perks: ["Priority registration", "Extended mentorship", "Take-home materials", "Refreshments"]
        }
      ],
      rating: 5.0,
      reviews: 78
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