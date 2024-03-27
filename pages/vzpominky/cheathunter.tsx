import Head from "next/head"
import Banner from "../../components/Banner";
import Linuuus from "../../public/images/team/Linuuus.png"
import MemberMemory from '../../components/MemberMemory';

export default function Memories() {
    return (
        <div>
            <Head>
                <title>Vzpomínky | QPlay.cz</title>
                <meta name="description" content="Vzpomínky CheatHunter Teamu"/>
            </Head>
            <Banner sm={true}>
                <div className="pagename">
                    <h1>Vzpomínky CheatHunter Teamu</h1>
                </div>
            </Banner>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky vedení teamu</h1>
                    <MemberMemory
                        nick="Linuuus"
                        image={Linuuus}
                        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas ipsum velit,
                                    consectetuer eu lobortis ut, dictum at dui. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Integer malesuada.
                                    Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Pellentesque
                                    sapien. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Nulla turpis
                                    magna, cursus sit amet, suscipit a, interdum id, felis. Morbi leo mi, nonummy eget
                                    tristique non, rhoncus non leo. Maecenas sollicitudin. Itaque earum rerum hic
                                    tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                                    consequatur aut perferendis doloribus asperiores repellat. Maecenas lorem. Nulla non
                                    arcu lacinia neque faucibus fringilla."
                        imageOnRight={false}
                    />
                </div>
            </section>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky CheatHunterů</h1>
                </div>
            </section>
        </div>
    )
}
