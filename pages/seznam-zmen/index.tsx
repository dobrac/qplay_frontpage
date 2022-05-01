import axios from "axios";
import Link from "next/link"
import { useCallback, useEffect, useState, Fragment } from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import emoji from 'remark-emoji';

const ChangeLog = () => {
    const [changelogNews, setchangelogNews] = useState([])
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchchangelogNews();
    }, []);

    const fetchchangelogNews = useCallback(async () => {
        const data = await axios.get(
            'https://changelog.qplay.cz/api/changelog'
        )
        if (data?.data) {
            setPages(Math.round(data.data.filter((item:any) => item.published).length / 9))
            setchangelogNews(data.data.filter((item:any) => item.published))
        }
    }, [])

    function getImage(text: string) {
        const image = text.match(/src="(.*?)"/);
        return image ? image[0].replace('src="', '').replace('"', '') : '/images/404image.png';
    }

    function replaceTags(text: string) {
        return text.replace(/<br[^>]*>/gi, '').replace(/<p>(.*)<\/p>/g, '').replace(/<img .*?>/g, '');
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
        const news = getPaginatedData().map(
            (element) => {
                if (element['published']) {
                    return (
                        <div className="col-md-4 mb-4" key={element['id']}>
                            <div className="card">
                                <div className="card-image" style={{ backgroundImage: `url('` + getImage(element['notes']) + `')` }}></div>
                                <div className="card-body">
                                    <span className="tag" style={{ backgroundColor: element['typecolor'] }}>{element['typename']}</span>
                                    <h5 className="card-title">{element['headline']}</h5>
                                    <p className="card-text">
                                        <ReactMarkdown remarkRehypeOptions={{allowDangerousHtml: true}} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm, remarkBreaks, emoji]}>{replaceTags(element['notes'])}</ReactMarkdown>
                                    </p>
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

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(page: Number) {
        const pageNumber = Number(page);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * 9 - 9;
        const endIndex = startIndex + 9;
        return changelogNews.slice(startIndex, endIndex);
    };

    function ChangeLogPagination() {
        const listItems = Array.from(Array(pages).keys()).map((index) =>
            <Fragment key={index}>
                {index+1 >= currentPage-1 && index+1 <= currentPage+1 ?
                    <Fragment>
                        {currentPage == index+1 ?
                            <li className="paginate_button page-item active"><a className="page-link">{ index+1 }</a></li>
                            :
                            <li className="paginate_button page-item" onClick={(e) => changePage(index+1)}><a className="page-link">{ index+1 }</a></li>
                        }
                    </Fragment>
                    :
                    ''
                }
            </Fragment>
        );
        return (
            <div className="d-flex justify-content-center mt-2">
                <ul className="pagination">
                    {currentPage == 1 ?
                        <li className="paginate_button page-item previous disabled"><a className="page-link">Předchozí</a></li>
                        :
                        <li className="paginate_button page-item previous" onClick={(e) => goToPreviousPage()}><a className="page-link">Předchozí</a></li>
                    }
                    {currentPage > 2 ?
                        <Fragment>
                            <li className="paginate_button page-item" onClick={(e) => changePage(1)}><a className="page-link">1</a></li>
                            <li className="paginate_button page-item disabled"><a className="page-link">...</a></li>
                        </Fragment>
                        :
                        ''
                    }
                    {listItems}
                    {currentPage < pages-1 ?
                        <Fragment>
                            <li className="paginate_button page-item disabled"><a className="page-link">...</a></li>
                            <li className="paginate_button page-item" onClick={(e) => changePage(pages)}><a className="page-link">{pages}</a></li>
                        </Fragment>
                        :
                        ''
                    }
                    {currentPage == pages ?
                        <li className="paginate_button page-item next disabled"><a className="page-link">Další</a></li>
                        :
                        <li className="paginate_button page-item next" onClick={(e) => goToNextPage()}><a className="page-link">Další</a></li>
                    }
                </ul>
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
                        <ChangeLogPagination />
                    </div>
                </section>
            </section>
        </div>
    )
}

export default ChangeLog
