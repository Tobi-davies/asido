// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const items = ["Row 1", "Row 2", "Row 3", "Row 4"];

// export default function ScrollTimelineFill() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Global scroll tracking on the whole section
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <section
//       ref={containerRef}
//       className="space-y-10 p-6 flex flex-col justify-center items-center pt-20"
//     >
//       {items.map((label, index) => {
//         // Divide scroll progress into equal segments per item
//         const start = index / items.length;
//         const end = (index + 1) / items.length;

//         // Interpolate only within this segment
//         const clipPath = useTransform(
//           scrollYProgress,
//           [start, end],
//           ["inset(0% 0 100% 0)", "inset(0% 0 0% 0)"],
//           { clamp: true } // don't bleed outside
//         );

//         return (
//           <div className="relative h-64 w-4 bg-gray-600">
//             <motion.div
//               key={label}
//               style={{ clipPath }}
//               className="absolute flex w-full h-full items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white shadow-lg"
//             >
//               {label}
//             </motion.div>
//           </div>
//         );
//       })}
//     </section>
//   );
// }

"use client";

import { yearlyHighlights } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ScrollTimelineFill() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Global scroll tracking on the whole section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  //   const dividerRef = useRef(null);

  //   const { scrollYProgress: dividerProgress } = useScroll({
  //     target: dividerRef,
  //     offset: ["start end", "end start"],
  //   });

  //   const dividerHeight = useTransform(dividerProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="max-w-[1440px] w-full mx-auto px-[18px] md:px-10 xl:px-20 pt-[200px] flex flex-col relative"
    >
      <div className="absolute w-[3px] self-stretch bg-red-500 h-full">kj</div>
      {yearlyHighlights.map((item, index) => {
        const total = yearlyHighlights.length;
        const start = index / total;
        const end = (index + 1) / total;

        // Animate background fill from top → bottom for this slice
        const clipPath = useTransform(
          scrollYProgress,
          [start, end],
          ["inset(0% 0 100% 0)", "inset(0% 0 0% 0)"],
          { clamp: true }
        );

        // Map color values to Tailwind classes
        const colorMap: Record<string, string> = {
          cyan: "text-cyan-500",
          golden: "text-golden-500",
          red: "text-red-500",
          "light-cyan": "text-cyan-300",
        };

        const textColor = colorMap[item.color] || "bg-slate-500";

        return (
          <div
            className={`flex justify-between w-full  gap-5 w-full h-full
      ${index % 2 === 1 ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* first section */}
            <div className="max-w-[600px] w-full"></div>
            {/* divider section */}
            <div className="self-stretch bg-[#E7E9F5] relative w-[3px] rounded">
              <motion.div
                key={index}
                style={{ clipPath }}
                className={`absolute top-0 left-0 flex h-full w-full rounded bg-blue-500`}
              ></motion.div>
            </div>
            {/* content section */}
            <div className="max-w-[600px] w-full">
              <motion.span
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: 0.7 }}
                className="block font-extrabold text-[39px] leading-[130%] tracking-[0] text-blue-500 mb-8"
              >
                {item?.year && item?.year}
              </motion.span>

              <motion.h4
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: 0.7 }}
                className={`font-semibold text-2xl leading-[140%] mb-3 ${textColor}`}
              >
                {item?.title}
              </motion.h4>

              <motion.p
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: "easeOut", duration: 0.7 }}
                className="text-[25px] leading-[130%] font-bold text-dark-500 mb-8"
              >
                {" "}
                {item?.intro && item?.intro}
              </motion.p>
              {item.image && (
                <motion.div
                  initial={{ scale: 1, opacity: 1 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeOut", duration: 0.7 }}
                  className="w-full overflow-hidden rounded-lg"
                >
                  {/* <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover object-center"
                    width={400}
                    height={400}
                  /> */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full max-w-[600px] h-auto object-contain"
                  />
                </motion.div>
              )}

              {item.readMore && (
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
    </section>
  );
}
