import { AboutSection } from "./AboutSection";
import { CompetenciesSection } from "./CompetenciesSection";
import { DashButtons } from "./DashButtons";
import { DisplayHeader } from "./DisplayHeader";
import { ExperienceSection } from "./ExperienceSection";
import { Footer } from "./Footer";
import { InfoSection } from "./InfoSection";
import { ObjectiveSection } from "./ObjectiveSection";
import { RecommendationsSection } from "./RecommendationsSection";
import { headerFont } from "./headerFont";
import { resume } from "./resume";
import { clsx } from "clsx/lite";
import type { Resume } from "./resume";

const Divider = ({ className = "" }: { className?: string }) => (
  <hr
    className={clsx(
      "mt-2 mb-2 w-full border-1 border-solid border-sky-600 print:hidden",
      className,
    )}
  />
);

const mainContentId = "main-content";

const HeaderForPrint = ({
  contact,
  profile,
}: {
  contact?: Resume["contact"];
  profile?: Resume["profile"];
}) => {
  return (
    <header
      className={clsx(
        "hidden items-end justify-between pb-4 print:flex",
        headerFont.className,
      )}
    >
      <h1 className="text-5xl font-semibold text-sky-800">{contact?.fullName}</h1>
      <p>
        {profile?.headline} • {contact?.pronouns} • https://bluefeet.dev
      </p>
    </header>
  );
};

const MainContent = ({ resume }: { resume: Resume }) => {
  return (
    <main
      id={mainContentId}
      className="mr-auto ml-auto flex max-w-6xl flex-col p-4 pt-0 md:p-8 lg:flex-row lg:pt-8 print:p-0"
    >
      <div className="flex flex-wrap lg:order-2 lg:w-2/5 lg:flex-col lg:pl-8 2xl:sticky 2xl:top-0 2xl:h-min print:static print:flex-row print:pb-2 print:pl-0">
        <AboutSection about={resume.profile?.about} className="print:pb-2" />
        <Divider />

        <ObjectiveSection
          objective={resume.objective}
          className="md:w-1/2 lg:w-full print:w-1/2"
        />
        <Divider className="md:hidden lg:block" />

        <InfoSection
          contact={resume.contact}
          objective={resume.objective}
          profile={resume.profile}
          className="md:w-1/2 lg:w-full print:w-1/2"
        />
        <Divider className="lg:hidden" />
      </div>
      <div className="lg:order-1 lg:w-3/5">
        <CompetenciesSection competencies={resume.profile?.competencies} />
        <Divider className="mb-5 lg:hidden" />

        <ExperienceSection
          experiences={resume.experiences}
          className="lg:pt-4 print:pt-0"
        />
        <Divider className="mt-5 mb-5 lg:hidden" />

        <RecommendationsSection
          recommendations={resume.recommendations}
          className="lg:pt-4 lg:pb-2 print:hidden"
        />
      </div>
    </main>
  );
};

const Page = () => (
  <>
    <DisplayHeader contact={resume.contact} profile={resume.profile} />
    <HeaderForPrint contact={resume.contact} profile={resume.profile} />
    <MainContent resume={resume} />
    <DashButtons mainContentId={mainContentId} />
    <Footer />
  </>
);

export default Page;
