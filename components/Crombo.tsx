import Image from "next/image";
import React from "react";

function Crombo() {
  return (
    <div className="relative flex items-center justify-center size-10">
      <Image
        src={"/assets/crombo.png"}
        alt="crombo"
        fill
        loading="eager"
        priority
        className="object-contain" // Prevents stretching
      />
    </div>
  );
}

export default Crombo;
