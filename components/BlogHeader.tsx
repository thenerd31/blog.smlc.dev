import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import styles from './BlogHeader.module.css'
import PageGradient from './PageGradient'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <div className="pb-10 pt-16 md:pb-12 ">
          <div className="absolute inset-0 overflow-hidden z-[-1]">
            <div
              className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
              aria-hidden="true"
            >
              <PageGradient />
            </div>
          </div>
          <header className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex items-center space-x-4">
              <img src="/brain.png" className="w-24 h-24" />
              <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
                {title}
              </h1>
            </div>
            <h4
              className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
            >
              <PortableText value={description} />
            </h4>
          </header>
        </div>
      )

    case 2:
      return (
        <header>
          <div className="flex items-center space-x-4 mb-20 mt-8">
            <img src="/brain.png" className="w-12 h-12" />
            <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
              <Link href="/" className="hover:underline">
                {title}
              </Link>
            </h2>
          </div>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}
