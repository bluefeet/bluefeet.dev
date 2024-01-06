import { ReactNode } from 'react'

import {
  AtSymbolIcon,
  ChatBubbleBottomCenterTextIcon,
  DevicePhoneMobileIcon,
  LinkIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid'

import { Details } from './Details'
import { Link } from './Link'
import { List } from './List'
import { ListItem } from './ListItem'
import { useResume } from './resumeContext'

const Location = () => {
  const resume = useResume()
  if (!resume.contact?.location) return <></>

  const details: ReactNode[] = []

  if (typeof resume.objective?.willingToRelocate === 'boolean') {
    details.push(<Details key='willingToRelocate'>{
      resume.objective?.willingToRelocate
        ? 'Willing to relocate'
        : 'Not available to relocate'
    }</Details>)
  }

  if (typeof resume.objective?.willingToTravel === 'boolean') {
    details.push(<Details key='willingToTravel'>{
      resume.objective?.willingToTravel
        ? 'Willing to travel'
        : 'Not willing to travel'
    }</Details>)
  }

  return <>
    <ListItem Icon={MapPinIcon}>
      {resume.contact.location}
      {details}
    </ListItem>
  </>
}

const EmailAddress = () => {
  const resume = useResume()
  if (!resume.contact?.emailAddress) return <></>

  return <>
    <ListItem Icon={AtSymbolIcon}>
      <Link href={`mailto:${resume.contact?.emailAddress}`}>
        {resume.contact.emailAddress}
      </Link>
    </ListItem>
  </>
}

const PhoneNumber = () => {
  const resume = useResume()
  if (!resume.contact?.phoneNumber) return <></>

  return <>
    <ListItem Icon={DevicePhoneMobileIcon}>
      <Link href={`tel:${resume.contact.phoneNumber}`}>
        {resume.contact.phoneNumber}
      </Link>
    </ListItem>
  </>
}

const Languages = () => {
  const resume = useResume()
  if (!resume.profile?.languages?.length) return <></>

  return <>
    <ListItem Icon={ChatBubbleBottomCenterTextIcon}>
      {resume.profile.languages.join(', ')}
    </ListItem>
  </>
}

const Resources = () => {
  const resume = useResume()
  if (!resume.profile?.resources?.length) return <></>

  return <>
    <ListItem Icon={LinkIcon}>
      {resume.profile.resources.map((resource) =>
        <div key={resource.uri}>
          <Link href={resource.uri}>{resource.title}</Link>
          <Details className='hidden print:block'>{resource.uri}</Details>
        </div>
      )}
      <Link className='print:hidden' href='/resume.pdf'>PDF Resume</Link><br />
    </ListItem>
  </>
}

export const InfoSection = ({ className = '' }: { className?: string }) => {
  return <>
    <section className={className}>
      <List>
        <Location />
        <EmailAddress />
        <PhoneNumber />
        <Languages />
        <Resources />
      </List>
    </section>
  </>
}
