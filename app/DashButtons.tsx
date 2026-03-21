"use client";

import { ArrowUpIcon, PauseIcon, PlayIcon } from "@phosphor-icons/react";
import { clsx } from "clsx/lite";
import { Howl } from "howler";
import { ButtonHTMLAttributes, useEffect, useState } from "react";

type DashButtonsProps = {
  mainContentId: string;
};

type DashButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const DashButton = (props: DashButtonProps) => (
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
    if (!isPlaying || audio) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAudio(
      new Howl({
        html5: true,
        src: ["/nature.mp3"],
        loop: true,
        onplay: () => setPlaying(true),
        onpause: () => setPlaying(false),
        onstop: () => setPlaying(false),
      }),
    );
  }, [isPlaying, audio]);

  useEffect(() => {
    if (!isPlaying) audio?.pause();
    else audio?.play();
  }, [isPlaying, audio]);

  useEffect(() => {
    if (!audio) return;

    if (navigator.mediaSession) {
      navigator.mediaSession.setActionHandler("play", () => audio.play());
      navigator.mediaSession.setActionHandler("pause", () => audio.pause());
    }

    return () => {
      if (navigator.mediaSession) {
        navigator.mediaSession.setActionHandler("play", null);
        navigator.mediaSession.setActionHandler("pause", null);
      }
    };
  }, [audio]);

  useEffect(
    () => () => {
      audio?.stop();
      audio?.unload();
    },
    [audio],
  );

  const PlayPauseIcon = isPlaying ? PauseIcon : PlayIcon;

  return (
    <DashButton
      onClick={() => setPlaying((playing) => !playing)}
      aria-label={isPlaying ? "Pause Nature Sounds" : "Play Nature Sounds"}
    >
      <PlayPauseIcon className="h-10 w-10" />
    </DashButton>
  );
};

const ScrollDashButton = ({ mainContentId }: DashButtonsProps) => {
  const [isNearTop, setIsNearTop] = useState(true);

  useEffect(() => {
    const handleScroll = () =>
      setIsNearTop(window.scrollY < window.innerHeight / 2);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToMain = () =>
    document
      .getElementById(mainContentId)
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <DashButton
      onClick={() => {
        if (isNearTop) scrollToMain();
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label={isNearTop ? "Scroll to Content" : "Scroll to Top"}
    >
      <ArrowUpIcon
        className={clsx(
          "h-10 w-10 transition duration-300 ease-in-out",
          isNearTop && "rotate-180",
        )}
      />
    </DashButton>
  );
};

export const DashButtons = ({ mainContentId }: DashButtonsProps) => (
  <div className="sticky bottom-0 float-right flex justify-end gap-x-4 p-4 print:hidden">
    <AudioDashButton />
    <ScrollDashButton mainContentId={mainContentId} />
  </div>
);
