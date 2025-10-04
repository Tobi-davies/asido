"use client";

import { yearlyHighlights } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// export default function DividerFill() {
//   const ref = useRef(null);

//   // Track scroll progress relative to THIS divider section
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//     // "start end" → when top of target hits bottom of viewport = 0
//     // "end start" → when bottom of target hits top of viewport = 1
//   });

//   // Map progress to height
//   const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   return (
//     <div className="flex justify-center items-center h-[400px]">
//       {/* Base divider (gray) */}
//       <div
//         ref={ref}
//         className="relative min-h-[200px] w-2 bg-gray-300 rounded overflow-hidden"
//       >
//         {/* Filling color (blue), grows TOP → BOTTOM */}
//         <motion.div
//           style={{ height: fillHeight }}
//           className="absolute top-0 left-0 w-full bg-blue-600"
//         />
//       </div>
//     </div>
//   );
// }

export default function Timeline() {
  const ref = useRef(null);

  //helps track scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    // "start end" → when top of target hits bottom of viewport = 0
    // "end start" → when bottom of target hits top of viewport = 1
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="max-w-[1440px] w-full mx-auto px-[18px] md:px-10 xl:px-20 pt-[200px]">
      <h3 className="text-dark-500 text-[36px] font-bold text-center leading-[130%]">
        Since inception in 2019, Asido Foundation has led bold advocacy for
        mental health reforms. These range from public awareness campaigns to
        the passing of the 2021 Mental Health Act.
      </h3>

      {/* <div
        ref={ref}
        className="relative min-h-[74px] w-[3px] mx-auto bg-[#E7E9F5] rounded overflow-hidden mt-15"
      >
        <motion.div
          style={{ height: fillHeight }}
          className="absolute top-0 left-0 w-full bg-blue-500"
        />
      </div> */}

      <div className="w-full border border-red-500 mt-12 relative">
        <div
          ref={ref}
          className="absolute left-[10px] lg:left-[50%] lg:right-[50%] w-[3px] self-stretch bg-red-500 h-full"
        >
          <motion.div
            style={{ height: fillHeight }}
            className="absolute top-0 left-0 w-full bg-blue-500"
          />
        </div>
        {yearlyHighlights.map((highlight, index) => {
          // This maps colors to global classes
          const colorMap: Record<string, string> = {
            cyan: "text-cyan-500",
            golden: "text-golden-500",
            red: "text-red-500",
            "light-cyan": "text-cyan-300",
          };

          const textColor = colorMap[highlight.color] || "text-grey-500";

          return (
            <div
              className={`flex lg:justify-between w-full gap-5 w-full h-full
            ${index % 2 === 1 ? "lg:flex-row-reverse" : "flex-row"} `}
            >
              {/* first section */}
              <div className="max-w-[600px] lg:w-full"></div>

              {/* DIVIDER */}
              <div className="hidden lg:flex flex-col items-center bg-red-500">
                {/* NODE */}
                {highlight?.year && (
                  <div
                    // ref={ref}
                    className="relative w-6 h-6 bg-[#E7E9F5] rounded-full overflow-hidden"
                  >
                    {/* <div className="absolute top-0 left-0 w-full bg-blue-500 transition-all duration-700 ease-in-out"></div> */}
                    {/* <motion.div
                      style={{ height: dividerHeight }}
                      className="absolute top-0 left-0 w-full bg-blue-500"
                    /> */}
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="max-w-[600px] w-full pb-[70px] md:pb-[100px]">
                <motion.span
                  initial={{ y: 70, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 0.7 }}
                  className="block font-extrabold text-[24px] md:text-[39px] leading-[130%] tracking-[0] text-blue-500 mb-8"
                >
                  {highlight?.year && highlight?.year}
                </motion.span>

                <motion.h4
                  initial={{ y: 70, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 0.7 }}
                  className={`font-semibold text-base md:text-2xl leading-[140%] mb-3 ${textColor}`}
                >
                  {highlight?.title}
                </motion.h4>

                <motion.p
                  initial={{ y: 70, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 0.7 }}
                  className="text-[20px] md:text-[25px] leading-[130%] font-bold text-dark-500"
                >
                  {" "}
                  {highlight?.intro && highlight?.intro}
                </motion.p>
                {highlight.image && (
                  <motion.div
                    initial={{ scale: 1, opacity: 1 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: "easeOut", duration: 0.7 }}
                    className="w-full overflow-hidden rounded-lg mt-8"
                  >
                    {/* <Image
                    src={highlight.image}
                    alt={highlight.title}
                    className="object-cover object-center"
                    width={400}
                    height={400}
                  /> */}
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      width={600}
                      height={400}
                      className="w-full max-w-[600px] h-auto object-contain"
                    />
                  </motion.div>
                )}

                {highlight.readMore && (
                  <span className="text-blue-500 hover:underline block mt-[30px]">
                    <a
                      href="#"
                      className="text-base font-bold inline-flex items-center gap-4 focus:outline-none"
                    >
                      LEARN MORE{" "}
                      <Image
                        src="/read-more.svg"
                        alt="read more"
                        width={6}
                        height={14}
                      />
                    </a>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
