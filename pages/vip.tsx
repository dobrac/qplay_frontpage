import Head from "next/head";
import VIPTable from "../components/VIPTable";
import Banner from "../components/Banner";

export default function VIP() {
  return (
    <div>
      <Head>
        <title>VIP | QPlay.cz</title>
        <meta name="description" content="VIP účet na našem serveru."/>
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>VIP ÚČET</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          {/* <center>
            <a href="#darkovyPoukaz" style="text-decoration:none;border:none;"
              ><img src="/images/BannerPNGFinal.png" style="max-width:100%"/></a
            ><br />
            <br />
          </center> */}
          {/*  
    <center>
            <a href="#naramekAkce" style="text-decoration:none;border:none;"><img src="images/WebNaramkyAkce.png?ver=2" ></a><br> <br><br>
    </center>    */}
          {/*  <header>
            <center>
              <h2>Jak si koupit VIP?</h2>
            </center>
          </header> */}
          {/*  <h2><b><center><font color=indianred>Speciální VÁNOČNÍ Crate pro všechna VIP!</font></b></center></h2>
          <h2><b><center><font color=firebrick>SILVESTROVSKÁ  AKCE: Ke všem VIP + 1 Crate!</font></b></center></h2>
          <h2>
            <center>
              <font color="orange" style="font-weight: bold;">
                Speciální HALLOWEEN Crate pro všechna VIP!
              </font>
            </center>
          </h2> */}
          {/*  h2>
            <center>
              <font color="indianred" style="font-weight: bold">
                Pololetní akce na všechna VIP!
              </font>
            </center>
          </h2> */}
          {/* h2>
            <center>
              <font color="indianred" style="font-weight: bold">
                Speciální CHRISTMAS Crate pro všechna VIP!
              </font>
            </center>
          </h2> */}
          {/* <h2>
            <div style={{textAlign: "center"}}>
              <span style={{fontWeight: "bold", color: "#e75480"}}>
              Valentýnská akce na všechna VIP!
              </span>
            </div>
          </h2> */}
          {/* <h2>
            <div style={{textAlign: "center"}}>
              <span style={{fontWeight: "bold", color: "#2AC820"}}>
                Velikonoční akce na VIP!
              </span>
            </div>
          </h2> */}
          
          {/*<h4 style={{textAlign: "center"}}>
          <span><a href="#poukaz VIP" className={"voucher"}><Image src={Voucher}  alt={"voucher"}/></a></span>
        </h4>*/}
          <br/>
          <div className="table-responsive">
            <VIPTable/>
          </div>
          <a id="zakoupeniVIP" style={{position: "relative", top: "-50vh"}}/>

          <br/>

          <p>
            *Crate Shards je měna, kterou vlastní pouze hráč s LEGEND VIP.
            Získává se místo Coinů hraním miniher. Na Lobby v Crate Factory si lze
            následně Crate Shards proměnit na normální crates (BASIC, MYSTERY,
            LEGEND) a v sezónách i na například Christmas, Valentine, Halloween
            crate.
          </p>

          

          
        </div>
      </section>
    </div>
  )
}
