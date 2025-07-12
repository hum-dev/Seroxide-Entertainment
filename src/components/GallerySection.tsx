import { useState } from "react";
import { X, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  category: string;
  title: string;
  description: string;
  videoUrl?: string;
}
const GallerySection = () => {
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState("All");

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: "image",
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Concerts",
      title: "Youth Music Festival",
      description: "Amazing crowd energy at our annual youth festival"
    },
    {
      id: 2,
      type: "image", 
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "School Tours",
      title: "School Motivation Talk",
      description: "Inspiring students at Nairobi High School"
    },
    {
      id: 3,
      type: "video",
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Brand Activations",
      title: "Brand Launch Event",
      description: "Successful brand activation at Westgate Mall",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 4,
      type: "image",
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Concerts",
      title: "DJ Night",
      description: "Electric atmosphere at our weekend concert"
    },
    {
      id: 5,
      type: "image",
      src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Corporate Events",
      title: "Corporate Conference",
      description: "Professional event management for tech conference"
    },
    {
      id: 6,
      type: "image",
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Social Events",
      title: "Wedding Celebration",
      description: "Beautiful wedding celebration we organized"
    },
    {
      id: 7,
      type: "video",
      src: "https://images.unsplash.com/photo-1549451371-64aa98a6f632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "School Tours",
      title: "Interactive School Session",
      description: "Engaging students through interactive entertainment",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      id: 8,
      type: "image",
      src: "https://images.unsplash.com/photo-1571266028243-d220c0e92733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      category: "Brand Activations",
      title: "Product Launch",
      description: "Creative brand activation for new product launch"
    }
  ];

  const categories = ["All", "Concerts", "School Tours", "Brand Activations", "Corporate Events", "Social Events"];

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-anton font-bold text-gradient mb-6">
            OUR GALLERY
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of our amazing events and the unforgettable memories we've created
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl hover-lift card-shadow"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="aspect-square relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Video Play Button */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-montserrat font-semibold text-white text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {item.description}
                    </p>
                    <span className="inline-block mt-2 px-2 py-1 bg-primary rounded-full text-white text-xs">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-anton font-bold mb-4">Want to See More?</h3>
          <p className="text-muted-foreground mb-8">
            Follow us on social media for the latest updates and behind-the-scenes content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Follow on Instagram
            </Button>
            <Button variant="outline" size="xl">
              Subscribe to YouTube
            </Button>
          </div>
        </div>
      </div>

      {/* Media Modal */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-anton">
              {selectedMedia?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="p-6">
            {selectedMedia?.type === "video" ? (
              <div className="aspect-video">
                <iframe
                  src={selectedMedia.videoUrl}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                  title={selectedMedia.title}
                />
              </div>
            ) : (
              <img
                src={selectedMedia?.src}
                alt={selectedMedia?.title}
                className="w-full max-h-[60vh] object-contain rounded-lg"
              />
            )}
            
            <div className="mt-4">
              <p className="text-muted-foreground mb-2">{selectedMedia?.description}</p>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {selectedMedia?.category}
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;