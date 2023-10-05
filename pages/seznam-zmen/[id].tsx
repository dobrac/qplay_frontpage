import Head from "next/head";
import axios from "axios";
import ReactMarkdown from 'react-markdown'
import {remark} from 'remark'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import emoji from 'remark-emoji';
import {ChangelogEntry} from "../../types/ChangelogEntry";
import type {GetStaticProps, NextPage} from 'next'
import he from "he"
import Banner from "../../components/Banner";
import strip from 'strip-markdown'
import {ParsedUrlQuery} from "querystring";
import {convertDate} from "../../utils/date";

interface ChangeLogNewProps {
  changelogEntry: ChangelogEntry
  description: string
}

const ChangeLogNew: NextPage<ChangeLogNewProps> = ({changelogEntry, description}) => {
  function ChangeLogEntryRender() {
    return (
      <div>
        <div className="newinfo">
          <span className="tag" style={{backgroundColor: changelogEntry.typecolor}}>{changelogEntry.typename}</span>
          <time dateTime={changelogEntry.timestamp}>{convertDate(changelogEntry.timestamp)}</time>
        </div>
        <h1 className='title'>
          {changelogEntry.headline}
        </h1>
        <div className="notes">
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkBreaks, emoji]}
                         rehypePlugins={[rehypeRaw]}>
            {he.decode(changelogEntry.notes)}
          </ReactMarkdown>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>{`${changelogEntry.headline} | QPlay.cz`}</title>
        <meta name="description" content={description}/>
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>{changelogEntry.headline}</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <section className="news">
          <div className="container">
            <ChangeLogEntryRender/>
          </div>
        </section>
      </section>
    </div>
  )
}

interface StaticPageParams extends ParsedUrlQuery {
  id?: string
}

export const getStaticProps: GetStaticProps<ChangeLogNewProps, StaticPageParams> = async (context) => {
  const changelogId = context.params?.id as (string | undefined)
  if (!changelogId) {
    return {
      redirect: {
        statusCode: 301,
        destination: "/seznam-zmen",
      },
      revalidate: 10, // In seconds
    }
  }
  const data = await axios.get(
    'https://changelog.qplay.cz/api/changelog/' + encodeURIComponent(changelogId)
  )

  if (!data?.data || !data.data.published) {
    return {
      redirect: {
        statusCode: 302,
        destination: "/seznam-zmen",
      },
      revalidate: 10, // In seconds
    }
  }

  const stripNotes = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(emoji)
    .use(strip)
    .process(he.decode(data.data.notes))
  const description = String(stripNotes)
    .replaceAll("\n", " ")
    .replace(/\s{2,}/g, ' ')
    .substring(0, 160)
    .trim()

  return {
    props: {
      changelogEntry: data.data,
      description
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 60, // In seconds
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
    return {paths: [], fallback: 'blocking'}
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
