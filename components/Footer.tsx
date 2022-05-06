import {FC, PropsWithChildren} from "react";
import Image from "next/image";
import footerImage from "../public/images/banner.png"

const Footer: FC<PropsWithChildren<{}>> = ({children})=> {
  return(
    <footer>
      <div className="footer-image">
        <Image src={footerImage} layout={"fill"} placeholder={"blur"} objectFit={"cover"} objectPosition={"center"} alt="footer" />
      </div>
      <div className="footer-content">
        {children}
      </div>
    </footer>
  )
}

export default Footer