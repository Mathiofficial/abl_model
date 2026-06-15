"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Curtain {
  title: string;
  body: string;
  image: string;
}

const cards: Curtain[] = [
  {
    title: "Our Vision",
    image: "/assets/hero/our_vision_cover_pic.png",
    body: "To be a center of educational excellence that inspires lifelong learning, leadership, discipline, and character, shaping future generations who contribute positively to society and the nation.",
  },
  {
    title: "Our Mission",
    image: "/assets/hero/our_mission_cover_pic.png",
    body: "To nurture young minds through quality education, strong moral values, and innovative learning experiences that empower students to excel academically and grow into confident, responsible citizens.",
  },
];

function CurtainCard({ title, body, image }: Curtain) {
  const [open, setOpen] = useState(false);
  const hoverCapable = useRef(false);

  useEffect(() => {
    hoverCapable.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  const reveal = () => hoverCapable.current && setOpen(true);
  const hide = () => hoverCapable.current && setOpen(false);

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={() => setOpen((o) => !o)}
      onMouseEnter={reveal}
      onMouseLeave={hide}
      onFocus={reveal}
      onBlur={hide}
      className="group relative w-full overflow-hidden rounded-2xl border border-border bg-bg text-left shadow-lg"
    >
      {/* Revealed Content */}
      <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-10">
        <h3 className="mb-4 text-3xl font-bold text-accent-strong">
          {title}
        </h3>

        <p className="text-lg leading-relaxed text-text-muted">
          {body}
        </p>
      </div>

      {/* Cover Image */}
      <div
        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Image
          src={image}
          alt={title}
          width={1200}
          height={700}
          className="h-auto w-full"
          priority
        />
      </div>

      {/* Height comes from image */}
      <Image
        src={image}
        alt={title}
        width={1200}
        height={700}
        className="invisible w-full"
      />
    </button>
  );
}

export default function AboutCurtains() {
  return (
    <section className="bg-bg">
      <div className="container-x section-y">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {cards.map((card) => (
            <CurtainCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}