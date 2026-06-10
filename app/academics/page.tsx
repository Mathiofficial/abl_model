import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export const metadata: Metadata = buildMetadata({
  title: "Academics",
  description:
    "State Board curriculum, classes from LKG to Higher Secondary, and our approach to teaching and evaluation.",
  path: "/academics",
});

const classes = [
  { title: "LKG & UKG", note: "Early years foundation" },
  { title: "Primary", note: "Classes 1 – 5" },
  { title: "Middle", note: "Classes 6 – 8" },
  { title: "High & Higher Secondary", note: "Classes 9 – 12" },
];

const teaching = [
  "Concept-Based Learning",
  "Interactive Classroom Sessions",
  "Individual Attention",
  "Activity-Based Learning",
];

const evaluation = [
  "Regular Tests",
  "Performance Tracking",
  "Parent Communication",
  "Remedial Support",
];

const tenthToppers = [
  {
    name: "Student Name 1",
    score: "495 / 500",
    image: "/assets/toppers/tenth1.jpg",
  },
  {
    name: "Student Name 2",
    score: "492 / 500",
    image: "/assets/toppers/tenth2.jpg",
  },
  {
    name: "Student Name 3",
    score: "490 / 500",
    image: "/assets/toppers/tenth3.jpg",
  },
];

const twelfthToppers = [
  {
    name: "Student Name 1",
    score: "595 / 600",
    image: "/assets/toppers/twelfth1.jpg",
  },
  {
    name: "Student Name 2",
    score: "592 / 600",
    image: "/assets/toppers/twelfth2.jpg",
  },
  {
    name: "Student Name 3",
    score: "590 / 600",
    image: "/assets/toppers/twelfth3.jpg",
  },
];

export default function AcademicsPage() {
  return (
    <section className="container-x section-y">
      {/* HERO */}
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
      {/* Left Side - Content */}
      <div>
        <h1 className="text-5xl font-bold">Academics</h1>

        <p className="mt-6 text-lg text-text-muted leading-relaxed">
          At Angels Baby Land Matric Higher Secondary School, academics form the
          foundation of our commitment to nurturing confident, capable, and
          responsible individuals. Our structured curriculum encourages critical
          thinking, creativity, and a lifelong passion for learning while preparing
          students to excel in both academics and life.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="relative h-[350px] overflow-hidden rounded-[var(--radius-card)]">
        <Image
          src="/assets/Academics/academic_school.jpeg"
          alt="Academics at Angels Baby Land School"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>

      <div className="mt-12 space-y-14 lg:mt-16 lg:space-y-20">
        {/* OVERVIEW */}
        <div className="max-w-3xl">
          <h2>Overview</h2>
          <p className="mt-4 text-text-muted">
            Academics form the core of our educational approach, ensuring
            clarity, understanding, and strong conceptual learning for every
            student.
          </p>
        </div>
      

        {/* CURRICULUM */}
        <div className="max-w-3xl">
          <h2>Curriculum</h2>
          <p className="mt-4 text-text-muted">
            The school follows the State Board curriculum, designed to provide
            structured and progressive learning.
          </p>
        </div>
        {/* CURRICULUM */}
        <div>
          <SectionHeading
            title="Curriculum Pathway"
            subtitle="A structured academic journey designed for every stage of learning."
          />

          <div className="mt-10 space-y-6">
            {/* LKG & UKG */}
            <div className="group flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-bg-alt p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row">
              <div>
                <h3 className="text-xl font-bold">LKG & UKG</h3>
                <p className="mt-2 text-text-muted">
                  Early childhood education focused on joyful learning, creativity,
                  communication skills, and overall development.
                </p>
              </div>

              <div className="rounded-lg bg-accent px-6 py-3 font-bold shadow-md transition-transform duration-300 group-hover:scale-105">
                One Learn
              </div>
            </div>

            {/* Grade 1 - Grade 5 */}
            <div className="group flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-bg-alt p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row">
              <div>
                <h3 className="text-xl font-bold">Grade 1 – Grade 5</h3>
                <p className="mt-2 text-text-muted">
                  Building strong foundations in language, mathematics, science,
                  problem-solving, and life skills.
                </p>
              </div>

              <div className="rounded-lg bg-accent px-6 py-3 font-bold shadow-md transition-transform duration-300 group-hover:scale-105">
                E-DAC
              </div>
            </div>

            {/* Grade 6 - Grade 12 */}
            <div className="group flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-bg-alt p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row">
             <div>
                <h3 className="text-xl font-bold">Grade 6 – Grade 12</h3>
                <p className="mt-2 text-text-muted">
                  Samacheer Kalvi curriculum designed to strengthen academic excellence,
                  critical thinking, and preparation for higher education.
                </p>
              </div>

              <div className="rounded-lg bg-accent px-6 py-3 font-bold shadow-md transition-transform duration-300 group-hover:scale-105">
                Samacheer Kalvi
              </div>
            </div>
          </div>
        </div>
    
        {/* CLASSES */}
        <div>
          <SectionHeading
            title="Classes"
            subtitle="A continuous learning path from the early years to higher secondary."
          />
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {classes.map((c) => (
              <li key={c.title}>
                <Card interactive={false} className="h-full p-6">
                  <div className="mb-4 h-1 w-12 bg-accent" />
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{c.note}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>

        {/* TEACHING */}
        <div>
          <SectionHeading
            title="Our Teaching Approach"
            subtitle="How we help every student understand, engage and grow."
          />
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teaching.map((t) => (
              <li key={t}>
                <Card interactive={false} className="h-full p-6">
                  <h3 className="text-base font-bold">{t}</h3>
                </Card>
              </li>
            ))}
          </ul>
        </div>

        {/* EVALUATION */}
        <div>
          <SectionHeading
            title="Evaluation"
            subtitle="Consistent assessment and support to keep every student on track."
          />
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {evaluation.map((e) => (
              <li key={e}>
                <Card interactive={false} className="h-full p-6">
                  <h3 className="text-base font-bold">{e}</h3>
                </Card>
              </li>
            ))}
          </ul>
        </div>
        {/* TOPPERS */}
        {/* TOPPERS */}
        <div>
          <SectionHeading
            title="Academic Toppers"
            subtitle="Celebrating the outstanding achievements of our students."
          />

          <div className="mt-10 space-y-12">
            {/* 10th Standard */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-center">
                10th Standard Toppers
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {tenthToppers.map((student) => (
                  <Card
                    key={student.name}
                    interactive={false}
                    className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative h-72 w-full">
                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                     <div className="p-5 text-center">
                      <h3 className="text-lg font-bold">{student.name}</h3>
                      <p className="mt-2 font-semibold text-accent">
                        {student.score}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* 12th Standard */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-center">
                12th Standard Toppers
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {twelfthToppers.map((student) => (
                  <Card
                    key={student.name}
                    interactive={false}
                    className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="relative h-72 w-full">
                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-5 text-center">
                      <h3 className="text-lg font-bold">{student.name}</h3>
                      <p className="mt-2 font-semibold text-accent">
                        {student.score}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
}
