import React, { useState, useEffect } from "react";
import { X, Play, Instagram, Facebook, MessageCircle } from "lucide-react";
import { MediaErrorBoundary } from "./ui/media-error-boundary";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Import images
import KaribuCampus from "../assets/Karibucampus1.jpg";
import djSetup from "../assets/Dj-Setup.jpg";
import festivalConcerts from "../assets/festivalconcerts.jpg";
import services from "../assets/services.jpg";
import Sneakers from "../assets/Sneakers.jpg";
import Gitwe from "../assets/Gitwe.jpg";
import Kiangai from "../assets/Kiangai.jpg";
import Bikers from "../assets/Bikers.png";
import AmapianoCrowd from "../assets/Amapiano Crowd.jpg";
import fathermoh from "../assets/Fathermoh.jpg";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  category: string;
  title: string;
  description: string;
  videoUrl?: string;
  thumbnail?: string;
}

const GallerySection = () => {
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState("All");
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loadedItems, setLoadedItems] = useState<number>(12);

  const loadMore = () => setLoadedItems((prev) => prev + 12);

  // Image and video configuration with useMemo to prevent unnecessary recalculations
  const imageConfig = React.useMemo(
    () => ({
      concerts: [
        {
          filename: KaribuCampus,
          title: "Karibu Campus 2.0",
          description: "Amazing crowd energy at our Karibu Campus 2.0 event",
        },
        {
          filename: djSetup,
          title: "DJ Night Setup",
          description: "Professional DJ setup for an unforgettable night",
        },
        {
          filename: Sneakers,
          title: "Sneakers & Jersey",
          description: "Vibrant atmosphere at our Sneakers & Jersey event",
        },
        {
          filename: AmapianoCrowd,
          title: "Amapiano Crowd",
          description: "Energetic performances at our Amapiano Crowd event",
        },
        {
          filename: fathermoh,
          title: "Father Moh Performance",
          description: "Captivating performance by Father Moh at our event",
        },
        // Add more...
      ],
      "school-tours": [
        {
          filename: Gitwe,
          title: "School drive at Gitwe",
          description: "Vibrant students at our School drive at Gitwe event",
        },
        {
          filename: Kiangai,
          title: "School drive at Kiangai",
          description: "Excited students at our School drive at Kiangai event",
        },
        // Add more...
      ],
      "brand-activations": [
        // {
        //   filename: "brand1.jpg",
        //   title: "Brand Launch Event",
        //   description: "Successful brand activation at Westgate Mall",
        // },
        // {
        //   filename: "brand2.jpg",
        //   title: "Product Launch",
        //   description: "Creative brand activation for new product launch",
        // },
        // Add more...
      ],
      "corporate-events": [
        // {
        //   filename: "corporate1.jpg",
        //   title: "Corporate Conference",
        //   description: "Professional event management for tech conference",
        // },
        // Add more...
      ],
      "social-events": [
        {
          filename: Bikers,
          title: "Bikers Event",
          description: "Exciting moments from our Bikers event",
        },
        // Add more...
      ],
    }),
    []
  );

  // Video configuration
  const videoConfig = React.useMemo(
    () => [
      {
        thumbnail: "video-thumb1.jpg",
        title: "Event Highlights Reel",
        description: "Best moments from our recent events",
        category: "Concerts",
        videoUrl:
          "https://www.instagram.com/reel/C8WdYCjATBc/?igsh=MXY5dTYydzR3OHQ4NA==",
      },
      // Add more videos...
    ],
    []
  );

  useEffect(() => {
    // Generate gallery items from configuration
    const items: GalleryItem[] = [];
    let id = 1;

    // Add images
    Object.entries(imageConfig).forEach(([category, images]) => {
      images.forEach((image) => {
        items.push({
          id: id++,
          type: "image",
          src: image.filename, // Using the filename directly since it's imported
          category: category
            .replace("-", " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()),
          title: image.title,
          description: image.description,
        });
      });
    });

    // Add videos
    videoConfig.forEach((video) => {
      items.push({
        id: id++,
        type: "video",
        src: `/images/gallery/thumbnails/${video.thumbnail}`,
        category: video.category,
        title: video.title,
        description: video.description,
        videoUrl: video.videoUrl,
      });
    });

    setGalleryItems(items);
  }, [imageConfig, videoConfig]);

  const categories = [
    "All",
    "Concerts",
    "School Tours",
    "Brand Activations",
    "Corporate Events",
    "Social Events",
  ];

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-primary/5 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-anton font-bold text-gradient mb-6">
            OUR GALLERY
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of our amazing events and the unforgettable
            memories we've created
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "hero" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="hover-scale"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 mb-8 [column-fill:_balance] px-4">
          {filteredItems.slice(0, loadedItems).map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl hover-lift break-inside-avoid mb-6 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2 hover:rotate-1 will-change-transform perspective-1000"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="relative">
                <MediaErrorBoundary>
                  <LazyLoadImage
                    src={item.src}
                    alt={item.title}
                    effect="blur"
                    className="w-full h-auto aspect-[3/4] object-cover transition-all duration-500 group-hover:scale-110 will-change-transform"
                    wrapperClassName="w-full h-full"
                    threshold={300}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                      target.classList.add("error-image");
                    }}
                  />
                </MediaErrorBoundary>

                {/* Video Play Button */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )}

                {/* Enhanced Overlay with Blur Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-0">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <h3 className="font-oswald font-semibold text-white text-base mb-2 line-clamp-1 drop-shadow-md">
                      {item.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-primary/80 backdrop-blur-md rounded-full text-white text-xs font-semibold shadow-lg">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {loadedItems < filteredItems.length && (
          <div className="flex justify-center mb-16">
            <Button
              onClick={loadMore}
              variant="outline"
              className="px-8 py-2 hover:scale-105 transition-transform"
            >
              Load More
            </Button>
          </div>
        )}

        {/* Image Counter */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Showing {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "item" : "items"}
            {filter !== "All" && ` in ${filter}`}
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-anton font-bold mb-4">
            Want to See More?
          </h3>
          <p className="text-muted-foreground mb-8">
            Follow us on social media for the latest updates and
            behind-the-scenes content
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() =>
                window.open(
                  "https://instagram.com/seroxideentertainment",
                  "_blank"
                )
              }
              className="flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open(
                  "https://tiktok.com/@seroxideentertainment",
                  "_blank"
                )
              }
              className="flex items-center gap-2"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z" />
              </svg>
              TikTok
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open(
                  "https://facebook.com/seroxideentertainment",
                  "_blank"
                )
              }
              className="flex items-center gap-2"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open(
                  "https://whatsapp.com/channel/0029VapOXm30AgW36TBdsU2N",
                  "_blank"
                )
              }
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Channel
            </Button>
          </div>
        </div>
      </div>

      {/* Media Modal */}
      <Dialog
        open={!!selectedMedia}
        onOpenChange={() => setSelectedMedia(null)}
      >
        <DialogContent className="sm:max-w-[85vw] md:max-w-[500px] lg:max-w-[600px] max-h-[75vh] p-0 bg-background/90">
          <div className="relative flex flex-col h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-50 rounded-full w-8 h-8 bg-background/80 hover:bg-primary/20 backdrop-blur-sm shadow-md"
              onClick={() => setSelectedMedia(null)}
            >
              <X className="h-3.5 w-3.5" />
            </Button>

            <div className="flex-1 overflow-hidden p-3">
              {selectedMedia?.type === "video" ? (
                <div className="aspect-video bg-black rounded-lg overflow-hidden shadow relative group">
                  <MediaErrorBoundary>
                    <LazyLoadImage
                      src={selectedMedia?.thumbnail || selectedMedia?.src}
                      alt={selectedMedia?.title}
                      effect="blur"
                      className="w-full h-full object-cover"
                      wrapperClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                    <iframe
                      src={selectedMedia?.videoUrl}
                      className="w-full h-full absolute inset-0"
                      allowFullScreen
                      title={selectedMedia?.title}
                    />
                  </MediaErrorBoundary>
                </div>
              ) : (
                <div className="flex items-center justify-center bg-black/5 rounded-lg overflow-hidden h-[300px]">
                  <img
                    src={selectedMedia?.src}
                    alt={selectedMedia?.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.log("Failed to load:", target.src);
                      target.src = services;
                    }}
                  />
                </div>
              )}

              <div className="mt-3 space-y-2 bg-background/60 backdrop-blur-[2px] rounded-lg p-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-base leading-tight">
                    {selectedMedia?.title}
                  </h3>
                  <span className="inline-flex items-center px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    {selectedMedia?.category}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedMedia?.description}
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
