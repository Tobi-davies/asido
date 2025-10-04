"use client";

import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_OPTIONS = [
  {
    title: "ABOUT US",
    link: "/",
  },
  {
    title: "IMPACT",
    link: "/",
  },
  {
    title: "GET INVOLVED",
    link: "/",
  },
  {
    title: "STAY INFORMED",
    link: "/",
  },
];

export default function Header() {
  // const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm flex justify-center">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col py-4 px-5 md:px-10 xl:px-20 border border-blue-500">
        {/* Logo */}
        <div className="flex items-center justify-between border-red-500 border">
          <a href="/" className="flex items-center py-3 px-6">
            <Image
              src="/logo.svg"
              alt="Asido Foundation Logo"
              width={164}
              height={44}
              priority
            />
          </a>

          <div className="flex items-center gap-4">
            <div className="flex lg:border-[1.5px] lg:border-blue-500 rounded-full w-8 h-8 justify-center items-center">
              <Search color="#0044B5" size={15} strokeWidth={1.5} />
            </div>

            {/* Menu Icon */}
            <button
              className="block lg:hidden focus:none outline-none"
              aria-label="Toggle menu"
            >
              <Menu
                color="#0044B5"
                cursor="pointer"
                strokeWidth={1.2}
                onClick={() => setIsMobileMenuOpen(true)}
              />
            </button>
          </div>
        </div>

        {/* NAVIGATION OPTIONS */}
        <div className="hidden lg:flex items-center justify-between border-red-500 border">
          <ul className="flex items-center justify-between">
            {NAV_OPTIONS.map((option, i) => {
              return (
                <li
                  key={i}
                  className="px-6 py-4 text-blue-500 font-bold text-base"
                >
                  <a href={`${option.link}`}>{option.title}</a>
                </li>
              );
            })}
          </ul>

          <div>
            <span className="px-6 py-4 text-blue-500 font-bold text-base">
              <a href="/">TAKE THE PLEDGE</a>
            </span>
            <button className="bg-cyan-500 outline-none rounded-lg text-white text-base w-[115px] h-[51px] font-bold cursor-pointer">
              DONATE
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-50 lg:hidden py-5"
          >
            <div className="flex flex-col gap-16 h-dvh px-6">
              <div className="flex items-center justify-between py-2">
                <Image
                  src="/logo.svg"
                  alt="Asido Foundation Logo"
                  width={164}
                  height={44}
                  priority
                />

                <X
                  size={24}
                  strokeWidth={2}
                  color="#141B34"
                  className="cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </div>

              <ul className="flex flex-col gap-5">
                {NAV_OPTIONS.map((option, i) => {
                  return (
                    <li
                      key={i}
                      className="py-4 text-blue-500 font-bold text-base"
                    >
                      <a href={`${option.link}`}>{option.title}</a>
                    </li>
                  );
                })}

                <li className="py-4 text-blue-500 font-bold text-base">
                  TAKE THE PLEDGE
                </li>
              </ul>
              <button className="mt-5 bg-cyan-500 outline-none rounded-lg text-white text-base w-full md:w-[115px] h-[51px] font-bold cursor-pointer">
                DONATE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
