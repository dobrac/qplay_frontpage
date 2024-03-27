import Head from "next/head"
import Banner from "../../components/Banner";
import _razorRalfcz from "../../public/images/team/_razorRalfcz.png"
import swannythedev from "../../public/images/team/swannythedev.png"
import MemberMemory from '../../components/MemberMemory';

export default function Memories() {
    return (
        <div>
            <Head>
                <title>Vzpomínky | QPlay.cz</title>
                <meta name="description" content="Vzpomínky Content Teamu"/>
            </Head>
            <Banner sm={true}>
                <div className="pagename">
                    <h1>Vzpomínky Content Teamu</h1>
                </div>
            </Banner>
{/*            <section className="aboutus">
                <div className="container">
                    <h1 className="title">Střípky vedení teamu</h1>
                    <MemberMemory
                        nick="_razorRalfcz"
                        image={_razorRalfcz}
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
                    <h1 className="title">Střípky grafiků</h1>
                    <MemberMemory
                        nick="swannythedev"
                        image={swannythedev}
                        text="Chtěl bych projektu QPlay.cz poděkovat za možnost otevřít si oči v profesionálním zázemí. Schopnosti, které jsem na QPlayi získal, pro mě mají nevyčíslitelnou hodnotu, protože kdyby tento projekt nevznikl, určitě by moje kariéra stagnovala na začátcích a nebyla by tam, kde je teď. Obrovské díky patří i grafickému designerovi eriixrd, který mě vše naučil. S Erikem bylo vždy naší prioritou tvořit unikátní vizuální &quot;zážitek&quot;, jenž na scéně nemá obdoby a myslím si, že jsme tenhle cíl splnili. Nikdy to nebylo jen tak, za každou grafikou bylo několik hodin práce, při které se protočilo obrovské množství nápadů a to naší práci přidává hodnotu. Ale kromě kariérního růstu s QPlayem končí i část mého dětství. Ukončení provozu ve mně vyplavilo spoustu vzpomínek, které jsem si na QP utvořil. Ještě jednou velké díky a přeji všem jen to nejlepší do života."
                        imageOnRight={false}
                    />
                </div>
            </section>
        </div>
    )
}
