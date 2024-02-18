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
      <div>
        <a href="https://minecraft-server-list.cz" target="_blank" style={{display: "none"}}>Meow</a>
        <a href="https://minecraft-servery.cz">
          <img src="https://minecraft-servery.cz/img/icons/icon_default.png" alt="Minecraft Serverlist"
               style={{display: "none"}}/>
        </a>
        <a href="https://craftlist.org/qplay" style={{display: "none"}}>
          <img src="https://craftlist.org/server-icons/ranks/small/61.png" alt="craftlist rank"/>
        </a>
      </div>
    </footer>
  );
}

export default Footer