import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[540px]">
      <Image
        src="/png/hero.png"
        alt="Asido Foundation Event"
        fill
        className="object-cover object-center"
        priority
      />
    </section>
  );
}
