import Head from "next/head"
import Banner from "../../components/Banner";
import Linuuus from "../../public/images/team/Linuuus.png"
import M4rtiN from "../../public/images/team/M4rtiN.png"
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
{/*            <section className="aboutus">
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
            </section>*/}
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky CheatHunterů</h1>
                    <MemberMemory
                        nick="M4rtiN"
                        image={M4rtiN}
                        text="Na QPlay jsem se poprvé připojil v roce 2016. Tehdy jsem tady hrál MiniAnni s mým bráchou, ale objevil jsem zde minihru SkyWars, která mě neuvěřitelně začala bavit. Možná se někomu může zdát, že hraní na QPlayi byla ztrátou času, ale já nic nelituji. Bavilo mě dostávat se na přední příčky SkyWars leaderboardů, bavilo mě zde hrát s mými kamarády a nakonec mě bavilo zde pomáhat lidem na pozici cheathuntera. Chtěl bych poděkovat Linusovi, který mi dal tu příležitost připojit se do CheatHunter teamu. Poznal jsem v teamu spoustu úžasných lidí a jsem za to rád. Děkuji vám. Nakonec bych chtěl poděkovat Profikkovi, který vytvořil QPlay. Bez tebe bychom tu dnes nebyli. Jsem rád, že QPlay končí v tom nejlepším. Bude to navždy nejlegendárnější server."
                        imageOnRight={false}
                    />
                </div>
            </section>
        </div>
    )
}
