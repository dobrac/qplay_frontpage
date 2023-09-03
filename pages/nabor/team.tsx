import Head from "next/head"
import Banner from "../../components/Banner";

export default function Hire() {
  return (
    <div>
    <Head>
      <title>Náš tým | QPlay.cz</title>
      <meta name="description" content="Seznam členů našeho týmu."/>
    </Head>
    <Banner sm={true}>
      <div className="pagename">
        <h1>Náš tým</h1>
      </div>
    </Banner>
    </div>
  )
}
