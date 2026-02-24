import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  LinkedInIcon,
  MediumIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About — Aaron Rosenzweig</title>
        <meta
          name="description"
          content="Strategic Senior Product Manager with 7+ years leading digital financial products at Western Union and American Express."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <div className="mb-4 inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold tracking-wide text-teal-700 ring-1 ring-teal-600/20 dark:bg-teal-400/10 dark:text-teal-400 dark:ring-teal-400/20">
              Senior Product Manager · 7+ Years
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Aaron, building{' '}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent dark:from-teal-400 dark:to-cyan-300">
                financial products
              </span>{' '}
              that move millions of people.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m a Strategic Senior Product Manager with 7+ years of experience
                leading digital financial products across global enterprises and
                high-growth fintech startups. My career has been defined by a
                relentless pursuit of impact — translating complex regulatory,
                technical, and business constraints into simple, scalable user
                experiences.
              </p>
              <p>
                Today at Western Union, I own the end-to-end kiosk channel product
                strategy across U.S. retail partners. I&apos;ve driven a 44% increase
                in customer usage, led the full redesign of the next-generation money
                transfer kiosk, and launched new retail partnerships with Kroger,
                Brightwell, and Lowe&apos;s — expanding access to financial services for
                millions of customers nationwide.
              </p>
              <p>
                Before Western Union, I spent nearly three years at American Express
                where I spearheaded the launch of One AP, an automated accounts payable
                platform that reduced manual vendor payment efforts by 40%. I&apos;ve also
                held product roles at Kapital and founded three startups — each failure
                a stepping stone toward sharper thinking and greater resilience.
              </p>
              <p>
                I relocated from Mexico to New York City to pursue my ambitions, and
                every chapter of that journey has reinforced one belief: the best
                products are built at the intersection of deep user empathy and
                rigorous business thinking. Let&apos;s connect.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://www.linkedin.com/in/the-aaron-rosenzweig/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="https://medium.com/@aaron.rosenzweig" icon={MediumIcon} className="mt-4">
                Follow on Medium
              </SocialLink>
              <SocialLink
                href="mailto:arirm95@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                arirm95@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
