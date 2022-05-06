import {FC, PropsWithChildren} from "react";
import Image from "next/image";
import {StaticImageData} from "next/dist/client/image";

const ImageCard: FC<PropsWithChildren<{src: string | StaticImageData}>> = ({src})=> {
  return(
    <div className="imagecard">
        <Image src={src} style={{borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}} layout={"fill"} objectFit={"cover"} objectPosition={"center"} alt="imagecard" />
    </div>
  )
}

export default ImageCard