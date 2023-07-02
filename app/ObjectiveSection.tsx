import { Fragment } from 'react'
import Details from './Details'
import formatDate from 'date-fns/format'
import isDateInPast from 'date-fns/isPast'
import List from './List'
import ListItem from './ListItem'
import parseISODate from 'date-fns/parseISO'
import resume from './resume'
import upperFirst from 'lodash/upperFirst'

import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/solid'

const StartDate = () => {
  if (!resume.objective) return <></>

  let startDate = resume.objective.startDate ? parseISODate(resume.objective.startDate) : null

  // Don't display if in the past.
  if (startDate && isDateInPast(startDate)) startDate = null

  return <>
    <ListItem Icon={RocketLaunchIcon}>
      {
        resume.objective.isCasual
          ? 'Open to a new opportunities'
          : 'Actively searching for an opportunity'
      }
      {<Details>
        Available {startDate
          ? <>starting on {formatDate(startDate, 'PPP')}</>
          : <>immediately</>
        }
      </Details>}
    </ListItem>
  </>
}

const Roles = () => {
  if (!resume.objective?.roles?.length) return <></>

  return <>
    <ListItem Icon={Cog6ToothIcon}>
      {resume.objective.roles.length > 1 ? 'These roles' : 'This role'} would be a great match
      <Details>
        {resume.objective.roles.map((role) =>
          <Fragment key={role}>
            {role}<br />
          </Fragment>
        )}
      </Details>
    </ListItem>
  </>
}

const WorkModes = () => {
  if (!resume.objective?.workModes?.length) return <></>

  return <>
    <ListItem Icon={BuildingOffice2Icon}>
      In {resume.objective.workModes.length > 1 ? 'any of these capacities' : 'this capacity'}
      <Details>
        {resume.objective.workModes.map((workMode) =>
          <Fragment key={workMode}>
            {upperFirst(workMode)}<br />
          </Fragment>
        )}
      </Details>
    </ListItem>
  </>
}

const EmploymentTypes = () => {
  if (!resume.objective?.employmentTypes?.length) return <></>

  return <>
    <ListItem Icon={CalendarDaysIcon}>
      With {resume.objective.employmentTypes.length > 1 ? 'one of these commitments' : 'this commitment'}
      <Details>
        {resume.objective.employmentTypes.map((employmentType) =>
          <Fragment key={employmentType}>
            {upperFirst(employmentType)}<br />
          </Fragment>
        )}
      </Details>
    </ListItem>
  </>
}

const ObjectiveSection = ({ className = '' }: { className?: string }) => {
  return <>
    <section className={className}>
      <List>
        <StartDate />
        <Roles />
        <WorkModes />
        <EmploymentTypes />
      </List>
    </section>
  </>
}

export default ObjectiveSection