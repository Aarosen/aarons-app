import Head from 'next/head'
import Image from 'next/image'

import { Container } from '@/components/Container'

import logoWesternUnion from '@/images/logos/westernunion.svg'
import logoAmex from '@/images/logos/amex.png'
import logoKapital from '@/images/logos/kapital.png'
import logoMonifin from '@/images/logos/monifin.png'
import logoFande from '@/images/logos/fande.png'
import logoMoveminds from '@/images/logos/moveminds.svg'

const work = [
  {
    name: 'Western Union',
    title: 'Senior Product Manager',
    logo: logoWesternUnion,
    period: 'May 2025 – Present',
    current: true,
    description:
      'Global leader in cross-border money movement, serving millions of customers across 200+ countries through retail and digital channels.',
    bullets: [
      'Owned end-to-end kiosk channel product strategy across U.S. retail partners, driving significant growth in customer adoption and transaction efficiency',
      'Led the full redesign and modernization of Western Union\'s next-generation money transfer kiosk, revamping the retail experience and improving accessibility across diverse user segments',
      'Drove strategic retail expansion by building and scaling partnerships with Kroger, Brightwell, and Lowe\'s, enabling rapid kiosk deployment across key national markets',
      'Launched and operationalized kiosks in Lowe\'s locations nationwide, unlocking a new distribution channel for in-store money movement',
    ],
    metrics: [
      { value: '44%', label: 'Customer Usage Increase' },
      { value: '1.62%', label: 'Transaction Speed Improvement' },
    ],
  },
  {
    name: 'American Express',
    title: 'Product Manager',
    logo: logoAmex,
    period: 'June 2022 – April 2025',
    current: false,
    description:
      'Global financial services company offering payment, expense management, and business financing solutions to millions of enterprise clients worldwide.',
    bullets: [
      'Led strategic initiatives to optimize financial transaction workflows, improving efficiency and compliance across enterprise clients',
      'Spearheaded the launch of One AP, an automated accounts payable solution that streamlined vendor payment operations at scale',
      'Developed data-driven strategies to streamline enterprise onboarding, reducing integration time while enhancing customer adoption',
      'Partnered with risk and compliance teams to define security standards, ensuring adherence to financial regulations',
    ],
    metrics: [
      { value: '40%', label: 'Reduction in Manual Payments' },
      { value: '25%', label: 'Faster Processing Time' },
      { value: '20%', label: 'Faster Onboarding' },
    ],
  },
  {
    name: 'Kapital',
    title: 'Product Manager',
    logo: logoKapital,
    period: 'August 2021 – May 2022',
    current: false,
    description:
      'Treasury and credit platform helping businesses take control of their cash flow and credit operations.',
    bullets: [
      'Led the redesign of Kapital\'s enterprise lending platform, improving customer retention and growing monthly active users',
      'Analyzed financial risk factors and integrated compliance frameworks into the product roadmap, reducing regulatory exposure',
      'Developed API strategies for seamless financial integrations, enabling business clients to streamline cash flow and credit operations',
      'Worked with leadership to prioritize high-impact initiatives based on financial data and customer insights',
    ],
    metrics: [
      { value: '18%', label: 'Customer Retention Improvement' },
      { value: '25%', label: 'MAU Increase' },
      { value: '30%', label: 'Regulatory Risk Reduction' },
    ],
  },
  {
    name: 'Monifin',
    title: 'Entrepreneur',
    logo: logoMonifin,
    period: '2020 – 2021',
    current: false,
    description:
      'A financial community platform that helps and empowers members to achieve their financial goals.',
    bullets: [],
    metrics: [],
  },
  {
    name: 'Fan Demand',
    title: 'Product Manager',
    logo: logoFande,
    period: '2019 – 2020',
    current: false,
    description:
      'Sports experience platform redefining fan engagement and in-person event discovery.',
    bullets: [],
    metrics: [],
  },
  {
    name: 'Moveminds',
    title: 'Project Manager',
    logo: logoMoveminds,
    period: '2018 – 2019',
    current: false,
    description:
      'Enterprise consulting firm specializing in sales and HR transformation for large organizations.',
    bullets: [],
    metrics: [],
  },
]

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience — Aaron Rosenzweig</title>
        <meta
          name="description"
          content="7+ years leading digital financial products at Western Union, American Express, and Kapital."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <div className="mb-4 inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold tracking-wide text-teal-700 ring-1 ring-teal-600/20 dark:bg-teal-400/10 dark:text-teal-400 dark:ring-teal-400/20">
            7+ Years of Experience
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Work Experience
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            From founding startups to driving product strategy at global enterprises —
            a career built on translating complexity into scalable, impactful products.
          </p>
        </header>

        <div className="relative mt-16 sm:mt-20">
          {/* Timeline vertical line */}
          <div className="absolute left-5 top-3 hidden h-full w-px bg-gradient-to-b from-teal-500 via-zinc-200 to-transparent dark:via-zinc-700 sm:block" />

          <div className="space-y-10">
            {work.map((role) => (
              <div key={role.name} className="relative sm:pl-16">
                {/* Timeline dot */}
                <div
                  className={`absolute left-[14px] top-6 hidden h-3 w-3 rounded-full border-2 sm:block ${
                    role.current
                      ? 'border-teal-500 bg-teal-500'
                      : 'border-teal-400 bg-white dark:bg-zinc-900'
                  }`}
                />

                <div className="group rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-200 hover:border-teal-200 hover:shadow-md dark:border-zinc-700/40 dark:bg-zinc-900 dark:hover:border-teal-800/60">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="flex h-12 w-12 flex-none items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
                      <Image
                        src={role.logo}
                        alt={role.name}
                        className="h-8 w-8 object-contain"
                        unoptimized
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                            {role.name}
                            {role.current && (
                              <span className="ml-2 inline-flex items-center rounded-full bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                                Current
                              </span>
                            )}
                          </h2>
                          <p className="mt-0.5 text-sm font-medium text-teal-600 dark:text-teal-400">
                            {role.title}
                          </p>
                        </div>
                        <span className="shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
                          {role.period}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        {role.description}
                      </p>

                      {role.bullets.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {role.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-500" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}

                      {role.metrics.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {role.metrics.map((metric) => (
                            <div
                              key={metric.label}
                              className="rounded-lg bg-teal-50 px-3 py-2 ring-1 ring-teal-100 dark:bg-teal-900/20 dark:ring-teal-800/30"
                            >
                              <span className="text-base font-bold text-teal-600 dark:text-teal-400">
                                {metric.value}
                              </span>
                              <span className="ml-1.5 text-xs text-teal-700/70 dark:text-teal-400/70">
                                {metric.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
