import React from "react";
import { getFoldersWithCoverImages } from "@/lib/cloudinary";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function Page() {
  const baseFolder = "dreamToApp/worksample"; // Base folder containing subfolders
  const folders = await getFoldersWithCoverImages(baseFolder);

  if (!folders.length) {
    return <p className="text-center text-gray-500">No folders found.</p>;
  }

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {folders.map((folder) => (
        <Card
          key={folder.folderName}
          className="relative group shadow-lg hover:shadow-xl transition-shadow"
        >
          <CardHeader className="p-0">
            <div className="relative w-full h-64 overflow-hidden rounded-t-xl bg-gray-100">
              {folder.coverImage ? (
                <Image
                  src={folder.coverImage.secure_url} // Cover image URL
                  alt={`Cover for ${folder.folderName}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="/placeholder.png" // Replace with a generated placeholder if needed
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-500">
                  No Image
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-bold text-lg sm:text-xl">
                  {folder.itemCount} items
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center p-4">
            <Link
              href={`?folderName=${encodeURIComponent(folder.folderName)}`}
              className="text-blue-500 hover:underline text-sm mt-2"
            >
              View Gallery
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
