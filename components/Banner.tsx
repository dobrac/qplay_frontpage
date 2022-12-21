import {FC, PropsWithChildren} from "react";
import Image from "next/image";
import bannerImage from "../public/images/bannerWinterLobby.png"
import bannerImageW from "../public/images/bannerWinterHigher.png"

const Banner: FC<PropsWithChildren<{sm?: boolean}>> = ({children, sm})=> {
  return(
    <section className={"banner " + (sm ? "sm" : "")}>
      {sm ? 
      <div className="banner-image" >
        <Image priority={true} src={bannerImage} layout={"fill"} objectFit={"cover"} objectPosition={"center"} alt="banner" />
      </div>
      :
      <a href="https://vip.qplay.cz">
        <div className="banner-image-winter">
          if (window.screen.width {">"} 768) {
            <Image priority={true} src={bannerImageW} layout={"fill"} objectFit={"cover"} objectPosition={"center"} alt="banner" />
          } else {
            <Image priority={true} src={bannerImage} layout={"fill"} objectFit={"cover"} objectPosition={"center"} alt="banner" />
          }
        </div>
      </a>
      }      
      {children}
    </section>
  )
}

export default Banner