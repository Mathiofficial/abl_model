import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";
import CardGrid, { type CardItem } from "@/components/ui/CardGrid";

export const metadata: Metadata = buildMetadata({
  title: "Achievements",
  description:
    "Celebrating the accomplishments of our school, teachers, and students.",
  path: "/achievements",
});

const items: CardItem[] = [
  {
    title: "School Achievements",
    href: "/achievements/school",
    image: "/assets/achievements/school.jpg",
    blurb:
      "Recognitions, awards, milestones, and accomplishments earned by the institution.",
  },
  {
    title: "Teacher Achievements",
    href: "/achievements/teachers",
    image: "/assets/achievements/teachers.jpg",
    blurb:
      "Awards, certifications, and professional achievements of our dedicated educators.",
  },
  {
    title: "Student Achievements",
    href: "/achievements/student",
    image: "/assets/achievements/students.jpg",
    blurb:
      "Outstanding performances in academics, sports, cultural events, and competitions.",
  },
];

export default function AchievementsPage() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        as="h1"
        title="Achievements"
        subtitle="Celebrating excellence, dedication, and success across academics, sports, and co-curricular activities."
        className="mb-10"
      />

      <CardGrid items={items} columns={3} />
    </section>
  );
}