"use client";

import { motion } from "framer-motion";
import { formatDate } from "@/content/galleries/utils";

interface CaptionOverlayProps {
  caption?: string;
  date?: string;
  location?: string;
  isVisible: boolean;
}

export default function CaptionOverlay({
  caption,
  date,
  location,
  isVisible,
}: CaptionOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 md:p-6 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto">
        {caption && (
          <p className="text-white text-sm md:text-base mb-2">{caption}</p>
        )}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/80 text-xs md:text-sm">
          {date && <span>{formatDate(date)}</span>}
          {location && <span>{location}</span>}
        </div>
      </div>
    </motion.div>
  );
}
