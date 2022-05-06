import {FC, PropsWithChildren} from "react";
import Image from "next/image";
import bannerImage from "../public/images/banner-3.jpg"

const Banner: FC<PropsWithChildren<{sm?: boolean}>> = ({children, sm})=> {
  return(
    <section className={"banner " + (sm ? "sm" : "")}>
      <div className="banner-image">
        <Image src={bannerImage} layout={"fill"} placeholder={"blur"} objectFit={"cover"} objectPosition={"center"} alt="banner" />
      </div>
      {children}
    </section>
  )
}

export default Banner