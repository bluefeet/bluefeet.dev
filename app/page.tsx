"use client"

import { format as formatDate } from 'date-fns'
import AboutSection from './AboutSection'
import Details from './Details'
import ExperienceSection from './ExperienceSection'
import headerFont from './headerFont'
import InfoSection from './InfoSection'
import Link from './Link'
import ObjectiveSection from './ObjectiveSection'
import RecommendationsSection from './RecommendationsSection'
import resume from './resume'
import SkillsSection from './SkillsSection'
import React, { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'

import {
  ArrowDownIcon,
  PauseIcon,
  PlayIcon,
} from '@heroicons/react/24/outline'

const Divider = ({ className = '' }: { className?: string }) =>
  <hr className={`w-full border-sky-600 border-solid border-1 mt-2 mb-2 print:hidden ${className}`} />

const DashButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) =>
  <button {...props} className='p-[4px] border-[2px] border-solid border-amber-500 bg-zinc-800/50 focus:outline-none focus:p-[2px] focus:border-[4px]'>{props.children}</button>

const Page = () => {
  const mainRef = useRef<HTMLElement>(null)
  const [audio, setAudio] = useState<Howl | null>(null)
  const [isPlaying, setPlaying] = useState(false)
  const [isNearTop, setIsNearTop] = useState(true)

  useEffect(() => {
    if (!isPlaying || audio) return
    setAudio(new Howl({
      html5: true, // Makes iOS Safari happier when phone is locked.
      src: ['/nature.mp3'],
      loop: true,
      // Catch when external processes (the browser or OS) affect playing.
      onplay: () => setPlaying(true),
      onpause: () => setPlaying(false),
      onstop: () => setPlaying(false),
    }))
  }, [isPlaying])

  useEffect(() => {
    if (!isPlaying) audio?.pause()
    else audio?.play()
  }, [isPlaying, audio])

  useEffect(() => {
    if (audio && navigator && navigator.mediaSession) {
      navigator.mediaSession.setActionHandler('play', () => audio.play())
      navigator.mediaSession.setActionHandler('pause', () => audio.pause())
    }
  }, [audio])

  useEffect(() => {
    const handleScroll = () => setIsNearTop(window.scrollY < window.innerHeight / 2)
    handleScroll() // Call once in case the window is scrolled down.
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const startPlaying = () => setPlaying(true)
  const pausePlaying = () => setPlaying(false)

  const scrollToMain = () => mainRef.current?.scrollIntoView({ behavior: 'smooth' })
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const PlayPauseIcon = isPlaying ? PauseIcon : PlayIcon

  return <>
    <header className='bg-bear bg-cover h-screen bg-center print:hidden border-b-2 border-zinc-950 border-solid'>
      <div className='absolute h-48 w-full bg-gradient-to-b from-zinc-900 opacity-50' />
      <div className='absolute w-full text-center md:text-right p-5 md:pr-16 lg:pr-24'>
        <h1 className='text-6xl md:text-7xl lg:text-8xl md:pr-16 lg:pr-32'>
          {resume.contact?.fullName}
        </h1>
        <p className='pt-2 md:pt-3 lg:pt-5 lg:pr-16 text-lg md:text-2xl'>
          {resume.profile?.headline} • {resume.contact?.pronouns}
        </p>
      </div>
    </header>

    <header className={`pb-4 ${headerFont.className} hidden print:flex justify-between items-end`}>
      <h1 className='text-5xl font-semibold text-sky-800'>
        {resume.contact?.fullName}
      </h1>
      <p>
        {resume.profile?.headline} • {resume.contact?.pronouns} • https://bluefeet.dev
      </p>
    </header>

    <div className='fixed flex gap-x-4 bottom-4 right-4 w-max print:hidden'>
      <DashButton onClick={isPlaying ? pausePlaying : startPlaying} aria-label={isPlaying ? 'Pause Nature Sounds' : 'Play Nature Sounds'}>
        <PlayPauseIcon className='w-10 h-10' />
      </DashButton>
      <DashButton onClick={isNearTop ? scrollToMain : scrollToTop} aria-label={isNearTop ? 'Scroll to Content' : 'Scroll to Top'}>
        <ArrowDownIcon className={`w-10 h-10 transition ease-in-out duration-300 ${isNearTop ? '' : 'rotate-180'}`} />
      </DashButton>
    </div>

    <main ref={mainRef} className='flex flex-col lg:flex-row p-4 md:p-8 pt-0 lg:pt-8 ml-auto mr-auto max-w-6xl print:p-0'>
      <div className='lg:w-2/5 flex flex-wrap lg:flex-col lg:order-2 lg:pl-8 print:flex-row print:pl-0 print:pb-2'>
        <AboutSection className='print:pb-2' />
        <Divider />

        <ObjectiveSection className='md:w-1/2 lg:w-full print:w-1/2' />
        <Divider className='md:hidden lg:block' />

        <InfoSection className='md:w-1/2 lg:w-full print:w-1/2' />
        <Divider className='lg:hidden' />
      </div>
      <div className='lg:w-3/5 lg:order-1'>
        <SkillsSection />
        <Divider className='lg:hidden mb-5' />

        <ExperienceSection className='lg:pt-4 print:pt-0' />
        <Divider className='lg:hidden mt-5 mb-5' />

        <RecommendationsSection className='lg:pt-4 print:hidden' />
      </div>
    </main>

    <footer className='border-zinc-800 border-solid border-t-2 text-center p-4 pb-20 print:hidden'>
      <Details>
        Site built with <Link href='https://nextjs.org/'>Next.js</Link> and <Link href='https://tailwindcss.com/'>Tailwind CSS</Link>, hosted for free by <Link href='https://pages.cloudflare.com/'>Cloudflare</Link>, source on <Link href='https://github.com/bluefeet/bluefeet.dev'>GitHub</Link>.<br />
        &copy; {resume.contact?.fullName}
      </Details>
    </footer>

    <footer className='text-right pt-8 hidden print:flex justify-between'>
      <Details>Generated {formatDate(new Date, 'PPP')}</Details>
      <Details>&copy; {resume.contact?.fullName}</Details>
    </footer>
  </>
}

export default Page
