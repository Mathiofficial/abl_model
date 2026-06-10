import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import GalleryDetail from "@/components/ui/GalleryDetail";
import { extracurricular } from "@/data/activities";

export const metadata: Metadata = buildMetadata({
  title: "Extra Curricular Activities",
  description: extracurricular.intro,
  path: "/activities/extracurricular",
});

export default function ExtraCurricularPage() {
  return (
    <section className="container-x section-y">
      <GalleryDetail
        title={extracurricular.title}
        intro={extracurricular.intro}
        frames={extracurricular.frames}
      />
    </section>
  );
}