"use client";

import { AboutSection } from "./AboutSection";
import { CompetenciesSection } from "./CompetenciesSection";
import { Details } from "./Details";
import { ExperienceSection } from "./ExperienceSection";
import { InfoSection } from "./InfoSection";
import { Link } from "./Link";
import { ObjectiveSection } from "./ObjectiveSection";
import { RecommendationsSection } from "./RecommendationsSection";
import { headerFont } from "./headerFont";
import { resume } from "./resume";
import { ResumeProvider, useResume } from "./resumeContext";
import {
  ArrowDownIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { clsx } from "clsx/lite";
import { format as formatDate } from "date-fns/format";
import { Howl } from "howler";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const Divider = ({ className = "" }: { className?: string }) => (
  <hr
    className={clsx(
      "mt-2 mb-2 w-full border-1 border-solid border-sky-600 print:hidden",
      className,
    )}
  />
);

// Used by Page to store a ref used by both MainContent and ScrollDashButton.
const mainRefContext =
  createContext<React.RefObject<HTMLElement | null> | null>(null);

const DashButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => (
  <button
    {...props}
    className="border-[2px] border-solid border-amber-500 bg-zinc-800/50 p-[4px] focus:border-[4px] focus:p-[2px] focus:outline-hidden"
  >
    {props.children}
  </button>
);

const AudioDashButton = () => {
  const [audio, setAudio] = useState<Howl | null>(null);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    /* c8 ignore start */
    if (!isPlaying || audio) return;
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
      <PlayPauseIcon className="h-10 w-10" />
    </DashButton>
  );
};

const ScrollDashButton = () => {
  const [isNearTop, setIsNearTop] = useState(true);
  const mainRef = useContext(mainRefContext);

  const handleScroll = () =>
    setIsNearTop(window.scrollY < window.innerHeight / 2);

  useEffect(() => {
    handleScroll();
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
        className={clsx(
          "h-10 w-10 transition duration-300 ease-in-out",
          isNearTop && "rotate-180",
        )}
      />
    </DashButton>
  );
};

const DashButtons = () => (
  <div className="sticky bottom-0 float-right flex justify-end gap-x-4 p-4 print:hidden">
    <AudioDashButton />
    <ScrollDashButton />
  </div>
);

const HeaderForDisplay = () => {
  const resume = useResume();

  const headerRef = useRef<HTMLElement>(null);
  const scrollSpeed = 0.63;

  const handleScroll = () => {
    if (headerRef.current) {
      headerRef.current.style.top = `${window.scrollY * scrollSpeed}px`;
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="border-b-2 border-sky-600 print:hidden">
      <div className="h-screen overflow-hidden">
        <header
          ref={headerRef}
          className="relative h-screen bg-[url(./bear.jpg)] bg-cover bg-center"
        >
          <div className="absolute h-48 w-full bg-linear-to-b from-zinc-900 opacity-50" />
          <div className="absolute w-full p-5 text-center md:pr-16 md:text-right lg:pr-24">
            <h1 className="text-6xl md:pr-16 md:text-7xl lg:pr-32 lg:text-8xl">
              {resume.contact?.fullName}
            </h1>
            <p className="pt-2 text-lg md:pt-3 md:text-2xl lg:pt-5 lg:pr-16">
              {resume.profile?.headline} • {resume.contact?.pronouns}
            </p>
          </div>
        </header>
      </div>
    </div>
  );
};

const HeaderForPrint = () => {
  const resume = useResume();

  return (
    <header
      className={clsx(
        "hidden items-end justify-between pb-4 print:flex",
        headerFont.className,
      )}
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
      className="mr-auto ml-auto flex max-w-6xl flex-col p-4 pt-0 md:p-8 lg:flex-row lg:pt-8 print:p-0"
    >
      <div className="flex flex-wrap lg:order-2 lg:w-2/5 lg:flex-col lg:pl-8 2xl:sticky 2xl:top-0 2xl:h-min print:static print:flex-row print:pb-2 print:pl-0">
        <AboutSection className="print:pb-2" />
        <Divider />

        <ObjectiveSection className="md:w-1/2 lg:w-full print:w-1/2" />
        <Divider className="md:hidden lg:block" />

        <InfoSection className="md:w-1/2 lg:w-full print:w-1/2" />
        <Divider className="lg:hidden" />
      </div>
      <div className="lg:order-1 lg:w-3/5">
        <CompetenciesSection />
        <Divider className="mb-5 lg:hidden" />

        <ExperienceSection className="lg:pt-4 print:pt-0" />
        <Divider className="mt-5 mb-5 lg:hidden" />

        <RecommendationsSection className="lg:pt-4 lg:pb-2 print:hidden" />
      </div>
    </main>
  );
};

const FooterForDisplay = () => {
  const resume = useResume();

  return (
    <footer className="border-t-2 border-solid border-zinc-800 p-4 text-center print:hidden">
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
  const [currentDate, setCurrentDate] = useState("");
  const resume = useResume();

  // Delay setting current date until after component mounts on the client side.
  useEffect(() => {
    const formattedDate = formatDate(Date.now(), "PPP");
    setCurrentDate(formattedDate);
  }, []);

  return (
    <footer className="hidden justify-between pt-8 text-right print:flex">
      <Details>Generated {currentDate}</Details>
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
