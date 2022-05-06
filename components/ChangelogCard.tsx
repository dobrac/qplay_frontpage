import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import emoji from "remark-emoji";
import Link from "next/link";
import {ChangelogEntry} from "../types/ChangelogEntry";
import he from "he"
import ImageCard from "./ImageCard";

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

export default function ChangelogCard({element}: { element: ChangelogEntry }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <ImageCard imagesrc={getImage(element['notes'])}></ImageCard>
        <div className="card-body">
          <span className="tag" style={{backgroundColor: element['typecolor']}}>{element['typename']}</span>
          <h5 className="card-title">{element['headline']}</h5>
          <div className="card-text">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}
                           remarkPlugins={[remarkGfm, remarkBreaks, emoji]}>
              {he.decode(replaceTags(element['notes']))}
            </ReactMarkdown>
          </div>
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