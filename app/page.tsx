"use client";

import { format as formatDate } from "date-fns";
import { Howl } from "howler";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowDownIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";

import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { InfoSection } from "./InfoSection";
import { ObjectiveSection } from "./ObjectiveSection";
import { RecommendationsSection } from "./RecommendationsSection";
import { SkillsSection } from "./SkillsSection";

import { Details } from "./Details";
import { headerFont } from "./headerFont";
import { Link } from "./Link";
import { resume } from "./resume";
import { ResumeProvider, useResume } from "./resumeContext";

const Divider = ({ className = "" }: { className?: string }) => (
  <hr
    className={`w-full border-sky-600 border-solid border-1 mt-2 mb-2 print:hidden ${className}`}
  />
);

// Used by Page to store a ref used by both MainContent and ScrollDashButton.
const mainRefContext = createContext<React.RefObject<HTMLElement> | null>(null);

const DashButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => (
  <button
    {...props}
    className="p-[4px] border-[2px] border-solid border-amber-500 bg-zinc-800/50 focus:outline-none focus:p-[2px] focus:border-[4px]"
  >
    {props.children}
  </button>
);

const AudioDashButton = () => {
  const [audio, setAudio] = useState<Howl | null>(null);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying || audio) return;
    /* c8 ignore start */
    setAudio(
      new Howl({
        html5: true, // Makes iOS Safari happier when phone is locked.
        src: ["/nature.mp3"],
        loop: true,
        // Catch when external processes (the browser or OS) affect playing.
        onplay: () => setPlaying(true),
        onpause: () => setPlaying(false),
        onstop: () => setPlaying(false),
      }),
    );
    /* c8 ignore end */
  }, [isPlaying, audio]);

  useEffect(() => {
    if (!isPlaying) audio?.pause();
    else audio?.play();
  }, [isPlaying, audio]);

  useEffect(() => {
    if (audio && navigator && navigator.mediaSession) {
      navigator.mediaSession.setActionHandler("play", () => audio.play());
      navigator.mediaSession.setActionHandler("pause", () => audio.pause());
    }
  }, [audio]);

  const startPlaying = () => setPlaying(true);
  const pausePlaying = () => setPlaying(false);

  const PlayPauseIcon = isPlaying ? PauseIcon : PlayIcon;

  return (
    <DashButton
      onClick={isPlaying ? pausePlaying : startPlaying}
      aria-label={isPlaying ? "Pause Nature Sounds" : "Play Nature Sounds"}
    >
      <PlayPauseIcon className="w-10 h-10" />
    </DashButton>
  );
};

const ScrollDashButton = () => {
  const [isNearTop, setIsNearTop] = useState(true);
  const mainRef = useContext(mainRefContext);

  useEffect(() => {
    const handleScroll = () =>
      setIsNearTop(window.scrollY < window.innerHeight / 2);
    handleScroll(); // Call once in case the window is scrolled down.
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToMain = () =>
    mainRef?.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToTop = () => {
    console.log("SCROLL TOP");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <DashButton
      onClick={isNearTop ? scrollToMain : scrollToTop}
      aria-label={isNearTop ? "Scroll to Content" : "Scroll to Top"}
    >
      <ArrowDownIcon
        className={`w-10 h-10 transition ease-in-out duration-300 ${
          isNearTop ? "" : "rotate-180"
        }`}
      />
    </DashButton>
  );
};

const DashButtons = () => (
  <div className="sticky flex justify-end gap-x-4 bottom-0 p-4 print:hidden float-right">
    <AudioDashButton />
    <ScrollDashButton />
  </div>
);

const HeaderForDisplay = () => {
  const resume = useResume();

  return (
    <header className="bg-bear bg-cover h-screen bg-center print:hidden">
      <div className="absolute h-48 w-full bg-gradient-to-b from-zinc-900 opacity-50" />
      <div className="absolute w-full text-center md:text-right p-5 md:pr-16 lg:pr-24">
        <h1 className="text-6xl md:text-7xl lg:text-8xl md:pr-16 lg:pr-32">
          {resume.contact?.fullName}
        </h1>
        <p className="pt-2 md:pt-3 lg:pt-5 lg:pr-16 text-lg md:text-2xl">
          {resume.profile?.headline} • {resume.contact?.pronouns}
        </p>
      </div>
    </header>
  );
};

const HeaderForPrint = () => {
  const resume = useResume();

  return (
    <header
      className={`pb-4 ${headerFont.className} hidden print:flex justify-between items-end`}
    >
      <h1 className="text-5xl font-semibold text-sky-800">
        {resume.contact?.fullName}
      </h1>
      <p>
        {resume.profile?.headline} • {resume.contact?.pronouns} •
        https://bluefeet.dev
      </p>
    </header>
  );
};

const MainContent = () => {
  const mainRef = useContext(mainRefContext);

  return (
    <main
      ref={mainRef}
      className="flex flex-col lg:flex-row p-4 md:p-8 pt-0 lg:pt-8 ml-auto mr-auto max-w-6xl print:p-0"
    >
      <div className="lg:w-2/5 flex flex-wrap lg:flex-col lg:order-2 lg:pl-8 print:flex-row print:pl-0 print:pb-2">
        <AboutSection className="print:pb-2" />
        <Divider />

        <ObjectiveSection className="md:w-1/2 lg:w-full print:w-1/2" />
        <Divider className="md:hidden lg:block" />

        <InfoSection className="md:w-1/2 lg:w-full print:w-1/2" />
        <Divider className="lg:hidden" />
      </div>
      <div className="lg:w-3/5 lg:order-1">
        <SkillsSection />
        <Divider className="lg:hidden mb-5" />

        <ExperienceSection className="lg:pt-4 print:pt-0" />
        <Divider className="lg:hidden mt-5 mb-5" />

        <RecommendationsSection className="lg:pt-4 print:hidden" />
      </div>
    </main>
  );
};

const FooterForDisplay = () => {
  const resume = useResume();

  return (
    <footer className="border-zinc-800 border-solid border-t-2 text-center p-4 print:hidden">
      <Details>
        Site built with <Link href="https://nextjs.org/">Next.js</Link> and{" "}
        <Link href="https://tailwindcss.com/">Tailwind CSS</Link>, hosted for
        free by <Link href="https://pages.cloudflare.com/">Cloudflare</Link>,
        source on{" "}
        <Link href="https://github.com/bluefeet/bluefeet.dev">GitHub</Link>.
        <br />
        &copy; {resume.contact?.fullName}
      </Details>
    </footer>
  );
};

const FooterForPrint = () => {
  const resume = useResume();

  return (
    <footer className="text-right pt-8 hidden print:flex justify-between">
      <Details>Generated {formatDate(new Date(), "PPP")}</Details>
      <Details>&copy; {resume.contact?.fullName}</Details>
    </footer>
  );
};

const Page = () => {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <mainRefContext.Provider value={mainRef}>
      <ResumeProvider value={resume}>
        <HeaderForDisplay />
        <HeaderForPrint />
        <MainContent />
        <DashButtons />
        <FooterForDisplay />
        <FooterForPrint />
      </ResumeProvider>
    </mainRefContext.Provider>
  );
};

export default Page;
