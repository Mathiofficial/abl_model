import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

/**
 * Section 3 — Activities sneak peek. Heading + written copy + one image
 * (text + image only, no live gallery). Links to /activities.
 */
export default function ActivitiesPeek() {
  return (
    <section className="bg-bg-alt">
      <div className="container-x section-y">
        <SectionHeading
          title="Beyond Academics"
          subtitle="Empowering students through sports, cultural activities, leadership opportunities, and creative 
          that nurture confidence and character." />

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-text-muted">
               At Angels Baby Land Matric Higher Secondary School, students are encouraged to discover their talents through sports, cultural programs, arts, leadership initiatives, and community engagement activities that foster confidence and teamwork.
            </p>
            <p className="mt-4 text-text-muted">
              Our co-curricular programs help students develop discipline, communication skills, leadership qualities, and a lifelong passion for learning beyond textbooks.
            </p>
            <CTAButton href="/activities" className="mt-6">
              Check More
            </CTAButton>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border">
            <PlaceholderImage
              alt="Students taking part in school activities"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
