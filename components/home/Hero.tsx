import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { SITE } from "@/lib/seo";

export default function Hero() {
  return (
    <section className="bg-[#f8f4f6]">
      <div className="container-x min-h-[75vh] flex flex-col-reverse items-center justify-between gap-12 py-16 lg:min-h-[80vh] lg:flex-row">
        
        {/* LEFT SIDE */}
        <div className="max-w-2xl">
          <span className="rounded-full bg-accent/20 px-4 py-2 text-sm font-medium">
            Since 1993
          </span>
          <h1 className="mt-6 leading-tight text-[#1f2937]">
            <span className="block whitespace-nowrap text-3xl font-extrabold lg:text-5xl xl:text-6xl">
              Angels Baby Land Matric
            </span>

            <span className="mt-2 block text-3xl font-bold text-accent-strong lg:text-5xl">
              Higher Secondary School
            </span>
          </h1>
          

          <p className="mt-6 text-lg italic text-text-muted">
            "{SITE.tagline}"
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            Building a legacy of excellence in education for over 30 years,
            nurturing young minds with knowledge, discipline, creativity,
            leadership, and strong moral values.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton href="/about">
              Explore Campus
            </CTAButton>

            <CTAButton href="/contact" variant="secondary">
              Get in Touch
            </CTAButton>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">

          {/* Glow */}
          <div className="absolute h-[28rem] w-[28rem] rounded-full bg-pink-200/30 blur-3xl" />

          {/* Main Circle */}
          <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border-4 border-pink-200 bg-white shadow-2xl">

            {/* Decorative Ring */}
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-pink-300 animate-[spin_25s_linear_infinite]" />

            {/* Logo */}
            <div className="relative flex items-center justify-center">
              <div className="relative h-[600px] w-[600px]">
                <Image
                  src="/assets/angel_back_header_image.png"
                  alt="Angels Baby Land School Logo"
                  fill
                  priority
                  className="z-10 object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}