"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

type Step = {
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    title: "Tell us about your business",
    description: "Start by sharing your business details with us.",
  },
  {
    title: "Upload your documents",
    description: "Provide the necessary documentation for setup.",
  },
  {
    title: "We manage filings",
    description: "Our team handles compliance and paperwork.",
  },
  {
    title: "Receive your company",
    description: "Everything is done. You get your registered company.",
  },
];

export default function HowWeDoIt() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for vertical line fill
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-gray-900">
          Here’s How We Do It
        </h2>

        <div className="relative flex">
          {/* Vertical line */}
          <div className="relative w-1 bg-gray-200 rounded mr-8">
            <motion.div
              style={{ height: fillHeight }}
              className="absolute top-0 left-0 w-full bg-blue-600 rounded"
            />
          </div>

          {/* Steps */}
          <div className="flex-1 space-y-20">
            {steps.map((step, idx) => {
              const stepRef = useRef<HTMLDivElement>(null);
              const isInView = useInView(stepRef, { amount: 0.5, once: false });

              return (
                <motion.div
                  ref={stepRef}
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative"
                >
                  {/* Step dot */}
                  <span className="absolute -left-[2.1rem] top-1.5 flex h-4 w-4 items-center justify-center">
                    <motion.span
                      animate={{
                        backgroundColor: isInView ? "#2563eb" : "#ffffff", // blue-600 or white
                        borderColor: "#2563eb",
                      }}
                      transition={{ duration: 0.4 }}
                      className="h-4 w-4 rounded-full border-2"
                    />
                  </span>

                  {/* Step content */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
