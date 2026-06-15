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
        
        {/* ACADEMIC EXCELLENCE */}
        <div>
          <SectionHeading
            title="Academic Excellence"
            subtitle="Empowering students with knowledge, skills, and values to achieve success in academics and beyond."
          />

          <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            
            {/* Left Side Image */}
            <div className="relative h-[350px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/assets/Academics/academic_excellence.jpg"
                alt="Academic Excellence"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side Content */}
            <div>
              <h3 className="text-3xl font-bold text-accent-strong">
                Excellence Through Learning
              </h3>

              <p className="mt-4 leading-relaxed text-text-muted">
                At Angels Baby Land Matric Higher Secondary School, we are committed to
                fostering academic excellence through innovative teaching methods,
                dedicated faculty, and a student-centered learning environment.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border p-4 shadow-sm">
                  <h4 className="font-bold">Qualified Faculty</h4>
                  <p className="mt-2 text-sm text-text-muted">
                    Experienced educators guiding students towards academic success.
                  </p>
                </div>

                <div className="rounded-xl border border-border p-4 shadow-sm">
                  <h4 className="font-bold">Smart Learning</h4>
                  <p className="mt-2 text-sm text-text-muted">
                    Modern teaching techniques and technology-enabled classrooms.
                  </p>
                </div>

                <div className="rounded-xl border border-border p-4 shadow-sm">
                  <h4 className="font-bold">Consistent Results</h4>
                  <p className="mt-2 text-sm text-text-muted">
                    Strong academic performance and outstanding board examination results.
                  </p>
                </div>

                <div className="rounded-xl border border-border p-4 shadow-sm">
                  <h4 className="font-bold">Holistic Growth</h4>
                  <p className="mt-2 text-sm text-text-muted">
                    Balancing academics with leadership, creativity, and character development.
                  </p>
                </div>
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

          {/* 10th Standard Toppers */}
          <div>
            <h2 className="mb-12 text-center text-3xl font-bold">
              12th Standard Toppers
            </h2>

            <div className="flex items-end justify-center gap-6">

              {/* 2nd Rank */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-slate-300 shadow-lg">
                  <Image
                    src={tenthToppers[1].image}
                    alt={tenthToppers[1].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-bold">{tenthToppers[1].name}</h3>
                <p className="text-sm text-text-muted">{tenthToppers[1].score}</p>

                <div className="mt-4 flex h-40 w-32 items-center justify-center rounded-t-xl bg-slate-300 text-4xl font-bold shadow-lg">
                  2
                </div>
              </div>

              {/* 1st Rank */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-yellow-400 shadow-xl">
                  <Image
                    src={tenthToppers[0].image}
                    alt={tenthToppers[0].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-bold">{tenthToppers[0].name}</h3>
                <p className="text-sm text-text-muted">{tenthToppers[0].score}</p>

                <div className="mt-4 flex h-56 w-36 items-center justify-center rounded-t-xl bg-yellow-400 text-5xl font-bold shadow-xl">
                  1
                </div>
              </div>

              {/* 3rd Rank */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-orange-300 shadow-lg">
                  <Image
                    src={tenthToppers[2].image}
                    alt={tenthToppers[2].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-bold">{tenthToppers[2].name}</h3>
                <p className="text-sm text-text-muted">{tenthToppers[2].score}</p>

                <div className="mt-4 flex h-28 w-32 items-center justify-center rounded-t-xl bg-orange-300 text-4xl font-bold shadow-lg">
                  3
                </div>
              </div>

            </div>
          </div>
            {/* 12th Standard Toppers */}
            <div>
              <h2 className="mb-12 mt-20 text-center text-3xl font-bold">
                10th Standard Toppers
              </h2>

              <div className="flex items-end justify-center gap-6">

              {/* 2nd Rank */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-slate-300 shadow-lg">
                  <Image
                    src={twelfthToppers[1].image}
                    alt={twelfthToppers[1].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-bold">{twelfthToppers[1].name}</h3>
                <p className="text-sm text-text-muted">{twelfthToppers[1].score}</p>

                <div className="mt-4 flex h-40 w-32 items-center justify-center rounded-t-xl bg-slate-300 text-4xl font-bold shadow-lg">
                  2
                </div>
              </div>

              {/* 1st Rank */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-yellow-400 shadow-xl">
                  <Image
                    src={twelfthToppers[0].image}
                    alt={twelfthToppers[0].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-bold">{twelfthToppers[0].name}</h3>
                <p className="text-sm text-text-muted">{twelfthToppers[0].score}</p>

                <div className="mt-4 flex h-56 w-36 items-center justify-center rounded-t-xl bg-yellow-400 text-5xl font-bold shadow-xl">
                  1
                </div>
              </div>

              {/* 3rd Rank */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-orange-300 shadow-lg">
                  <Image
                    src={twelfthToppers[2].image}
                    alt={twelfthToppers[2].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="font-bold">{twelfthToppers[2].name}</h3>
                <p className="text-sm text-text-muted">{twelfthToppers[2].score}</p>

                <div className="mt-4 flex h-28 w-32 items-center justify-center rounded-t-xl bg-orange-300 text-4xl font-bold shadow-lg">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );  
}
