import {FC, PropsWithChildren} from "react";
import Image from "next/image";

const ImageCard: FC<PropsWithChildren<{imagesrc:string}>> = ({imagesrc})=> {
  return(
    <div className="imagecard">
        <Image src={imagesrc} width={1280} height={720} style={{borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}} layout={"fill"} objectFit={"cover"} objectPosition={"center"} alt="imagecard" />
    </div>
  )
}

export default ImageCard