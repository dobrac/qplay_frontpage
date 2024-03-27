import Head from "next/head"
import Banner from "../../components/Banner";
import mathew from "../../public/images/team/math3w.png"
import ZakyCS from "../../public/images/team/ZakyCS.png"
import cybooo from "../../public/images/team/cybooo.png"
import JustDrven from "../../public/images/team/JustDrven.png"
import Robot7769 from "../../public/images/team/Robot7769.png"
import Ales_kulicka from "../../public/images/team/Ales_kulicka.png"
import MemberMemory from '../../components/MemberMemory';

export default function Memories() {
    return (
        <div>
            <Head>
                <title>Vzpomínky | QPlay.cz</title>
                <meta name="description" content="Vzpomínky Technik Teamu"/>
            </Head>
            <Banner sm={true}>
                <div className="pagename">
                    <h1>Vzpomínky Technik Teamu</h1>
                </div>
            </Banner>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky vedení teamu</h1>
                    <MemberMemory
                        nick="_Math3w_"
                        image={mathew}
                        text="Aj keď som bol členom tímu QPlay iba 2 roky, tak ma táto skúsenosť vďaka úžasnému kolektívu neskutočne posunula nielen v oblasti programovania. Prvýkrát som sa na QPlay pripojil ešte v roku 2016 a vtedy som ešte na tomto serveri strávil stovky hodín len hraním minihier. To ma po pár rokoch inšpirovalo k tomu si vytvoriť niečo vlastné. Už je to 5 rokov čo som začal s programovaním minecraft pluginov a za ten čas som vďaka tomu dokázal nabrať veľa znalostí, ktoré mi budú užitočné do konca života. Som vďačný, že som mohol byť súčasťou tohto skvelého tímu, kde som si vybudoval vzťahy, ktoré neskončia s koncom QPlay. Ďakujem všetkým, ktorý sa podieľali na chode projektu a aj keď je jeho ukončenie smutná udalosť, som rád za to, že môžem byť toho súčasťou aj toho a dúfam, že nás to v živote posunie všetkých ďalej."
                        imageOnRight={false}
                    />
                </div>
            </section>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky techniků</h1>
                    <MemberMemory
                        nick="ZakyCS"
                        image={ZakyCS}
                        text="Ahoj, rád bych se s vámi podělil o mou cestu na serveru QPlay.cz. Dne 25. července 2022 jsem se připojil společně s Ales_Kulicka do vývojářského týmu. V té době jsem si stanovil dva cíle: za prvé vytvoření a zveřejnění kvalitního survival serveru a za druhé posílení svých programovacích dovedností. Během tří namáhavých měsíců jsme úspěšně spustili beta verzi survival serveru a dosáhli nevídaných úspěchů. Měli jsme vlastní pluginy, které byly jedinečné a nikde jinde se nevyskytovaly, anebo se survival podařilo naplnit na 112 hráčů, což bylo zvládnutelné maximum. Zde na QPlay jsem načerpal spoustu zkušeností, dosáhl seniorské pozice a užil si spoustu zábavy, ať už na TeamSpeaku, nebo samotném Minecraft serveru. Tento server nám bude chybět, ale jeho konec je pro nás znamením, že se máme v životě posunout dál a buďme hrdí na to, co jsme zde dokázali."
                        imageOnRight={true}
                    />
                    <MemberMemory
                        nick="Ales_kulicka"
                        image={Ales_kulicka}
                        text="QPlay je server, který navždy zaujme místo v mém srdci. Byl to server, kde jsem strávil stovky hodin s kamarády. Když si teď vzpomenu na ty chvíle, cítím opravdový smutek, když vím, že tento server končí. Minihra MicroBattle, ve které jsem strávil nejvíce hodin, je pro mě plná nostalgie, a vždy budu vzpomínat na ty skvělé okamžiky. V té době by mě nikdy nenapadlo, že se stanu součástí Technik týmu. Ty vzpomínky, které mám na tento server, se v okamžiku, kdy jsem se dozvěděl, že končí, staly silnějšími. Poznal jsem na serveru spoustu úžasných lidí. Rád bych upřímně poděkoval celému vedení za to, že jsem zde mohl být, a za ty nezapomenutelné okamžiky. Poslední věc, kterou řeknu, je DĚKUJI. ❤️"
                        imageOnRight={false}
                    />
                    <MemberMemory
                        nick="cybooo"
                        image={cybooo}
                        text="Ačkoliv jsem v QPlay týmu strávil &quot;pouze&quot; rok a půl, pobral jsem zde mnoho různých znalostí, které mi budou do zbytku života nadměrně užitečné. Měl jsem možnost pracovat s skvělým a talentovaným týmem, za což jsem ohromně rád. O vstupu na QPlay jsem uvažoval již v roce 2019, avšak jsem se k vstupu dokopal až v roce 2022 - člověku to připadá jako včera, čas hodně rychle utíká! I když je konec smutný a těžce se věří tomu, že opravdu nastává, jsem rád, že jsem byl součástí serveru a že budu přítomen i u jeho konce. Mám z QPlaye mnoho hezkých vzpomínek, avšak vše někdy končí. Chtěl bych tímto poděkovat všem členům týmu, rozumným hráčům za smysluplné konverzace a doufám, že se někdy potkáme na jiné cestě!"
                        imageOnRight={true}
                    />
                    <MemberMemory
                        nick="Robot7769"
                        image={Robot7769}
                        text="Byl jsem technik na QPlay. V týmu jsem byl oficiálně od 25.2.2023, ale podle GitHubu už 29.10.2022 mě požádal můj kamarád _Spetty_, abych přidal na stránky survival VIP výhody. Věnoval jsem se především minihrám. Jako první jsem dostal za úkol minianni-run update, následovalo LuckyWars a další věci. Zkusil jsem si i něco málo na Survivalu, tam jsem vytvořil některé speciální itemy např. Okřídlený soudce, Rotující překvapení a další. Poznal sem tu spoustu skvělých lidí, kterým bych chtěl poděkovat za spolupráci a příjemně strávený čas. Děkuji že jsem mohl být součástí tohoto úžasného projektu který zůstane v našich vzpomínkách navždy. Děkuji za všechny zkušenosti a příležitosti, které jsem měl možnost získat. Na ty krásné chvíle strávené na serveru, TS3 nebo Discordu budu s radostí vzpomínat. Díky <3"
                        imageOnRight={false}
                    />
                    <MemberMemory
                        nick="JustDrven"
                        image={JustDrven}
                        text="Když jsem byl ještě dítě, viděl jsem video od MarweXe, který tehdy natáčel z QGames a hrál Quake. Tehdy si pamatuji, že mi můj starší bratranec dovolil si zahrát Minecraft, a já jsem se připojil na QGames jako warezák a zahrál jsem si Quake. Také si vzpomínám, jak jsem sledoval kanál &quot;PlanB&quot;, který mi ukázal minihru Crystals, kterou jsem naposledy hrál 1.3.2024, a byla to jedna z nejlepších miniher, která na serveru byla. Taky si pamatuji, když jsem se dostal do týmu. Byl to pro mě obrovský pokrok v mé programátorské kariéře, a jsem moc rád, že jsem se mohl podílet na chodu serveru. Do týmu jsem se dostal 1.7.2023. Nejvtipnější vzpomínka je, když jsem byl na náboru do technik týmu. Tehdy jsem měl starší počítač (který zvládl spustit pouze jeden program), a když jsem byl na pohovoru, měl jsem zapnuté 3 programy (Minecraft, Discord a IntelliJ IDEA), a měl jsem takové sekaní, že se pohovor protáhl o 4 hodiny - Doteď se divím, že mě do týmu vzali."
                        imageOnRight={true}
                    />
                </div>
            </section>
        </div>
    )
}
