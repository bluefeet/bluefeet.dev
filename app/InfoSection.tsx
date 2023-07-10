import { Fragment } from 'react'
import Details from './Details'
import Link from './Link'
import List from './List'
import ListItem from './ListItem'
import resume from './resume'

import {
  AtSymbolIcon,
  ChatBubbleBottomCenterTextIcon,
  DevicePhoneMobileIcon,
  LinkIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid'

const Location = () => {
  if (!resume.contact?.location) return <></>

  return <>
    <ListItem Icon={MapPinIcon}>
      {resume.contact.location}
    </ListItem>
  </>
}

const EmailAddress = () => {
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
  if (!resume.profile?.languages?.length) return <></>

  return <>
    <ListItem Icon={ChatBubbleBottomCenterTextIcon}>
      {resume.profile.languages.join(', ')}
    </ListItem>
  </>
}

const Resources = () => {
  if (!resume.profile?.resources?.length) return <></>

  return <>
    <ListItem Icon={LinkIcon}>
      {resume.profile.resources.map((resource) =>
        <Fragment key={resource.uri}>
          <Link href={resource.uri}>{resource.title}</Link><br />
          <Details className='hidden print:block'>{resource.uri}</Details>
        </Fragment>
      )}
    </ListItem>
  </>
}

const InfoSection = ({ className = '' }: { className?: string }) => {
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

export default InfoSection
