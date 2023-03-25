import Head from "next/head";
import axios from "axios";
import {Fragment, useEffect, useState} from "react";
import {ChangelogEntry} from "../../types/ChangelogEntry";
import ChangelogCard from "../../components/ChangelogCard";
import Banner from "../../components/Banner";

interface ChangeLogProps {
  changelogNews: ChangelogEntry[]
}

export default function ChangeLog({changelogNews}: ChangeLogProps) {
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPages(Math.round(changelogNews.length / 9))
  }, [changelogNews.length]);

  function ChangeLogNewsRender() {
    const news = getPaginatedData().map(
      (element) => {
        if (element['published']) {
          return (
            <ChangelogCard key={element['id']} element={element}/>
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
        {index + 1 >= currentPage - 1 && index + 1 <= currentPage + 1 ?
          <Fragment>
            {currentPage == index + 1 ?
              <li className="paginate_button page-item active"><a className="page-link">{index + 1}</a></li>
              :
              <li className="paginate_button page-item" onClick={(e) => changePage(index + 1)}><a
                className="page-link">{index + 1}</a></li>
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
            <li className="paginate_button page-item previous" onClick={(e) => goToPreviousPage()}><a
              className="page-link">Předchozí</a></li>
          }
          {currentPage > 2 ?
            <Fragment>
              <li className="paginate_button page-item" onClick={(e) => changePage(1)}><a className="page-link">1</a>
              </li>
              <li className="paginate_button page-item disabled"><a className="page-link">...</a></li>
            </Fragment>
            :
            ''
          }
          {listItems}
          {currentPage < pages - 1 ?
            <Fragment>
              <li className="paginate_button page-item disabled"><a className="page-link">...</a></li>
              <li className="paginate_button page-item" onClick={(e) => changePage(pages)}><a
                className="page-link">{pages}</a></li>
            </Fragment>
            :
            ''
          }
          {currentPage == pages ?
            <li className="paginate_button page-item next disabled"><a className="page-link">Další</a></li>
            :
            <li className="paginate_button page-item next" onClick={(e) => goToNextPage()}><a
              className="page-link">Další</a></li>
          }
        </ul>
      </div>
    )
  }

  return (
    <div>
      <Head>
        <title>Seznam změn | QPlay.cz</title>
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
            <ChangeLogNewsRender/>
            <ChangeLogPagination/>
          </div>
        </section>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios.get<ChangelogEntry[]>(
    'https://changelog.qplay.cz/api/changelog'
  )

  let changelogNews: ChangelogEntry[] = []
  if (res?.data) {
    changelogNews = res.data.filter((item) => item.published)
  }

  return {
    props: {
      changelogNews: changelogNews
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}
