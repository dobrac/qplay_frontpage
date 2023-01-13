import {FC, PropsWithChildren} from "react";
import Image from "next/image";
import {StaticImageData} from "next/dist/client/image";

const ImageCard: FC<PropsWithChildren<{ src: string | StaticImageData }>> = ({src}) => {
  return (
    <div className="imagecard">
      <Image
        src={src}
        alt="imagecard"
        fill={true}
        style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          maxWidth: "100%",
          objectFit: "cover",
          objectPosition: "center"
        }}/>
    </div>
  );
}

export default ImageCard