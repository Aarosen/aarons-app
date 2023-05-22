import { Container } from '@/components/Container'
import { Card } from '@/components/Card'

function Education() {
  let skills = [
    {
      name: 'Building Your Data Story – Leverage the Power of Data',
      place: 'Harvard Business Publishing Corporate Learning',
      date: 'January 2023',
    },
    {
      name: 'Interviewing for Product Management Jobs',
      place: 'LinkedIn',
      date: 'April 2022',
    },
    {
      name: 'Project Management Specialization',
      place: 'Google',
      date: 'February 2022',
    },
    {
      name: 'Technical Product Management',
      place: 'LinkedIn',
      date: 'February 2022',
    },
    {
      name: 'Agile Project Management',
      place: 'Google',
      date: 'January 2022',
    },
    {
      name: 'Learn React Course',
      place: 'Codecademy',
      date: 'January 2022',
    },
    {
      name: 'Project Execution: Running the Project',
      place: 'Google',
      date: 'December 2021',
    },
    {
      name: 'Project Planning: Putting It All Together',
      place: 'Google',
      date: 'December 2021',
    },
    {
      name: 'Project Initiation: Starting a Successful Project',
      place: 'Google',
      date: 'November 2021',
    },
    {
      name: 'Foundations of User Experience (UX) Design',
      place: 'Google',
      date: 'October 2021',
    },
    {
      name: 'Foundations of Project Management',
      place: 'Google',
      date: 'September 2021',
    },
    {
      name: 'Learning Jira Software',
      place: 'LinkedIn',
      date: 'September 2021',
    },
    {
      name: 'Analyze Data with R Skill Path',
      place: 'Codecademy',
      date: 'September 2021',
    },
    {
      name: 'Brand and Product Management',
      place: 'IE University',
      date: 'August 2021',
    },
    {
      name: 'Scrum: The Basics',
      place: 'LinkedIn',
      date: 'August 2021',
    },
    {
      name: 'A Design Thinking Approach to Putting the Customer First',
      place: 'LinkedIn',
      date: 'July 2021',
    },
    {
      name: 'Product Innovation for Product Managers',
      place: 'LinkedIn',
      date: 'July 2021',
    },
    {
      name: 'Product Management: Building a Product Roadmap',
      place: 'LinkedIn',
      date: 'July 2021',
    },
    {
      name: 'Product Management: Building a Product Strategy',
      place: 'LinkedIn',
      date: 'July 2021',
    },
    {
      name: 'Product Management: Customer Development',
      place: 'LinkedIn',
      date: 'July 2021',
    },
    {
      name: 'Product Management: Launching Your Product',
      place: 'LinkedIn',
      date: 'July 2021',
    },
    {
      name: 'Product Manager Learning Path',
      place: 'LinkedIn',
      date: 'July 2021',
    },
    {
      name: 'Agile Rebranding',
      place: 'LinkedIn',
      date: 'February 2021',
    },
    {
      name: 'Business Development: Strategic Planning',
      place: 'LinkedIn',
      date: 'February 2021',
    },
    {
      name: 'Critical Thinking',
      place: 'LinkedIn',
      date: 'February 2021',
    },
    {
      name: 'Design Thinking: Customer Experience',
      place: 'LinkedIn',
      date: 'February 2021',
    },
    {
      name: 'SEO: Link Building',
      place: 'LinkedIn',
      date: 'February 2021',
    },
    {
      name: 'Agile Development Specialization',
      place: 'University of Virginia Darden School of Business',
      date: 'January 2021',
    },
    {
      name: 'Create a Go-to-Market Plan',
      place: 'LinkedIn',
      date: 'January 2021',
    },
    {
      name: 'Managing an Agile Team',
      place: 'University of Virginia Darden School of Business',
      date: 'January 2021',
    },
    {
      name: 'Agile Analytics',
      place: 'University of Virginia Darden School of Business',
      date: 'January 2021',
    },
  ]

  return (
    <div>
      <h1 className="text-3xl mb-2 font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">Skills</h1>
      {skills.map((skill) => (
        <Card as="li" key={skill.name}>
          <Card.Title>{skill.name}</Card.Title>
          <Card.Description>{skill.place}</Card.Description>
          <p className="relative z-10 flex text-sm font-medium text-zinc-400 transition dark:text-zinc-200 mb-2">
            {skill.date}
          </p>
        </Card>
      ))}
    </div>
  )
}

function Languages() {
  let languages = [
    {
      name: 'English',
      level: 'Fluent',
    },
    {
      name: 'Spanish',
      level: 'Fluent',
    },
    {
      name: 'French',
      level: 'Intermediate',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="ml-3 text-lg">Language</span>
      </h2>
      <ul className="mt-6 space-y-4">
        {languages.map((language) => (
          <li key={language.name} className="flex gap-4">
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Language</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {language.name}
              </dd>
              <dt className="sr-only">Level</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {language.level}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Degree() {
  return (
    <Card as="article">
      <Card.Title>
        Tecnologico de Monterrey
      </Card.Title>
      <Card.Description>Bachelor of Business Administration - BBA ° Finance</Card.Description>
      <Card.Description>2016 - 2018</Card.Description>
    </Card>
  )
}

export default function Experience() {
  return (
    <Container className="mt-24 md:mt-28">
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col gap-16">
          <Education></Education>
        </div>
        <div className="space-y-10 lg:pl-16 xl:pl-24">
          <Languages></Languages>
          <Degree></Degree>
        </div>
      </div>
    </Container>
  )
}
