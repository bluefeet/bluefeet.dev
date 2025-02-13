import { RenderMarkdown } from "./RenderMarkdown";
import { SectionTitle } from "./SectionTitle";
import { useResume } from "./resumeContext";
import { clsx } from "clsx/lite";

export const AboutSection = ({ className = "" }: { className?: string }) => {
  const resume = useResume();
  if (!resume.profile?.about) return <></>;

  return (
    <>
      <section className={clsx("pt-2 md:flex md:pt-0 lg:block", className)}>
        <SectionTitle className="mt-3 md:mt-0 md:pr-8 lg:mt-3 lg:pr-0 print:hidden">
          About
        </SectionTitle>

        <RenderMarkdown>{resume.profile.about}</RenderMarkdown>
      </section>
    </>
  );
};
