import { SectionTitle } from "./SectionTitle";
import { useRenderMarkdown } from "./RenderMarkdownContext";
import { useResume } from "./resumeContext";

export const AboutSection = ({ className = "" }: { className?: string }) => {
  const RenderMarkdown = useRenderMarkdown();
  const resume = useResume();
  if (!resume.profile?.about) return <></>;

  return (
    <>
      <section className={`md:flex lg:block pt-2 md:pt-0 ${className}`}>
        <SectionTitle className="md:pr-8 lg:pr-0 print:hidden mt-3 md:mt-0 lg:mt-3">
          About
        </SectionTitle>

        <RenderMarkdown>{resume.profile.about}</RenderMarkdown>
      </section>
    </>
  );
};
