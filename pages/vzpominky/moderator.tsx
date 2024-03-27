import Head from "next/head"
import Banner from "../../components/Banner";
import Ayessha from "../../public/images/team/Ayessha.png"
import iArthurekk from "../../public/images/team/iArthurekk.png"
import DarkBanan from "../../public/images/team/DarkBanan.png"
import stepanpanik from "../../public/images/team/stepanpanik.png"

import MemberMemory from '../../components/MemberMemory';

export default function Memories() {
    return (
        <div>
            <Head>
                <title>Vzpomínky | QPlay.cz</title>
                <meta name="description" content="Vzpomínky Moderátor Teamu"/>
            </Head>
            <Banner sm={true}>
                <div className="pagename">
                    <h1>Vzpomínky Moderátor Teamu</h1>
                </div>
            </Banner>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky vedení teamu</h1>
                    <MemberMemory
                        nick="Ayessha"
                        image={Ayessha}
                        text="Pri nástupe do tímu by som si ani v sne nevedela predstaviť, že zo serveru budem odchádzať spolu s jeho ukončením. Pôsobenie na QPlayi som nebrala len ako pracovnú povinnosť, ale bolo to pre mňa aj miesto, kde som sa chodievala po dlhom dni odreagovať a zabaviť. QPlay sa stal krásnou etapou v mojom živote, ktorá mi otvorila brány k novým možnostiam a príležitostiam. So sebou si odnášam bohaté skúsenosti, nové kamarátstva a nezabudnuteľné spomienky. Pochopila som, aká dôležitá je spolupráca, naučila  som sa zvládať rôzne situácie s chladnou hlavou a objavila som hodnotu vzájomného rešpektu. Spomínam na tie chvíľe, kedy som sa hlásila na pozíciu moderátorky. Nová výzva, nevedela som, do čoho idem, čo mám od pozície očakávať. Musím sa priznať, že začiatky pre mňa neboli úplne ľahké, ale ďakujem všetkým, čo mi od môjho nastúpenia ochotne pomáhali. Je veľmi ťažké sa lúčiť s niečím, čo bolo podstivo budované niekoľko rokov tými, ktorí na tom neúnavne pracovali s elánom a odhodlaním, splniť si svoje sny a cieľe. Každý z nás do toho vložil kúsok seba, budovali sme to spoločne. Ďakujem každému a ďakujem za všetko!"
                        imageOnRight={false}
                    />
                </div>
            </section>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky moderátorů</h1>
                    <MemberMemory
                        nick="DarkBanan"
                        image={DarkBanan}
                        text="Když jsem v roce 2022 nastupoval na pozici zkušebního helpera, neměl jsem moc zkušeností s danou pozicí. Dlouho to netrvalo, a v sám sobě jsem začal cítit změnu, a pomalu sbírat zkušenosti ze všech stran, ať už to jsou zkušenosti komunikační, nebo telekomunikační. Samotný QPlay mi v tomhle ohledu hodně pomohl, ať už jako Helper, nebo Moderátor, do QPlaye jsem dal přes tisíce hodin, a osobně nelituju ani jediné chvíle, za tu dobu jsem stihl zažít spoustu skvělých a vyjímečných chvil, či poznat spoustu lidi kteří zůstanou i po konci projektu. Samotný konec nesu těžce, ale citím, že je čas udělat krok vpřed a nechat se sebou pouze vzpomínky, které jsme za ty letá posbíraly. Něco končí, něco začína, ikdyž QPlay nebude, cesty nás všech půjdou dál, ale jiným směrem. Co bude dále, ukáže jen zítřek."
                        imageOnRight={true}
                    />
                    <MemberMemory
                        nick="iArthurekk"
                        image={iArthurekk}
                        text="Na pozici zkušebního moderátora jsem nastoupil koncem srpna 2023. V té době jsem neměl moc zkušeností s touto pozicí, ale s pomocí mých kolegů, s kterými jsem měl tu čest si pokecat, jsem se toho dozvěděl víc, než dost. QPlay mi v těchto okamžicích velmi pomohl, jak ve hře, tak i v realitě. Odehrál jsem tam velkou část času, a nelituji toho. Byl jsem svědkem mnoha okamžiků a věcí, které by někdo jen tak nemohl spatřit. Konec QPlaye mě velmi vzalo, ale jak se říká, když něco končí, něco nového začíná.  Bylo mi ctí si zde zahrát a zkusit si pozici Moderátora."
                        imageOnRight={false}
                    />
                    <MemberMemory
                        nick="stepanpanik"
                        image={stepanpanik}
                        text="Asi žádný ze serverů mi nepřirostl k srdci tak jako QPlay. Bohužel dnem 30. 3. 2024 bude ukončen, ale navždy zůstane v našich srdcích společně se vzpomínkami na něj. Na tomto projektu jsem působil v Moderátor týmu od 30. 8. 2023 na pozici Zkušebního Moderátora a 5. 9. 2023 jsem byl povýšen na pozici Moderátora, na které působím až do samého konce tohoto nenahraditelného projektu. Na tomto serveru mám nahráno přes 60 dní a ani jedné chvíle nelituji. Načerpal jsem zde mnoho zkušeností, poznal nespočet úžasných přátel a zažil nespočet úžasných chvil, na které budu vzpomínat i za několik let. Za tuto příležitost bych chtěl poděkovat hlavně Hlavní Moderátorce Ayesshe, vedení za vytvoření tohoto projektu, ale i celému zbytku tohoto úžasného týmu."
                        imageOnRight={true}
                    />
                </div>
            </section>
        </div>
    )
}
