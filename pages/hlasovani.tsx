import Head from "next/head";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

class Website {
  name: string;
  url: string;
  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
  getUrl(username: string) {
    return this.url + encodeURIComponent(username);
  }
}

const websites = [
  new Website("Craftlist.org", "https://craftlist.org/qplay?username="),
  new Website(
    "Czech-Craft.eu",
    "https://czech-craft.eu/server/qplay/vote/?user="
  ),
  new Website(
    "Minecraft-list.cz",
    "https://www.minecraft-list.cz/server/qplaycz/vote?name="
  ),
  new Website(
    "MinecraftServery.eu",
    "https://minecraftservery.eu/server?id=1499&nick="
  ),
];

function getNicknameFromCookies() {
  const regex = new RegExp(`(^| )voting_username=([^;]+)`)
  const match = document.cookie.match(regex)
  if (match) {
    return decodeURIComponent(match[2])
  }
}

function saveNicknameToCookies(username: string) {
  const encodedUsername = encodeURIComponent(username);
  document.cookie = "voting_username=" + encodedUsername;
}

export default function Hlasovani() {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [showModal, setShowModal] = useState(false);

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    saveNicknameToCookies(nickname)
    setShowModal(true);
  }

  useEffect(() => {
    const nickParam = router.query.nick;

    if (nickParam) {
      setNickname(nickParam as string);
      setShowModal(true);
      return
    }

    const cookieUsername = getNicknameFromCookies();
    if (cookieUsername) {
      setNickname(cookieUsername)
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>Hlasování | QPlay.cz</title>
        <meta name="description" content="Hlasování pro server QPlay.cz" />
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>Hlasování</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="modal-dialog">
          {showModal ? (
            <div className="modal-content">
              <div className="modal-header justify-content-start gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-light"
                  style={{ padding: "0.75rem" }}
                >
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z"
                      fill="#000000"
                    />
                  </svg>
                </button>
                <h5 className="modal-title">
                  Vítej <strong>{nickname}</strong>, hlasovat pro náš server
                  můžeš zde:
                </h5>
              </div>
              <div className="modal-body">
                <p>
                  Hlasovat můžeš na každém z následujících server listů každé 2
                  hodiny. Za každý hlas obdržíš jeden vote point, za které si
                  následně ve hře můžeš koupit kit na jakékoliv minihře nebo
                  poklad na survivalu.
                </p>
                <div className="d-grid gap-2">
                  {websites.map((website) => {
                    return (
                      <a
                        key={website.url}
                        target="_blank"
                        href={website.getUrl(nickname)}
                        className="btn btn-danger d-flex align-items-center justify-content-between gap-2"
                      >
                        {website.name}
                        <svg
                          fill="#FFFFFF"
                          width="15px"
                          height="16px"
                          viewBox="0 0 52 52"
                          enableBackground="new 0 0 52 52"
                        >
                          <g>
                            <path
                              d="M48.7,2H29.6C28.8,2,28,2.5,28,3.3v3C28,7.1,28.7,8,29.6,8h7.9c0.9,0,1.4,1,0.7,1.6l-17,17
		c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0l17-17c0.6-0.6,1.6-0.2,1.6,0.7v7.9c0,0.8,0.8,1.7,1.6,1.7h2.9
		c0.8,0,1.5-0.9,1.5-1.7v-19C50,2.5,49.5,2,48.7,2z"
                            />
                            <path
                              d="M36.3,25.5L32.9,29c-0.6,0.6-0.9,1.3-0.9,2.1v11.4c0,0.8-0.7,1.5-1.5,1.5h-21C8.7,44,8,43.3,8,42.5v-21
		C8,20.7,8.7,20,9.5,20H21c0.8,0,1.6-0.3,2.1-0.9l3.4-3.4c0.6-0.6,0.2-1.7-0.7-1.7H6c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28
		c2.2,0,4-1.8,4-4V26.2C38,25.3,36.9,24.9,36.3,25.5z"
                            />
                          </g>
                        </svg>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={submitForm} className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Hlasovat pro náš server můžeš zde:
                </h5>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="nick">Nick</label>
                  <input
                    type="text"
                    id="nick"
                    className="form-control"
                    placeholder="Vlož nick na serveru"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-danger">
                  Odeslat
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
