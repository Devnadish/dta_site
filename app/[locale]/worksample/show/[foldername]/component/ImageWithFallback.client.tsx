"use client"; // Mark this as a Client Component

import Image from "next/image";
import { useState } from "react";
import Resize from "./Resize";

interface ImageType {
  public_id: string;
  optimized_url: string;
}

export default function ImageWithFallback({ image }: { image: ImageType }) {
  const [hasError, setHasError] = useState(false);
  const [reloadCount, setReloadCount] = useState(0); // Use a counter instead of a boolean

  const handleError = () => {
    setHasError(true);
  };

  const handleReload = () => {
    setHasError(false);
    setReloadCount((prev) => prev + 1); // Increment the counter to force re-render
  };

  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="relative w-full pb-[100%] rounded-2xl overflow-hidden shadow-md group">
          {hasError ? (
            <Image
              src="/assets/logo.webp" // Replace with your fallback image path
              alt="Fallback Image"
              fill
              className="absolute inset-0 w-full -z-1 h-full object-contain rounded-2xl"
              loading="lazy"
            />
          ) : (
            <Image
              // src="/fallback-image.jpg" // Append a query parameter to force re-fetch
              src={`${image.optimized_url}?reload=${reloadCount}`} // Append a query parameter to force re-fetch
              alt={image.public_id}
              fill
              className="absolute inset-0 w-full -z-1 h-full object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={handleError}
              key={image.public_id} // Use a unique key for the Image component
            />
          )}
        </div>
        {hasError && (
          <button
            onClick={handleReload}
            className="absolute bottom-1 left-2 mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reload Image
          </button>
        )}
        <div className="absolute top-0 left-0 w-full flex items-center justify-center h-full">
          <Resize image={`${image.optimized_url}?reload=${reloadCount}`} />
        </div>
      </div>
    </>
  );
}
