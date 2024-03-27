// MemberMemory.tsx
import {FC} from "react";
import Image from "next/image";

const SKIN_HEIGHT = 350;

interface MemberMemoryComponentProps {
    nick: string;
    image: any;
    text: string;
    imageOnRight?: boolean;
}

interface TextDivProps {
    nick: string;
    text: string;
}

const TextDiv: FC<TextDivProps> = ({nick, text}) => {
    const name = nick.toUpperCase();
    return (
        <div className="col-lg-8 d-flex">
            <div className="content">
                <h1>
                    {name}
                </h1>
                <p>{text}</p>
            </div>
        </div>
    );
}

interface SkinBustProps {
    image: any;
    imageOnRight?: boolean;
}

const SkinBust: FC<SkinBustProps> = ({image, imageOnRight}) => {
    return (
        <div className="col-lg-4">
            <div className="render">
                {imageOnRight ? (
                    <>
                        <Image
                            alt="figurine"
                            src={image}
                            height={SKIN_HEIGHT}
                            quality={100}
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                transform: "scaleX(-1)",

                            }}
                        />
                    </>
                ) : (
                    <>
                        <Image
                            alt="figurine"
                            src={image}
                            height={SKIN_HEIGHT}
                            quality={100}
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                marginLeft: "auto"
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    );
}


const MemberMemory: FC<MemberMemoryComponentProps> = ({nick, image, text, imageOnRight}) => {
    return (
        <div className="row">
            {imageOnRight ? (
                <>
                    <TextDiv nick={nick} text={text}/>
                    <SkinBust image={image} imageOnRight={imageOnRight}/>
                </>
            ) : (
                <>
                    <SkinBust image={image} imageOnRight={imageOnRight}/>
                    <TextDiv nick={nick} text={text}/>
                </>
            )}
        </div>
    );
};

export default MemberMemory;
