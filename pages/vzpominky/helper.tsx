import Head from "next/head"
import Banner from "../../components/Banner";
import ItzTadeas from "../../public/images/team/ItzTadeas.png"
import Raketka from "../../public/images/team/Raketka.png"
import JSMMKODDSHOTS from "../../public/images/team/JSMMKODDSHOTS.png"
import SeptunLover from "../../public/images/team/SeptunLover.png"
import _Curse_Of_Dead_ from "../../public/images/team/_Curse_Of_Dead_.png"
import Shirahoshi from "../../public/images/team/Shirahoshi.png"
import MemberMemory from '../../components/MemberMemory';
import M1che_ from "../../public/images/team/M1che_.png";
import Veverka14 from "../../public/images/team/Veverka14.png";
import KwenT_ from "../../public/images/team/KwenT_.png";
import pewoxcz from "../../public/images/team/pewoxcz.png";

export default function Memories() {
    return (
        <div>
            <Head>
                <title>Vzpomínky | QPlay.cz</title>
                <meta name="description" content="Vzpomínky Helper Teamu"/>
            </Head>
            <Banner sm={true}>
                <div className="pagename">
                    <h1>Vzpomínky Helper Teamu</h1>
                </div>
            </Banner>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky vedení teamu</h1>
                    <MemberMemory
                        nick="ItzTadeas"
                        image={ItzTadeas}
                        text="Na QPlayi jsem hrál již od roku 2015 a už v té době to pro mě byl TOP server, kterému se kvalitou žádný nevyrovnal, nikde jinde mě hrát ani nebavilo. Nejprve jsem jako Helper působil jen na menších serverech, které mi ale daly dostatečný základ a odhodlání, se kterým se mi v roce 2019 podařilo dostat do QP Helper Teamu. Několikrát jsem se stal Helperem měsíce, po roce dokonce Senior Helperem a o dva roky později jsem byl zvolen Hlavním Helperem. Byla to jízda, za kterou jsem opravdu vděčný. Pro některé to je nejspíš promarněný čas za počítačem, já ale ničeho nelituji. Za 5 let působení na serveru jsem získal opravdu mnoho zkušeností, které mě posouvají i v běžném životě. Na serveru jsem poznal spoustu skvělých lidí, ze kterých se stali opravdoví přátelé na celý život. Za všechno QPlayi moc děkuji. ❤️"
                        imageOnRight={false}
                    />
                </div>
            </section>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky helperů</h1>
                    <MemberMemory
                        nick="KwenT_"
                        image={KwenT_}
                        text="O Qplayi som sa prvýkrát dozvedel v roku 2016. V tú dobu bol Qplay od ostatných serverov dosť unikátny. Unikátnosť serveru sa bez pochýb zachovala až dodnes. Moje začiatky boli prosté. Pôsobil som na menších serveroch, kde som nabral pomerne dosť skúseností a hlavne odvahu. Odvahu, vďaka ktorej som sa dostal až sem. Na pozíciu Senior Helpera. Strávil som tu nespočet hodín a určite toho neľutujem. Za toto všetko ďakujem hlavne Tadeášovi, vďaka ktorému som sa za rok pôsobenia na serveri mohol spoznať s naozaj veľkým množstvom ľudí, s ktorými sa bavím až dodnes. Nabral som skúsenosti, ktoré už teraz uplatňujem v reálnom živote. Toto všetko končí a za všetko Qplayi moc ďakujem. ❤️"
                        imageOnRight={true}
                    />
                    <MemberMemory
                        nick="SeptunLover"
                        image={SeptunLover}
                        text="QPlay sice mizí, ale né zážitky, které jsem zde prožila. Na QPlayi hraji od roku 2018 a za ten čas jsem poznala spoustu lidí, jak své kamarády, se kterýma trávíme čas do teď nebo lidi ze samotného Admin-Teamu. Musím říct, že mé působení na QPlayi jako Helperka, mi změnilo život o dost velká procenta. Samozřejmě, že QPlay nebyl jenom procházka růžovou zahradou, ale taky hodně stresu a nervů. Za mé zážitky a za prožití část života vděčím hlavně QPlayi."
                        imageOnRight={false}
                    />
                    <MemberMemory
                        nick="Veverka14"
                        image={Veverka14}
                        text="Ahoj, na začiatok tohto by som chcel poďakovať celému Admin-Teamu za veľa super spomienok a zážitkov strávene s Helper Teamom. Veľke Ďakujem pratrí Tademu za to, že mi umožnil byť v Helper Teamu, kde som sa naučil veľa nových veci. Po nieakom čase som spoznal nie len Helperov ale aj iných členov Admin-Teamu. Nikdy nebudem ľutovať ten strávený čas hraním a volaním s ostatnými na Qplayi. Bude mi to chýbať ale je čas sa posunuť ďalej a spomínať na to v dobrom."
                        imageOnRight={true}
                    />
                </div>
            </section>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky bývalého vedení teamu</h1>
                    <MemberMemory
                        nick="Raketka"
                        image={Raketka}
                        text="Poslední rozloučení s projektem by mělo být něco! Ale na to nemám tady prostor. Takže bych chtěl poděkovat všem, kteří se mnou spolupracovali v A-Teamu a pobyli kus svého života se mnou a třeba ho i zásadně ovlivnili. Moc si vážím navázaných přátelství, které mají přesah do reálného života. Moc děkuji hráčům, kteří za mnou chodili v dobách teamspeaku po livestreamech a jen si povídali a hráli, moc jsem si tu jízdu užil, doufám, že i vy! Byl jsem Hlavní Helper, ale především někdo, kdo se snažil vymýšlet to nejlepší proto, abyste si hru užívali co nejvíce a tuto radost jsem s vámi sdílel na YouTube. Možná si vzpomenete na noční livestreamy, kde jsme tryhardili, vánoční čokoládky a tak dále, moc rád na to vzpomínám. Budu moc vděčný, pokud se mi ozvete na IG: czRaketak a napíšete, jak se vám daří, co děláte a jak vás projekt bavil. Raky 🚀"
                        imageOnRight={false}
                    />
                </div>
            </section>
            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky bývalých helperů</h1>
                    <MemberMemory
                        nick="JSMMK"
                        image={JSMMKODDSHOTS}
                        text="Nečakal by som, že moja QPlay kariéra začne tým, že ma Epl, ako vtedajší QPlay builder zavolá na Teamspeak. 😁 Po veľa hodinách hrania, pri ktorých začali vznikať prvé, teraz už spomienky na QPlay s ľuďmi ako Raketka, WaterMelon, LeeTZM a veľa ďalšími, som sa ocitol v AT. Tam prišli tí, s ktorými som to ťahal najviac ako Mr_Furry, MilQanek, ItsMeVeronika a nemôžem asi zabudnúť na už spomínaného Raketku, s ktorým som najviac v kontakte do dnes. Dalo by sa toho napísať veľa, ale je tu obmedzený počet znakov. 😅 Na záver by som sa chcel hlavne poďakovať celému QPlayi, ako hráčom, za to akú sme vytvorili komunitu, tak aj vedeniu za možnosť byť súčasťou AT. Treba sa spätne obzrieť za tým, koľko nových ľudí ste vďaka severi spoznali, koľko ľudí vám ostalo v živote doteraz a uvedomiť si, že bez QPlay by sa nič z toho nestalo. Tak teda naposledy zdraví vás váš bývalý helper JSMMK 👋"
                        imageOnRight={true}
                    />
                    <MemberMemory
                        nick="_Curse_Of_Dead_"
                        image={_Curse_Of_Dead_}
                        text="QPlay mi dal za ten rok a půl, co jsem tam byl plno zkušeností. Dost zkušeností hlavně o komunikaci s hráči a s kolegy v týmu, které se hodí i do normálního života. Naučil jsem se tam komunikovat s hráči a vidět všechno z jiného úhlu pohledu, což je do života důležitý. QPlay byl jeden z mých nejoblíbenějších serverů, a je za mě velká škoda, že to končí,  i když na druhou stranu chápu Profíka proč."
                        imageOnRight={false}
                    />
                    <MemberMemory
                        nick="Shirahoshi"
                        image={Shirahoshi}
                        text="Zdravím všetkých, ktorý čítaju tento odkaz v mojom mene, na začiatku tohto by som chcel poďakovať celému QPlay Teamu za množstvo spomienok a taktiež Ďakujem práve Tadeášovi za to, že mi umožnil byť súčasťou Helper Teamu, kde som spoznal nespočet dobrých ľudí a postupom času som spoznal nie len Helperov ale aj iných členov Teamu, či už Moderátorov alebo Builderov. Za čias keď som bol v Teame tak si dovolím povedať, že som vychádzal s každým. Nespočet hodín, ktoré sme po nociach strávili na TeamSpeaku s Dejviqom, Michem, Linuuusom, Baruskou, Ayesshou, petrickom, KwenTom, Pewoxom a ďalšími . Jednoducho sme spolu trávili všetok náš volný čas, za ktorý som vďačny. Spomienka na to, že tento projekt, kde som si to svoje “Helperstvo” skúsil po prvý krát je na konci zamrzí, pretože je to moje detstvo, nespočet strávenych hodín hraním SkyWars, MiniAnni, MiniUHC. Ďakujem všetkým za tu príležitosť!"
                        imageOnRight={true}
                    />
                    <MemberMemory
                        nick="M1che_"
                        image={M1che_}
                        text="Zdravím všechny! Když se ke mně dostala zpráva o ukončení projektu, zpočátku se mi nechtělo ani věřit, že by QPlay, v novodobých dějinách minecraftu vždy 2. největší Československý server, mohl končit. Bohužel však nic nemá nekonečného trvání a QPlay není výjimkou. Každý si zde zažil své, někdo zde trávil spousty hodin denně, někdo se jen párkrát na server připojil. :video_game: Troufám si ale říct, že tento projekt zanechal v každém minecraft-multiplayer hráči nezapomenutelnou vzpomínku, ke které se vždy rád vrátí. ✨Já osobně jsem zde poznal nespočet skvělých lidí. Po téměř dvou letech na pozici Helpera jsem si odnesl nesmírné množství zkušeností, které dennodenně uplatňuji v reálném životě a jsem přesvědčen, že mi přijdou vhod i v mém budoucím zaměstnání. I v mém srdci QPlay zůstane navždy, a to jen díky odvaze a odhodlání Profikka, který to v roce 2014 pořádně rozjel. 💙 Ukončeme to tedy lehce s humorem mou oblíbenou větou. &quot;Bylo to krásné a bylo toho dost. Sbohem a šáteček.&quot; M1che_ ✌️"
                        imageOnRight={false}
                    />
                    <MemberMemory
                        nick="pewoxcz"
                        image={pewoxcz}
                        text="Psal se rok 2017 a já díky YouTube objevil server QPlay.cz. Na serveru jsem strávil velmi hodně hodin, jak za hráče, tak za YouTubera a nakonec za Helpera. Děkuji těm, díky kterým mám mnoho kladných vzpomínek na tento server. QPlay byl vždy srdcovka. Díky moc."
                        imageOnRight={true}
                    />
                </div>
            </section>
        </div>
    )
}
