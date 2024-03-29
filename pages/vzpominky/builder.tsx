import Head from "next/head"
import Banner from "../../components/Banner";
import Dejviq_ from "../../public/images/team/Dejviq_.png"
import petricekk from "../../public/images/team/petricekk.png"
import MemberMemory from '../../components/MemberMemory';
import _yCoN_ from "../../public/images/team/_yCoN_.png";

export default function Memories() {
    return (
        <div>
            <Head>
                <title>Vzpomínky | QPlay.cz</title>
                <meta name="description" content="Vzpomínky Builder Teamu"/>
            </Head>
            <Banner sm={true}>
                <div className="pagename">
                    <h1>Vzpomínky Builder Teamu</h1>
                </div>
            </Banner>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky vedení teamu</h1>
                    <MemberMemory
                        nick="Dejviq_"
                        image={Dejviq_}
                        text="Všechno to začalo začátkem dubna 2019 kdy v té době, kdyby mi někdo řekl, že na QPlayi budu 5 let, tak bych mu to nikdy nevěřil, obzvlášť že si tam najdu mnoho skvělých přátel, se kterými budu mít spoustu skvělých zážitků, jak ve hře, tak i mimo ni. QPlay mi dal mnoho zkušeností, které budu moct uplatit ve svém osobním životě za to QPlayi moc děkují. ❤️
QPlay jsem vždy vnímal jako server, který se vždy snažil sledoval trendy v zahraničí a snažil se je přivést na naši herní scénu.
QPlay Builder Team byl, ačkoliv to bude znít dost egoisticky, tak jeden z nejlepších Československých Builder týmů do kterého se mohl Builder dostat.
Server nám všem určitě bude chybět. Už nebudeme mít to naše safe místo, kam jsme si mohli přijít s kamarády jen zahrát nějaký ty minihry nebo si jen popovídat. Ale život jde dál a budeme si muset zvyknout, i když to může být pro mnohé těžké, jelikož tu prožili své dětství."
                        imageOnRight={false}
                    />
                </div>
            </section>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky builderů</h1>
                    <MemberMemory
                        nick="petricekk"
                        image={petricekk}
                        text="Před dvěma lety jsem plný nadšení podával přihlášku na tuto pozici. Tehdy jsem netušil, kam mě to zavede. Díky QPlay jsem získal mnoho cenných zkušeností nejen v oblasti stavění, ale i v osobním životě. Seznámil jsem se zde s mnoha lidmi, někteří z nich se stali mými přáteli. Nejvíce však děkuji QPlayi za otevření nových možností, ve kterých jsem mohl působit. Byly to roky plné radosti i výzev. Postavit si lobby na QPlayi bylo mým snem, který se mi splnil, a mohl jsem vytvořit dvě úžasné survival lobby. Již od začátku jsem věděl, že chci svoji kariéru na QPlayi zakončit, a dnes oficiálně končím i v builderské komunitě. Byly to krásné roky, ale je čas na nové výzvy. S láskou, Senior Builder petricekk 🙂"
                        imageOnRight={true}
                    />
                </div>
            </section>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky bývalých builderů</h1>
                    <MemberMemory
                        nick="_yCoN_"
                        image={_yCoN_}
                        text="QPlay je pro mě srdcovou záležitostí a vždy bude. Vzpomínek na něj budu mít hodně, ale abych vystřihnul ty co se mi nejvíce zaryly do paměti, tak budu muset opravdu těžce vybírat. Asi budu mít navždy v paměti můj první nábor, kterým mě prováděl ještě Jenda. Trval okolo měsíce a půl a nebudu kecat, byl to záhul. Doteď si stojím za tím, že QPlay měl nejtěžší nábory na buildera na české scéně. Prošel jsem a i přesto, že jsem musel po dvou měsících odejít kvůli osobním problémům, jsem si čas v týmu náramně užil. Kolektiv byl lepší než při mém druhém působení a měl jsem v něm i více kamarádů. Vzhledem k tomu, že tou dobou byla karanténa, tak jsme na buildu trávili opravdu hodiny. Volali jsme spolu na tsku a bylo to fakt super. Škoda, že už to budou jen vzpomínky, které ale budou navždy v paměti. Naposled bych chtěl poděkovat Jendovi a Dejvovi za možnost být v týmu. A zároveň všem, kteří mě provázeli cestou v týmu. Díky."
                        imageOnRight={false}
                    />
                </div>
            </section>
        </div>
    )
}
