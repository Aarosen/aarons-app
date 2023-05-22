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
        <title>About - Aaron Rosenzweig</title>
        <meta
          name="description"
          content="I’m Aaron, a Product Manager based in New York City. Fueling innovation, driving success, and shaping tomorrow's possibilities."
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
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Aaron, a Product Manager based in New York City. Fueling innovation, driving success, and shaping tomorrow&apos;s possibilities.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am Aaron Rosenzweig, an inspiring and entrepreneurial individual 
                who has fearlessly embraced risks in the startup world. Throughout 
                my journey, I have founded three companies, each driven by my 
                unwavering passion and determination. While these ventures didn&apos;t 
                achieve the desired outcomes, they have taught me invaluable lessons 
                and fueled my personal and professional growth.
              </p>
              <p>
                Not only have I taken risks in my career, but I have also made bold 
                decisions in my personal life. I relocated twice, leaving the familiarity 
                of home to pursue my aspirations. The second move brought me to the 
                vibrant city of New York, where I found a remarkable opportunity at 
                American Express, showcasing my adaptability and professional acumen.
              </p>
              <p>
                My journey is a testament to the power of resilience, embracing failures 
                as stepping stones to success, and continuously seeking personal and 
                professional growth. I invite you to connect with me to learn from my 
                entrepreneurial experiences and be inspired by my fearless approach 
                to achieving goals.
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
                href="mailto:contactaaronrosenzweig@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                contactaaronrosenzweig@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
