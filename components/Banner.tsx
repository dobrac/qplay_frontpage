import {FC, PropsWithChildren} from "react";
import Image from "next/image";
import bannerImage from "../public/images/banner-3.jpg"
import bannerImageW from "../public/images/banner-3.jpg"

const Banner: FC<PropsWithChildren<{ sm?: boolean }>> = ({children, sm}) => {
  return (
    <section className={"banner " + (sm ? "sm" : "")}>
      {sm ?
        <div className="banner-image">
          <Image
            priority={true}
            src={bannerImage}
            alt="banner"
            fill={true}
            sizes="100vw"
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "center"
            }}/>
        </div>
        :
        //<a href="https://vip.qplay.cz">
        <div className="banner-image-winter">
          <Image
            priority={true}
            src={bannerImageW}
            alt="banner"
            fill={true}
            sizes="100vw"
            style={{
              maxWidth: "100%",
              objectFit: "cover",
              objectPosition: "center"
            }}/>
        </div>
        //</a>
      }
      {children}
    </section>
  );
}

export default Banner
