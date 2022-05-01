import axios from "axios";
import Link from "next/link"
import { useCallback, useEffect, useState } from "react";

const ChangeLog = () => {
    const [changelogNews, setchangelogNews] = useState([])

    const fetchchangelogNews = useCallback(async () => {
        const data = await axios.get(
            'https://changelog.qplay.cz/api/changelog'
        )
        if (data?.data) {
            setchangelogNews(data.data)
        }
    }, [])

    useEffect(() => {
        fetchchangelogNews();
    }, []);

    function getImage(text: string) {
        const image = text.match(/src="(.*?)"/);
        return image ? image[0].replace('src="', '').replace('"', '') : '/images/404image.png';
    }

    function replaceTags(text: string) {
        return text.replace(/<br[^>]*>/gi, '').replace(/<p>(.*)<\/p>/g, '').replace(/\*\*([^*]+?)\*\*/g, "<b>$1<\/b>").replace(/<img .*?>/g, '');
    }

    function convertDate(date: string) {
        return new Date(date).toLocaleString("cs-CZ", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour12: false
        })
    }

    function ChangeLogNewsRender() {
        const news = changelogNews.map(
            (element) => {
                if (element['published']) {
                    return (
                        <div className="col-md-4 mb-4" key={element['id']}>
                            <div className="card">
                                <div className="card-image" style={{ backgroundImage: `url('` + getImage(element['notes']) + `')` }}></div>
                                <div className="card-body">
                                    <span className="tag" style={{ backgroundColor: element['typecolor'] }}>{element['typename']}</span>
                                    <h5 className="card-title">{element['headline']}</h5>
                                    <p className="card-text" dangerouslySetInnerHTML={{ __html: replaceTags(element['notes']) }}></p>
                                    <p className="mb-0 readmore">
                                        <Link href={`/seznam-zmen/` + element['id']} passHref>
                                            <a>Číst více</a>
                                        </Link>
                                    </p>
                                </div>
                                <div className="card-footer">
                                    {convertDate(element['timestamp'])}
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        )
        return (
            <div className="row">
                {news}
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
                        <ChangeLogNewsRender />
                    </div>
                </section>
            </section>
        </div>
    )
}

export default ChangeLog
