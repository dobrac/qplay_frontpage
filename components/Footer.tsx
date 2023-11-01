import {FC, PropsWithChildren} from "react";
import Image from "next/image";
import footerImage from "../public/images/banner.png"

const Footer: FC<PropsWithChildren<{}>> = ({children}) => {
  return (
    <footer>
      <div className="footer-image">
        <Image
          src={footerImage}
          placeholder={"blur"}
          alt="footer"
          fill={true}
          sizes="100vw"
          style={{
            maxWidth: "100%",
            objectFit: "cover",
            objectPosition: "center"
          }}/>
      </div>
      <div className="footer-content">
        {children}
      </div>
    </footer>
  );
}

export default Footer