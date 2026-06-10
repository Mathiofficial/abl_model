import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { SITE } from "@/lib/seo";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden lg:min-h-[78vh]">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#9b7b87]">
        {/* School Logo Background */}
        <Image
          src="/assets/angel_back_header_image.png"
          alt="Angels Baby Land School Logo"
          fill
          priority
          className="object-contain opacity-20"
        />

        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container-x w-full">
        <div className="max-w-xl text-white lg:max-w-[44%]">
          <h1 className="text-white">{SITE.name}</h1>

          <p className="mt-3 text-lg font-medium italic text-white/90">
            &ldquo;{SITE.tagline}&rdquo;
          </p>

          <p className="mt-4 text-white/85">
            Building a legacy of excellence in education for over 30 years,
            shaping young minds with knowledge, discipline, and values.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <CTAButton href="/about">
              Explore Campus
            </CTAButton>

            <CTAButton href="/contact" variant="secondary">
              Get in Touch
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}