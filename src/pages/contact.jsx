import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import clsx from 'clsx'
import { LinkedInIcon } from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-center text-lg font-medium text-zinc-800 transition dark:text-zinc-200 hover:text-teal-500 dark:hover:text-teal-500"
      >
        <Icon className="h-8 w-8 flex-none fill-zinc-800 dark:fill-zinc-200 transition group-hover:fill-teal-500 dark:group-hover:fill-teal-500" />
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

export default function Contact() {
  return (
    <SimpleLayout>
      <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">Contact Me</h2>
          <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I invite you to connect with me and see what opportunities we can find.
          </p>
          <div className="flex justify-center space-x-4">
            <SocialLink href="https://www.linkedin.com/in/the-aaron-rosenzweig/" icon={LinkedInIcon} className="mt-4">
              Connect in LinkedIn
            </SocialLink>
          </div>
        </div>
        <div className="mt-4 mx-auto max-w-2xl">
          <ul role="list" className="flex justify-center space-x-4">
            <SocialLink
              href="mailto:contactaaronrosenzweig@gmail.com"
              icon={MailIcon}
              className="mt-5 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 hover:fill-teal-500 dark:hover:fill-teal-500"
            >
              contactaaronrosenzweig@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </SimpleLayout>
  )
}