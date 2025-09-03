// src/hooks/useMedia.js
import { useEffect, useState } from "react";

export function useMedia(interval = 10000) {
  const images = Object.values(
    import.meta.glob("../assets/media/*.{jpg,jpeg,png}", { eager: true })
  ).map((m) => ({ type: "image", src: m.default }));

  const videos = Object.values(
    import.meta.glob("../assets/media/*.{mp4,webm}", { eager: true })
  ).map((m) => ({ type: "video", src: m.default }));

  const media = [...images, ...videos];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (media.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % media.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, media.length]);

  return media[index] || null;
}
