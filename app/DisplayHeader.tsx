import type { Resume } from "./resume";
import { clsx } from "clsx/lite";

type DisplayHeaderProps = {
  contact: Resume["contact"];
  profile: Resume["profile"];
};

export const DisplayHeader = ({ contact, profile }: DisplayHeaderProps) => {
  return (
    <div className="border-b-2 border-sky-600 print:hidden">
      <div className="display-header-frame h-svh overflow-hidden">
        <header
          className={clsx(
            "display-header relative h-svh bg-[url(./bear.jpg)] bg-cover",
            "bg-[position:38%_center]",
          )}
        >
          <div className="absolute h-48 w-full bg-linear-to-b from-zinc-900 opacity-50" />
          <div className="absolute w-full p-5 text-center md:pr-16 md:text-right lg:pr-24">
            <h1 className="text-6xl md:pr-16 md:text-7xl lg:pr-32 lg:text-8xl">
              {contact?.fullName}
            </h1>
            <p className="pt-2 text-lg md:pt-3 md:text-2xl lg:pt-5 lg:pr-16">
              {profile?.headline} • {contact?.pronouns}
            </p>
          </div>
        </header>
      </div>
    </div>
  );
};
