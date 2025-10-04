import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = ["Programs", "Blog", "Thursday Tribune", "IMCE Sessions"];
const supportLinks = [
  "Donate",
  "Volunteer",
  "Book Campaign",
  "Unashamed Pledge",
];

export default function Footer() {
  return (
    <footer className="bg-[url('/footer-bg.svg')] bg-no-repeat bg-center bg-cover w-full pb-15">
      <div className="max-w-[1440px] w-full mx-auto px-20">
        <div className="py-20 grid grid-cols-1 md:grid-cols-[313px_1fr_1fr_313px] gap-10">
          <div className="space-y-4">
            <Image
              src="/logo-white.svg"
              alt="Asido Foundation Logo"
              width={155}
              height={48}
              className="w-[129px] h-[40px] md:w-[155px] md:h-[48px]"
              priority
              sizes="(max-width: 768px) 129px, 155px"
            />
            <p className="mt-5 text-xs md:text-base leading-relaxed md:max-w-[313px] w-full mx-auto md:mx-0 text-light-400">
              Making mental health support accessible through advocacy and
              action
            </p>
            <div className="flex gap-4 mt-6">
              {["twitter", "facebook", "linkedin", "instagram"].map((icon) => (
                <Link key={icon} href="#" aria-label={icon}>
                  <Image
                    src={`/icons/${icon}.svg`}
                    alt=""
                    width={20}
                    height={20}
                    className="transition-transform hover:scale-110"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Programs", "Blog", "Thursday Tribune", "IMCE Sessions"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:underline focus-visible:outline-dashed focus-visible:outline-1"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div> */}

          {/* Quick Links */}
          <nav aria-label="QuickLinks">
            <h3 className="font-bold mb-5 text-[20px] text-light-400">
              Quick Links
            </h3>
            <ul className="space-y-3 text-base text-light-400">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Support">
            <h3 className="font-bold mb-5 text-[20px] text-light-400">
              Support
            </h3>
            <ul className="space-y-3 text-base text-light-400">
              {supportLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="font-bold mb-5 text-light-400 text-[20px]">
              Contact Us
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex justify-center md:justify-start gap-2">
                <MapPin className="w-7 h-7 mt-1 shrink-0 text-light-400" />
                <span className="text-base font-medium text-light-400">
                  No 4, Awosika Street, Old Bodija, Ibadan.
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-base font-medium text-light-400">
                <Mail className="w-5 h-5 shrink-0  text-light-400" />
                <a
                  href="mailto:asidofoundation@gmail.com"
                  className="hover:underline"
                >
                  asidofoundation@gmail.com
                </a>
              </li>
              <li className="flex justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 shrink-0 text-light-400" />
                <div className="flex flex-col gap-2 text-light-400 text-base">
                  <a href="tel:+2348180777458">+234 818 077 7458</a>
                  <a href="tel:+2349028080416">+234 902 808 0416</a>
                </div>
              </li>
            </ul>
          </address>
        </div>
        {/* Divider */}
        <div className="bg-[#ABABAB] h-[1px] mb-5"></div>
        {/* Copyright */}
        <p className="text-base font-medium text-light-400">
          © {new Date().getFullYear()} Asido Foundation. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
