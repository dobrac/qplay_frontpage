import Head from "next/head"
import Banner from "../../components/Banner";
import profikk from "../../public/images/team/profikk.png"
import spetty from "../../public/images/team/spetty.png"
import mirek from "../../public/images/team/mirek.png"
import MemberMemory from '../../components/MemberMemory';

export default function Memories() {
    return (
        <div>
            <Head>
                <title>Vzpomínky | QPlay.cz</title>
                <meta name="description" content="Vzpomínky Vedení Serveru"/>
            </Head>
            <Banner sm={true}>
                <div className="pagename">
                    <h1>Vzpomínky Vedení Serveru</h1>
                </div>
            </Banner>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky vedení serveru</h1>
                    <MemberMemory
                        nick="_Spetty_"
                        image={spetty}
                        text="O QPlay jsem poprvé slyšel v roce 2016, v té době mi bylo 14 let a s kamarády jsme chodili po různých multiplayer serverech hrát minihry. Do QPlay Týmu jsem se dostal až na 3. pokus skrz nábor na Helpery, po 2 letech jsem byl povýšen na Hlavního Helpera a po dalších 2 letech na Vedení Serveru. Ne vždy bylo jednoduché pracovat na vývoji serveru, vzpomínám si například na spoustu &quot;večerů&quot;, kdy jsme kvůli nahrávání updatu šli spát až okolo 6 hodin ráno. Jelikož jsem si prošel opravdu hodně pozicemi, tak jsem si zvládl vyzkoušet spoustu věcí. Vždycky jsem byl nadšený, že stačilo na QPlay projevit o něco zájem, přiblížit svoji vizi a mohl jsem se tomu věnovat. Mimo podpory hráčům a vedení jsem si vyzkoušel i technickou stránku serveru, PR záležitosti, nebo jsem například postavil pár map na již zrušenou minihru Colors! QPlay pro mě bylo místo, kde jsem získal nespočet zkušeností, kontaktů a vzpomínek. Děkuji všem, co se na tomto projektu podíleli!"
                        imageOnRight={false}
                    />
                    <MemberMemory
                        nick="Mirek_"
                        image={mirek}
                        text="Na Minecraft minihrové scéně jsem se objevil v roce 2014, kdy jsem společně s B0hym založil server Games-Land.cz. Na začátku roku 2015 byl server Games-Land spojen se serverem QGames a já odešel na Survival-Games. Rok poté mě kontaktoval Bohy, zda bych nechtěl pro QPlay naprogramovat minihru - Crystals. Jak už asi všichni víte, nabídku jsem přijal a rok na to jsem se dokonce připojil do Technik Týmu. Od té doby jsem věnoval skoro veškerý svůj volný čas vývoji miniher a novinek na QPlay. Za těch 7 let se pro mě QPlay stal srdcovou záležitostí, a získal jsem spoustu zkušenosti, ze kterých budu čerpat po celý zbytek svého pracovního života. Získal jsem nové přátele, poznal spoustu nových lidí a zjistil jaké to je vést takto velký projekt. Chtěl bych poděkovat všem technikům, kteří se za dobu mojí působnosti v týmu vystřídali, a kteří svou prací přispěli k tomu všemu, čeho QPlay dosáhl."
                        imageOnRight={true}
                    />
                </div>
            </section>
        </div>
    )
}
