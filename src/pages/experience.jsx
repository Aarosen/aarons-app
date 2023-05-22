import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'

import logoAmex from '@/images/logos/amex.png'
import logoKapital from '@/images/logos/kapital.png'
import logoMonifin from '@/images/logos/monifin.png'
import logoFande from '@/images/logos/fande.png'
import logoMoveminds from '@/images/logos/moveminds.svg'

const work = [
  {
    name: 'American Express',
    title: 'Product Manager',
    description:
      'Leading card and banking provider worldwide.',
    image: logoAmex,
  },
  {
    name: 'Kapital',
    title: 'Product Manager',
    description:
      'The treasury and credit platform to take control of your company.',
    image: logoKapital,
  },
  {
    name: 'Monifin',
    title: 'Entrepreneur',
    description:
      'A finanacial community that helps and empowers one another.',
    image: logoMonifin,
  },
  {
    name: 'Fan Demand',
    title: 'Product Manager',
    description:
      'Experiencing sports in a new way.',
    image: logoFande,
  },
  {
    name: 'Moveminds',
    title: 'Project Manager',
    description:
      'Consulting in sales and HR for large enterprises.',
    image: logoMoveminds,
  },
]

export default function Project() {
  return (
    <SimpleLayout>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {work.map((company) => (
          <li key={company.name} className="col-span-1 flex flex-col divide-y bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <div className="flex flex-1 flex-col p-8">
              <div>
                <Image
                  src={company.image}
                  alt=""
                  className="mx-auto h-12 w-12"
                  unoptimized
                />
              </div>
              <h3 className="mt-6 text-lg font-bold text-zinc-900 dark:text-zinc-100">{company.name}</h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-base text-zinc-900 dark:text-zinc-200">{company.title}</dd>
                <dt className="sr-only">Description</dt>
                <dd className="text-sm text-zinc-900 dark:text-zinc-200">{company.description}</dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}
