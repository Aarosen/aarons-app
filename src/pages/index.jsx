import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  LinkedInIcon,
  MediumIcon
} from '@/components/SocialIcons'
import logoAmex from '@/images/logos/amex.png'
import logoKapital from '@/images/logos/kapital.png'
import logoWesternUnion from '@/images/logos/westernunion.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-400" />
    </Link>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Western Union',
      title: 'Senior Product Manager',
      logo: logoWesternUnion,
      start: 'May 2025',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'American Express',
      title: 'Product Manager',
      logo: logoAmex,
      start: 'Jun 2022',
      end: 'Apr 2025',
    },
    {
      company: 'Kapital',
      title: 'Product Manager',
      logo: logoKapital,
      start: 'Aug 2021',
      end: 'May 2022',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Recent Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center overflow-hidden rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7 object-contain" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end.label ?? role.end}`}
              >
                <time>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="/experience" variant="secondary" className="group mt-6 w-full">
        View Full Experience
        <ArrowDownIcon className="h-4 w-4 rotate-[-90deg] stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '44%', label: 'Kiosk Usage Growth' },
  { value: '40%', label: 'AP Effort Reduced' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Aaron Rosenzweig — Senior Product Manager</title>
        <meta
          name="description"
          content="Strategic Senior Product Manager with 7+ years leading digital financial products at Western Union and American Express."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold tracking-wide text-teal-700 ring-1 ring-teal-600/20 dark:bg-teal-400/10 dark:text-teal-400 dark:ring-teal-400/20">
            Senior Product Manager · New York City
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-300">
              Aaron Rosenzweig
            </span>
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Strategic Senior Product Manager with 7+ years leading digital
            financial products across global enterprises and high-growth fintech
            startups. Currently at Western Union, driving omnichannel kiosk
            experiences used by millions of customers across national retail partners.
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-zinc-100 pt-6 dark:border-zinc-800">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {stat.value}
                </dd>
                <dt className="mt-0.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex gap-6">
            <SocialLink
              href="https://medium.com/@aaron.rosenzweig"
              aria-label="Follow on Medium"
              icon={MediumIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/the-aaron-rosenzweig/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                About Me
              </h2>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                Expert in payments, kiosks, APIs, compliance, and retail partnerships.
                Known for translating complex regulatory, technical, and business
                constraints into simple, scalable user experiences.
              </p>
              <Button href="/about" variant="secondary" className="mt-4 w-full group">
                Read More
                <ArrowDownIcon className="h-4 w-4 rotate-[-90deg] stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
              </Button>
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
