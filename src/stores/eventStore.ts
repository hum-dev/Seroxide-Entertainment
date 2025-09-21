import { create } from 'zustand';
import { Event } from '../types/events';
import Amapiano2 from '../assets/Amapiano 2.jpg';
import Launch from '../assets/launch1.jpg';
import Tumbler from '../assets/tumbler.png';
import Gitwe from '../assets/Gitwe.jpg';
import Kiangai from '../assets/Kiangai.jpg';
import Bikers from '../assets/Bikers.png';
import Sneakers from '../assets/Sneakers&Jersey.png';
import Karibu from '../assets/Karibu Campus.png';
import Amapiano from '../assets/Amapiano.jpg';
import Anniversary from '../assets/Anniversary.jpg';

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
       
      ],
      rating: 5.0,
      reviews: 78
    },
    {
      id: 7,
      title: "Sneakers & Jersey",
      date: "Jul 13, 2024",
      time: "5:00 PM till dawn",
      location: "Night Fall Park, Thika",
      attendees: "3,000+",
      image: Sneakers,
      category: "Concert",
      description: "This event fuses fashion and music, giving the spotlight to street style.",
      status: "Past",
      tickets: [
        {
          type: "regular",
          price: 1500,
          description: "Standard entry with access to all main performances"
        },
        { type: "vip",
          price: 3000,
          description: "VIP access with premium viewing area and complimentary drinks",
          perks: ["Premium viewing area", "Complimentary drinks", "VIP lounge access", "Reserved parking"]
        }
      ],
      rating: 4.6,
      reviews: 200
    },
    {
      id: 8,
      title: "Karibu Campus 1.0",
      date: "Aug 13, 2024",
      time: "6:00 PM till dawn",
      location: "Sifa Gardens, Kutus",
      attendees: "2000+",
      image: Karibu,
      category: "Concert",
      description: "An exciting concert event featuring top artists and a vibrant atmosphere.",
      status: "Past",
      tickets: [
        {
          type: "regular",
          price: 2000,
          description: "General admission ticket"
        },
        {
          type: "vip",
          price: 4000,
          description: "VIP ticket with exclusive access"
        }
      ],
      rating: 4.9,
      reviews: 150
    },
    {
      id: 9,
      title: "Graduation After Party - Amapiano Night",
      date: "Sep 27, 2024",
      time: "6:00 PM till dawn",
      location: "Sifa Gardens, Kutus",
      attendees: "2,000+",
      image: Amapiano,
      category: "Concert",
      description: "A graduation after party featuring Amapiano music, celebrating the achievements of graduates.",
      status: "Past",
      tickets: [
        {
          type: "regular",
          price: 2000,
          description: "General admission ticket"
        },
        {
          type: "vip",
          price: 4000,
          description: "VIP ticket with exclusive access"
        }
      ],
      rating: 4.9,
      reviews: 150
    },
    //Anniversary Event
    {
      id: 10,
      title: "Seroxide Entertainment Anniversary Gala",
      date: "Apr 17, 2025",
      time: "7:00 PM till dawn",
      location: "Sifa Gardens, Kutus",
      attendees: "2000+",
      image: Anniversary,
      category: "Concert",
      description: "Celebrate Seroxide Entertainment's anniversary with a glamorous gala featuring live music, gourmet dining, and special performances.",
      status: "Past",
      tickets: [
        {
          type: "regular",
          price: 5000,
          description: "Standard entry to the anniversary gala"
        },
        {
          type: "vip",
          price: 10000,
          description: "VIP access with exclusive perks",
          perks: ["Front-row seating", "Meet & greet with performers", "Gourmet dinner", "Commemorative gift"]
        }
      ],
      rating: 4.9,
      reviews: 85
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