import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GalleryDetail from "@/components/ui/GalleryDetail";
import { culturals } from "@/data/activities";

export const metadata: Metadata = buildMetadata({
  title: "Cultural Activities",
  description: culturals.intro,
  path: "/activities/culturals",
});

export default function CulturalsPage() {
  return (
    <section className="container-x section-y space-y-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">{culturals.title}</h1>

        <p className="mt-4 text-text-muted">
          {culturals.intro}
        </p>
      </div>

      {/* Kids */}
      <div className="rounded-2xl border border-border bg-bg-alt p-8 transition-all duration-300 hover:shadow-xl">
        <h2 className="mb-4 text-3xl font-bold">
          Kids Cultural Celebrations
        </h2>

        <p className="mb-8 text-text-muted">
          Fun-filled celebrations designed for our kindergarten and primary
          students to build confidence, creativity, and joyful learning.
        </p>

        <GalleryDetail
          title=""
          intro=""
          frames={culturals.kidsFrames}
        />
      </div>

      {/* Higher Secondary */}
      <div className="rounded-2xl border border-border bg-bg-alt p-8 transition-all duration-300 hover:shadow-xl">
        <h2 className="mb-4 text-3xl font-bold">
          Higher Secondary Cultural Events
        </h2>

        <p className="mb-8 text-text-muted">
          Large-scale cultural programs showcasing talent, leadership,
          teamwork, and artistic excellence among senior students.
        </p>

        <GalleryDetail
          title=""
          intro=""
          frames={culturals.seniorFrames}
        />
      </div>
    </section>
  );
}