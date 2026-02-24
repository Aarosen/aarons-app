import Head from 'next/head'

import { Container } from '@/components/Container'

const skillCategories = [
  {
    title: 'Financial Strategy & Analysis',
    color: 'teal',
    skills: ['Financial Modeling', 'Risk Assessment', 'Compliance Strategy', 'Regulatory Adherence'],
  },
  {
    title: 'Business & Operations',
    color: 'blue',
    skills: ['Process Optimization', 'Enterprise Strategy', 'Go-to-Market Planning', 'Executive Communication'],
  },
  {
    title: 'Technology & Data',
    color: 'violet',
    skills: ['SQL', 'Data Analysis', 'API Strategy', 'Digital Payments', 'FinTech Solutions'],
  },
  {
    title: 'Product & Leadership',
    color: 'amber',
    skills: ['Product Roadmapping', 'Agile / Scrum', 'Hypothesis-Driven Approach', 'Stakeholder Management'],
  },
]

const colorMap = {
  teal: {
    wrapper: 'bg-teal-50 ring-1 ring-teal-100 dark:bg-teal-900/20 dark:ring-teal-800/30',
    title: 'text-teal-800 dark:text-teal-300',
    badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',
  },
  blue: {
    wrapper: 'bg-blue-50 ring-1 ring-blue-100 dark:bg-blue-900/20 dark:ring-blue-800/30',
    title: 'text-blue-800 dark:text-blue-300',
    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  },
  violet: {
    wrapper: 'bg-violet-50 ring-1 ring-violet-100 dark:bg-violet-900/20 dark:ring-violet-800/30',
    title: 'text-violet-800 dark:text-violet-300',
    badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
  },
  amber: {
    wrapper: 'bg-amber-50 ring-1 ring-amber-100 dark:bg-amber-900/20 dark:ring-amber-800/30',
    title: 'text-amber-800 dark:text-amber-300',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  },
}

const certifications = [
  { name: 'Building Your Data Story', place: 'Harvard Business Publishing', date: 'Jan 2023' },
  { name: 'Project Management Specialization', place: 'Google', date: 'Feb 2022' },
  { name: 'Agile Project Management', place: 'Google', date: 'Jan 2022' },
  { name: 'Technical Product Management', place: 'LinkedIn', date: 'Feb 2022' },
  { name: 'Interviewing for PM Jobs', place: 'LinkedIn', date: 'Apr 2022' },
  { name: 'Learn React Course', place: 'Codecademy', date: 'Jan 2022' },
  { name: 'Project Execution: Running the Project', place: 'Google', date: 'Dec 2021' },
  { name: 'Project Planning: Putting It All Together', place: 'Google', date: 'Dec 2021' },
  { name: 'Project Initiation: Starting a Successful Project', place: 'Google', date: 'Nov 2021' },
  { name: 'Foundations of UX Design', place: 'Google', date: 'Oct 2021' },
  { name: 'Foundations of Project Management', place: 'Google', date: 'Sep 2021' },
  { name: 'Analyze Data with R', place: 'Codecademy', date: 'Sep 2021' },
  { name: 'Brand and Product Management', place: 'IE University', date: 'Aug 2021' },
  { name: 'Learning Jira Software', place: 'LinkedIn', date: 'Sep 2021' },
  { name: 'Scrum: The Basics', place: 'LinkedIn', date: 'Aug 2021' },
  { name: 'Product Manager Learning Path', place: 'LinkedIn', date: 'Jul 2021' },
  { name: 'Product Management: Building a Product Roadmap', place: 'LinkedIn', date: 'Jul 2021' },
  { name: 'Product Management: Building a Product Strategy', place: 'LinkedIn', date: 'Jul 2021' },
  { name: 'Product Management: Customer Development', place: 'LinkedIn', date: 'Jul 2021' },
  { name: 'Product Management: Launching Your Product', place: 'LinkedIn', date: 'Jul 2021' },
  { name: 'Product Innovation for Product Managers', place: 'LinkedIn', date: 'Jul 2021' },
  { name: 'A Design Thinking Approach', place: 'LinkedIn', date: 'Jul 2021' },
  { name: 'Agile Development Specialization', place: 'University of Virginia Darden', date: 'Jan 2021' },
  { name: 'Managing an Agile Team', place: 'University of Virginia Darden', date: 'Jan 2021' },
  { name: 'Agile Analytics', place: 'University of Virginia Darden', date: 'Jan 2021' },
  { name: 'Business Development: Strategic Planning', place: 'LinkedIn', date: 'Feb 2021' },
  { name: 'Critical Thinking', place: 'LinkedIn', date: 'Feb 2021' },
  { name: 'Design Thinking: Customer Experience', place: 'LinkedIn', date: 'Feb 2021' },
  { name: 'Agile Rebranding', place: 'LinkedIn', date: 'Feb 2021' },
  { name: 'Create a Go-to-Market Plan', place: 'LinkedIn', date: 'Jan 2021' },
  { name: 'SEO: Link Building', place: 'LinkedIn', date: 'Feb 2021' },
]

const languages = [
  { name: 'English', level: 'Fluent', pct: 100 },
  { name: 'Spanish', level: 'Fluent', pct: 100 },
  { name: 'French', level: 'Intermediate', pct: 55 },
]

export default function Education() {
  return (
    <>
      <Head>
        <title>Education — Aaron Rosenzweig</title>
        <meta
          name="description"
          content="BBA in Finance from Tec de Monterrey, plus 30+ certifications in product management, data, and UX design."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <div className="mb-4 inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold tracking-wide text-teal-700 ring-1 ring-teal-600/20 dark:bg-teal-400/10 dark:text-teal-400 dark:ring-teal-400/20">
            Education & Skills
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Education &amp; Skills
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            A foundation in finance combined with continuous learning across product
            management, technology, and design.
          </p>
        </header>

        {/* Degree + Languages */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Degree
            </h2>
            <p className="mt-3 text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Tec de Monterrey
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Bachelor of Business Administration — Finance
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
              2016 – 2021
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Languages
            </h2>
            <ul className="mt-3 space-y-3">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {lang.name}
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400">{lang.level}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
                      style={{ width: `${lang.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Core Skills
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skillCategories.map((cat) => {
              const c = colorMap[cat.color]
              return (
                <div key={cat.title} className={`rounded-2xl p-5 ${c.wrapper}`}>
                  <h3 className={`text-sm font-semibold ${c.title}`}>{cat.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${c.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Certifications
            <span className="ml-3 text-sm font-normal text-zinc-500 dark:text-zinc-400">
              {certifications.length} credentials
            </span>
          </h2>
          <div className="mt-6 divide-y divide-zinc-100 dark:divide-zinc-800">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center justify-between gap-4 py-3 group"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                    {cert.name}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{cert.place}</p>
                </div>
                <span className="shrink-0 text-xs text-zinc-400 dark:text-zinc-500">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}
