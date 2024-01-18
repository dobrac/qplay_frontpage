import {FC, PropsWithChildren} from "react";
import Image, {StaticImageData} from "next/image";

const ImageCard: FC<PropsWithChildren<{ src: string | StaticImageData }>> = ({src}) => {
  return (
    <div className="imagecard">
      <Image
        src={src}
        alt="imagecard"
        fill={true}
        sizes="30vw"
        style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          maxWidth: "100%",
          objectFit: "cover",
          objectPosition: "center"
        }}
      />
    </div>
  );
}

export default ImageCard