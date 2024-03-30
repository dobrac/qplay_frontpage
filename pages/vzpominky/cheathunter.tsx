import Head from "next/head"
import Banner from "../../components/Banner";
import II_MrSunnyCz_II from "../../public/images/team/II_MrSunnyCz_II.png"
import M4rtiN from "../../public/images/team/M4rtiN.png"
import MemberMemory from '../../components/MemberMemory';
import _Histo_ from "../../public/images/team/_Histo_.png";

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
                        nick="Sunnyyyyyyy"
                        image={II_MrSunnyCz_II}
                        text="Čau, furt k tomu nemám nějak slov... na QPlayi jsem strávil skoro celé dětství a teď to všechno skončí takto dá se říct z ničeho nic... dost pravděpodobně to pro mě znamená, že už skoro vůbec nebudu hrát minecraft, nevim ani kde jinde bych upřímně hrál, protože QPlay pro mě vždycky byl a navždy bude nejlepší CZ/SK server. Jelikož jsem se tak nějak vždycky snažil mít co nejlepší statistiky, tak by nebylo od věci zmínit i to, k dnešnímu dni mam na MiniAnni-Runech přes 750 000 killů a přes 11 500 winů, víc jak 11 600 banů, pak celkově na serveru odehráno přes 521 dní/12 500 hodin a hlavně nespočet kamarádů  kteří pro mě toho dost znamenají. Na QPlayi jsem začal hrát v srpnu 2015 a nikdy bych nečekal že se dostanu až sem, kde jsem teď. Všem lidem co hráli na QPlayi bych chtěl poděkovat a popřát tímto všechno nejlepší v životě, mějte se tu krásně a ať se vám všem v životě daří, cc ☀️"
                        imageOnRight={false}
                    />
                    <MemberMemory
                        nick="M4rtiN"
                        image={M4rtiN}
                        text="Na QPlay jsem se poprvé připojil v roce 2016. Tehdy jsem tady hrál MiniAnni s mým bráchou, ale objevil jsem zde minihru SkyWars, která mě neuvěřitelně začala bavit. Možná se někomu může zdát, že hraní na QPlayi byla ztrátou času, ale já ničeho nelituji. Bavilo mě dostávat se na přední příčky SkyWars leaderboardů, bavilo mě zde hrát s mými kamarády a nakonec mě bavilo zde pomáhat lidem na pozici CheatHuntera. Chtěl bych poděkovat Linusovi, který mi dal tu příležitost připojit se do CheatHunter teamu. Poznal jsem v teamu spoustu úžasných lidí a jsem za to rád. Děkuji vám. Nakonec bych chtěl poděkovat Profikkovi, který vytvořil QPlay. Bez tebe bychom tu dnes nebyli. Jsem rád, že QPlay končí v tom nejlepším. Bude to navždy nejlegendárnější server."
                        imageOnRight={true}
                    />
                </div>
            </section>
{/*            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky bývalých cheathunterů</h1>
                    <MemberMemory
                        nick="_Histo_"
                        image={_Histo_}
                        text="Ahoj, přesně před rokem 30.3.2023 jsem po dvou letech opustil A-Team, nikdy by mě nenapadlo, že o rok později bude projekt QPlay končit. Ačkoliv už Minecraft nehraji, tak je to pro mě dost emotivní moment. Jako malý kluk, který začínal na minihře Annihilation, jsem vždy obdivoval členy A-Teamu. Proto jsem vděčný za možnost být 3x členem teamu, splnil jsem si díky tomu svůj dětský sen. Děkuji všem bývalým kolegům, kamarádům a fanouškům za krásné vzpomínky. Přeji Vám hodně štěstí a úspěchů do budoucna, mějte se krásně. Váš Cheathunter & Mod Hisťo."
                        imageOnRight={false}
                    />
                </div>
            </section>*/}
        </div>
    )
}
