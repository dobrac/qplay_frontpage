import Head from "next/head";
import axios from "axios";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import emoji from 'remark-emoji';
import {ChangelogEntry} from "../../types/ChangelogEntry";
import type {GetStaticProps, NextPage} from 'next'
import he from "he"
import Banner from "../../components/Banner";

interface ChangeLogNewProps {
  changelogNew: ChangelogEntry
}

const ChangeLogNew: NextPage<ChangeLogNewProps> = ({changelogNew}) => {
  function convertDate(date: string) {
    return new Date(date).toLocaleString("cs-CZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: false,
      timeZone: "Europe/Prague"
    })
  }

  function ChangeLogNewRender() {
    return (
      <div>
        <div className="newinfo">
          <span className="tag" style={{backgroundColor: changelogNew.typecolor}}>{changelogNew.typename}</span>
          <time dateTime={changelogNew.timestamp}>{convertDate(changelogNew.timestamp)}</time>
        </div>
        <h1 className='title'>
          {changelogNew.headline}
        </h1>
        <div className="notes">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks, emoji]}
                         rehypePlugins={[rehypeRaw]}>
            {he.decode(changelogNew.notes)}
          </ReactMarkdown>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>QPlay.cz | Seznam změn</title>
        <meta name="description" content="Seznam změn na našem serveru."/>
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>Seznam Změn</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <section className="news">
          <div className="container">
            <ChangeLogNewRender/>
          </div>
        </section>
      </section>
    </div>
  )
}

// @ts-ignore
export const getStaticProps: GetStaticProps = async (context) => {
  const data = await axios.get(
    'https://changelog.qplay.cz/api/changelog/' + context.params?.id
  )

  if (!data?.data || !data.data.published) {
    return {
      redirect: {
        destination: "/seznam-zmen",
      },
    }
  }

  return {
    props: {
      changelogNew: data.data
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}


// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getStaticPaths() {
  const res = await axios.get<ChangelogEntry[]>(
    'https://changelog.qplay.cz/api/changelog'
  )

  if (!res.data) {
    return {}
  }

  // Get the paths we want to pre-render based on posts
  const paths = res.data
    .filter((item) => item.published)
    .map((entry) => ({
      params: {id: entry.id},
    }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return {paths, fallback: 'blocking'}
}

export default ChangeLogNew
