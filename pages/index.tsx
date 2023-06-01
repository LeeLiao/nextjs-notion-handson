import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

// default page content here
// export default function NotionDomainPage(props) {
//   return <NotionPage {...props} />
// }

export default function NotionDomainPage(props) {
  return (
    <div>
      <section className="hero-section">
        {/* Your content for the first hero section */}
      </section>

      <section className="hero-section">
        {/* Your content for the second hero section */}
      </section>

      <NotionPage {...props} />
    </div>
  )
}