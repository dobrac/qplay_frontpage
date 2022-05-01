import { useRouter } from 'next/router'
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const ChangeLogNew = () => {
    const router = useRouter()
    const { id } = router.query

    const [changelogNew, setchangelogNew] = useState({headline: '', notes: '', typecolor: '', typename: '', timestamp: ''})

    const fetchchangelogNew = useCallback(async (newid:any) => {
        const data = await axios.get(
            'https://changelog.qplay.cz/api/changelog/' + newid
        )
        if (data?.data) {
            setchangelogNew(data.data)
            if (!data.data.published) {
                router.push('/seznam-zmen')
            }
        } else {
            router.push('/seznam-zmen')
        }
    }, [])

    useEffect(() => {
        if (router.isReady) {
            fetchchangelogNew(id);
        }
    }, [router.isReady]);

    function convertDate(date: string) {
        return new Date(date).toLocaleString("cs-CZ", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour12: false
        })
    }

    function ChangeLogNewRender() {
        return (
            <div>
                <div className="newinfo">
                    <span className="tag" style={{ backgroundColor: changelogNew.typecolor }}>{changelogNew.typename}</span>
                    {convertDate(changelogNew.timestamp)}
                </div>
                <h1 className='title'>
                {changelogNew.headline}
                </h1>
                <p className="notes">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>{changelogNew.notes}</ReactMarkdown>
                </p>
            </div>
        )
    }

    return (
        <div>
            <section className="banner sm">
                <div className="pagename">
                    <h1>Seznam Změn</h1>
                </div>
            </section>
            <section className="pagecontent">
                <section className="news">
                    <div className="container">
                        <ChangeLogNewRender />
                    </div>
                </section>
            </section>
        </div>
    )
}

export default ChangeLogNew
