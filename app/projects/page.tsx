import type { Metadata } from 'next'
import ProjectsHero from '@/components/projects/ProjectsHero'
import ProjectsGrid from '@/components/projects/ProjectsGrid'
import CallToAction from '@/components/home/CallToAction'

export const metadata: Metadata = {
  title: 'Projects — Lemonade Fizz Tech',
  description:
    'Selected work from Lemonade Fizz Tech — NGO platforms, government initiatives, gaming tournaments, business websites, and more.',
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <CallToAction />
    </>
  )
}