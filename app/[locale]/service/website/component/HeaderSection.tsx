"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CareerBlock = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Image animation
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const imageY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-5%"]);
  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0.7]);

  // Text animation
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.5], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Image Section */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            scale: imageScale,
            y: imageY,
            opacity: imageOpacity,
          }}
        >
          <img
            src="https://dynamicmedia.accenture.com/is/image/accenture/A1-A.com-Careers-Module-Image-1?qlt=85&ts=1737647450115&$1024-PNG$&qlt=25&dpr=off"
            alt="Careers"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="absolute inset-x-0 bottom-0 flex items-end justify-center"
          style={{
            opacity: textOpacity,
            y: textY,
          }}
        >
          <div className="bg-white bg-opacity-90 p-8 rounded-t-3xl shadow-xl w-full max-w-4xl mx-auto">
            <div className="max-w-2xl mx-auto">
              <span className="block text-[13px] uppercase tracking-[1.5px] text-accent-red mb-6 font-semibold">
                Careers
              </span>

              <h2 className="text-4xl leading-tight font-bold text-gray-900 mb-8">
                Grow your career at the
                <br />
                heart of change
              </h2>

              <p className="text-lg text-gray-600 mb-10">
                It's your time to shine. Bring your ingenuity, curiosity and big
                ideas.
              </p>

              <a
                href="/sa-en/careers"
                className="inline-flex items-center px-8 py-4 bg-accent-red hover:bg-[#BE1B1B] text-white rounded-full font-semibold transition-colors duration-300"
              >
                <span className="mr-2">Join us</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 5L12.5 10L7.5 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerBlock;
