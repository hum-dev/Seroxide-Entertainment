export const generateVideoThumbnail = async (videoUrl: string) => {
  // For YouTube videos
  if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
    const videoId = videoUrl.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    )?.[1];
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
  }

  // For Instagram videos
  if (videoUrl.includes("instagram.com")) {
    try {
      const response = await fetch(
        `https://graph.facebook.com/v12.0/instagram_oembed?url=${encodeURIComponent(
          videoUrl
        )}&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
      );
      const data = await response.json();
      return data.thumbnail_url;
    } catch (error) {
      console.error("Error getting Instagram thumbnail:", error);
    }
  }

  // For other video types, you might want to use a default thumbnail
  return "/images/video-thumbnail-placeholder.jpg";
};
