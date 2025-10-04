"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { posts } from "@/data";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StayInformed() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Scroll function
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  // Update arrow visibility
  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  return (
    // INFORMATION SECTION
    <section className="max-w-[1440px] w-full mx-auto flex flex-col pt-15 pb-15 lg:pb-30 px-[18px] md:px-10 xl:px-20 border border-blue-500">
      <h4 className="text-sm sm:text-2xl font-semibold text-cyan-500 mb-2 sm:mb-5">
        Stay Informed
      </h4>
      <p className="text-[18px] sm:text-3xl font-bold text-dark-500 mb-10 xl:mb-15">
        Through advocacy, education, and support, we’re building a stigma-free
        future for mental health in Nigeria.
      </p>

      <div className="xl:px-12 lg:grid lg:grid-cols-3 gap-5 hidden">
        {/* POST GRID */}
        {posts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white transition overflow-hidden cursor-pointer"
          >
            <Image
              src={post.img}
              alt={post.title}
              width={380}
              height={380}
              className="w-full object-cover"
            />
            <div className="pt-[30px] pb-5 min-h-[250px] flex flex-col justify-between">
              <p className="text-[25px] text-dark-500 font-bold mb-5">
                {post.title}
              </p>
              <span className="text-blue-500 hover:underline block">
                <a
                  href={post.link}
                  className="text-base font-bold inline-flex items-center gap-4 focus:outline-none"
                >
                  READ MORE{" "}
                  <Image
                    src="/read-more.svg"
                    alt="read more"
                    width={7}
                    height={15}
                  />
                </a>
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Scroll posts with nav arrows */}
      <div className="relative lg:hidden">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="absolute left-0 top-[110px] -translate-y-1/2 z-10 bg-white shadow rounded-full w-8 h-8 flex justify-center items-center"
          >
            <ChevronLeft className="w-5 h-5" color="#354E70" />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="absolute right-0 top-[110px] -translate-y-1/2 z-10 bg-white shadow rounded-full w-8 h-8 flex justify-center items-center"
          >
            <ChevronRight className="w-5 h-5" color="#354E70" />
          </button>
        )}

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white transition min-w-[190px] sm:min-w-[280px] snap-center"
            >
              <Image
                src={post.img}
                alt={post.title}
                width={190}
                height={190}
                className="w-full object-cover"
              />
              <div className="pt-4 pb-2 min-h-[155px] flex flex-col justify-between">
                <p className="text-[15px] text-dark-500 font-bold mb-1">
                  {post.title}
                </p>

                <span className="text-blue-500 hover:underline block">
                  <a
                    href={post.link}
                    className="text-xs font-bold inline-flex items-center gap-4 focus:outline-none"
                  >
                    READ MORE{" "}
                    <Image
                      src="/read-more.svg"
                      alt="read more"
                      width={6}
                      height={14}
                    />
                  </a>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
