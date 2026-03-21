import { RenderMarkdown } from "./RenderMarkdown";
import { SectionTitle } from "./SectionTitle";
import { clsx } from "clsx/lite";

type AboutSectionProps = {
  about?: string;
  className?: string;
};

export const AboutSection = ({
  about,
  className = "",
}: AboutSectionProps) => {
  if (!about) return <></>;

  return (
    <>
      <section className={clsx("pt-2 md:flex md:pt-0 lg:block", className)}>
        <SectionTitle className="mt-3 md:mt-0 md:pr-8 lg:mt-3 lg:pr-0 print:hidden">
          About
        </SectionTitle>

        <RenderMarkdown>{about}</RenderMarkdown>
      </section>
    </>
  );
};
