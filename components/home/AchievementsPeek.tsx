import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

/**
 * Section 4 — Achievements sneak peek. Heading + written copy + one image
 * (text + image only). Image sits on the left on desktop to alternate rhythm
 * with the Activities section. Links to /achievements.
 */
export default function AchievementsPeek() {
  return (
    <section className="bg-bg">
      <div className="container-x section-y">
        <SectionHeading
          title="Our Achievements"
          subtitle="Recognizing the outstanding accomplishments of our students and the legacy of excellence built through dedication and hard work."
        />

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-2">
            <p className="text-text-muted">
               For more than 30 years, Angels Baby Land Matric Higher Secondary School has nurtured achievers who excel in academics, sports, cultural events, and leadership activities. Every accomplishment reflects our commitment to quality education and holistic development.
            </p>
            <p className="mt-4 text-text-muted">
               From academic distinctions to championship victories and cultural accolades, our students continue to make us proud while inspiring future generations to dream bigger and achieve greater success.
            </p>
            <CTAButton href="/achievements" className="mt-6">
              Check More
            </CTAButton>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-border lg:order-1">
            <PlaceholderImage
              alt="School achievement and award ceremony"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
