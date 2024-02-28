import Head from "next/head"
import Banner from "../../components/Banner";
import Image from "next/image";
import profikk from "../../public/images/profikk.png"
import spetty from "../../public/images/spetty.png"
import mirek from "../../public/images/mirek.png"

const SKIN_HEIGHT = 350;

export default function Memories() {
    return (
        <div>
            <Head>
                <title>Vzpomínky | QPlay.cz</title>
                <meta name="description" content="Vzpomínky Vedení"/>
            </Head>
            <Banner sm={true}>
                <div className="pagename">
                    <h1>Děkujeme za vaši podporu!</h1>
                </div>
            </Banner>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky z vedení</h1>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="render">
                                <Image
                                    alt="figurine"
                                    src={profikk}
                                    height={SKIN_HEIGHT}
                                    quality={100}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        marginLeft: "auto"
                                    }}/>
                            </div>
                        </div>
                        <div className="col-lg-7 d-flex">
                            <div className="content">
                                <h1>PROFIKK</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas ipsum velit,
                                    consectetuer eu lobortis ut, dictum at dui. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Integer malesuada.
                                    Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Pellentesque
                                    sapien. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Nulla turpis
                                    magna, cursus sit amet, suscipit a, interdum id, felis. Morbi leo mi, nonummy eget
                                    tristique non, rhoncus non leo. Maecenas sollicitudin. Itaque earum rerum hic
                                    tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                                    consequatur aut perferendis doloribus asperiores repellat. Maecenas lorem. Nulla non
                                    arcu lacinia neque faucibus fringilla.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 d-flex">
                            <div className="content">
                                <h1>_SPETTY_</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas ipsum velit,
                                    consectetuer eu lobortis ut, dictum at dui. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Integer malesuada.
                                    Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Pellentesque
                                    sapien. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Nulla turpis
                                    magna, cursus sit amet, suscipit a, interdum id, felis. Morbi leo mi, nonummy eget
                                    tristique non, rhoncus non leo. Maecenas sollicitudin. Itaque earum rerum hic
                                    tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                                    consequatur aut perferendis doloribus asperiores repellat. Maecenas lorem. Nulla non
                                    arcu lacinia neque faucibus fringilla.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="render">
                                <Image
                                    alt="figurine"
                                    src={spetty}
                                    height={SKIN_HEIGHT}
                                    quality={100}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="render">
                                <Image
                                    alt="figurine"
                                    src={mirek}
                                    height={SKIN_HEIGHT}
                                    quality={100}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        marginLeft: "auto"
                                    }}/>
                            </div>
                        </div>
                        <div className="col-lg-7 d-flex">
                            <div className="content">
                                <h1>MIREK_</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas ipsum velit,
                                    consectetuer eu lobortis ut, dictum at dui. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Integer malesuada.
                                    Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Pellentesque
                                    sapien. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Nulla turpis
                                    magna, cursus sit amet, suscipit a, interdum id, felis. Morbi leo mi, nonummy eget
                                    tristique non, rhoncus non leo. Maecenas sollicitudin. Itaque earum rerum hic
                                    tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                                    consequatur aut perferendis doloribus asperiores repellat. Maecenas lorem. Nulla non
                                    arcu lacinia neque faucibus fringilla.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
