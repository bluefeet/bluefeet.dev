import { Details } from "./Details";
import { Link } from "./Link";
import { List } from "./List";
import { ListItem } from "./ListItem";
import type { Resume } from "./resume";
import {
  AtIcon,
  DeviceMobileIcon,
  MapPinIcon,
  LinkIcon,
  ChatTextIcon,
} from "@phosphor-icons/react";
import { ReactNode } from "react";

type InfoSectionProps = {
  contact?: Resume["contact"];
  objective?: Resume["objective"];
  profile?: Resume["profile"];
  className?: string;
};

const Location = ({
  contact,
  objective,
}: Pick<InfoSectionProps, "contact" | "objective">) => {
  if (!contact?.location) return <></>;

  const details: ReactNode[] = [];

  if (typeof objective?.willingToRelocate === "boolean") {
    details.push(
      <Details key="willingToRelocate">
        {objective.willingToRelocate
          ? "Willing to relocate"
          : "Not available to relocate"}
      </Details>,
    );
  }

  if (typeof objective?.willingToTravel === "boolean") {
    details.push(
      <Details key="willingToTravel">
        {objective.willingToTravel
          ? "Willing to travel"
          : "Not willing to travel"}
      </Details>,
    );
  }

  return (
    <>
      <ListItem Icon={MapPinIcon}>
        {contact.location}
        {details}
      </ListItem>
    </>
  );
};

const EmailAddress = ({ contact }: Pick<InfoSectionProps, "contact">) => {
  if (!contact?.emailAddress) return <></>;

  return (
    <>
      <ListItem Icon={AtIcon} iconProps={{ weight: "regular" }}>
        <Link href={`mailto:${contact.emailAddress}`}>{contact.emailAddress}</Link>
      </ListItem>
    </>
  );
};

const PhoneNumber = ({ contact }: Pick<InfoSectionProps, "contact">) => {
  if (!contact?.phoneNumber) return <></>;

  return (
    <>
      <ListItem Icon={DeviceMobileIcon}>
        <Link href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</Link>
      </ListItem>
    </>
  );
};

const Languages = ({ profile }: Pick<InfoSectionProps, "profile">) => {
  if (!profile?.languages?.length) return <></>;

  return (
    <>
      <ListItem Icon={ChatTextIcon}>{profile.languages.join(", ")}</ListItem>
    </>
  );
};

const Resources = ({ profile }: Pick<InfoSectionProps, "profile">) => {
  if (!profile?.resources?.length) return <></>;

  return (
    <>
      <ListItem Icon={LinkIcon} iconProps={{ weight: "regular" }}>
        {profile.resources.map((resource) => (
          <div key={resource.uri}>
            <Link href={resource.uri}>{resource.title}</Link>
            <Details className="hidden print:block">{resource.uri}</Details>
          </div>
        ))}
        <Link className="print:hidden" href="/resume.pdf">
          PDF Resume
        </Link>
        <br />
      </ListItem>
    </>
  );
};

export const InfoSection = ({
  contact,
  objective,
  profile,
  className = "",
}: InfoSectionProps) => {
  return (
    <>
      <section className={className}>
        <List>
          <Location contact={contact} objective={objective} />
          <EmailAddress contact={contact} />
          <PhoneNumber contact={contact} />
          <Languages profile={profile} />
          <Resources profile={profile} />
        </List>
      </section>
    </>
  );
};
