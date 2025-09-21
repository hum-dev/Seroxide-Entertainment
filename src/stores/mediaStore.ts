import { create } from "zustand";
import amapiano from "../assets/Amapiano.jpg";
import djSetup from "../assets/Dj-Setup.jpg";
import festivalConcerts from "../assets/festivalconcerts.jpg";
import services from "../assets/services.jpg";

export interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  category: string;
  title: string;
  description: string;
  videoUrl?: string;
  thumbnail?: string;
}

interface MediaStore {
  gallery: {
    images: {
      concerts: GalleryItem[];
      schoolTours: GalleryItem[];
      socialEvents: GalleryItem[];
    };
    videos: GalleryItem[];
  };
  setGalleryItems: (items: GalleryItem[]) => void;
  addGalleryItem: (item: GalleryItem) => void;
  removeGalleryItem: (id: number) => void;
}

export const useMediaStore = create<MediaStore>((set) => ({
  gallery: {
    images: {
      concerts: [
        {
          id: 1,
          type: "image",
          src: amapiano,
          title: "Amapiano Festival",
          description: "Amazing crowd energy at our Amapiano festival",
          category: "Concerts",
        },
        {
          id: 2,
          type: "image",
          src: djSetup,
          title: "DJ Night Setup",
          description: "Professional DJ setup for an unforgettable night",
          category: "Concerts",
        },
        {
          id: 3,
          type: "image",
          src: festivalConcerts,
          title: "Festival Concerts",
          description: "Vibrant atmosphere at our festival concerts",
          category: "Concerts",
        },
      ],
      schoolTours: [],
      socialEvents: [],
    },
    videos: [
      {
        id: 4,
        type: "video",
        src: "video-thumb1.jpg",
        title: "Event Highlights Reel",
        description: "Best moments from our recent events",
        category: "Concerts",
        videoUrl: "https://www.youtube.com/embed/your-video-id",
      },
    ],
  },
  setGalleryItems: (items) =>
    set((state) => ({
      gallery: {
        ...state.gallery,
        allItems: items,
      },
    })),
  addGalleryItem: (item) =>
    set((state) => {
      if (item.type === "video") {
        return {
          gallery: {
            ...state.gallery,
            videos: [...state.gallery.videos, item],
          },
        };
      }
      return {
        gallery: {
          ...state.gallery,
          images: {
            ...state.gallery.images,
            [item.category.toLowerCase()]: [
              ...(state.gallery.images[
                item.category.toLowerCase() as keyof typeof state.gallery.images
              ] || []),
              item,
            ],
          },
        },
      };
    }),
  removeGalleryItem: (id) =>
    set((state) => ({
      gallery: {
        ...state.gallery,
        videos: state.gallery.videos.filter((item) => item.id !== id),
        images: {
          concerts: state.gallery.images.concerts.filter(
            (item) => item.id !== id
          ),
          schoolTours: state.gallery.images.schoolTours.filter(
            (item) => item.id !== id
          ),
          socialEvents: state.gallery.images.socialEvents.filter(
            (item) => item.id !== id
          ),
        },
      },
    })),
}));
