import Head from "next/head"
import Banner from "../components/Banner";
import {AdminTeamGroupDTO, GroupCategory, MediaGroupDTO} from "../api-client";
import {sortBy} from "lodash";
import Avatar from "../components/Avatar";
import {ParsedUrlQuery} from "querystring";
import {GetStaticProps} from "next";
import {findAdminTeam, findMedia} from "../api/adminteam";

function getGroupCategoryName(category: GroupCategory): string {
  switch (category) {
    case GroupCategory.VEDENI_SERVER:
      return "Vedení Serveru";
    case GroupCategory.VEDENI_TEAM:
      return "Vedení Teamu";
    case GroupCategory.HELPER_TEAM:
      return "Helper Team";
    case GroupCategory.MODERATOR_TEAM:
      return "Moderator Team";
    case GroupCategory.BUILDER_TEAM:
      return "Builder Team";
    case GroupCategory.TECHNIK_TEAM:
      return "Technik Team";
    case GroupCategory.CONTENT_TEAM:
      return "Content Team";
    case GroupCategory.CHEATHUNTER_TEAM:
      return "CheatHunter Team";
    case GroupCategory.YOUTUBER:
      return "Youtubeři";
    case GroupCategory.TIKTOKER:
      return "TikTokeři";
  }

  return "Categorie nenalezena: " + category;
}

interface GroupsProps {
  adminTeam: AdminTeamGroupDTO[]
  media: MediaGroupDTO[]
}

export default function Groups({adminTeam, media}: GroupsProps) {

  return (
    <div>
      <Head>
        <title>Náš tým | QPlay.cz</title>
        <meta name="description" content="Pozice na serveru QPlay.cz"/>
      </Head>
      <Banner sm={true}>
        <div className="pagename">
          <h1>Náš tým</h1>
        </div>
      </Banner>
      <section className="pagecontent">
        <div className="container">
          {adminTeam?.map((group, index, array) => {
            return (
              <div key={group.category} className="container">
                <h4 className="mb-4 text-center">
                  {getGroupCategoryName(group.category)}
                </h4>
                <div className="row">
                  {sortBy(group.entries, [
                    (it) => -it.group.priority,
                    (it) => it.user.nickname.toLowerCase(),
                  ]).map((entry) => {
                    return (
                      <div
                        key={entry.user.uuid}
                        className="col-12 col-sm-6 col-md-4 my-4"
                      >
                        <div className="card">
                          <div className="pt-3" style={{backgroundColor: "whitesmoke"}}>
                            <Avatar author={entry.user}/>
                          </div>
                          <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title mb-0">
                              {entry.user.nickname}
                            </h5>
                            <div className="text-secondary">{entry.group.groupDisplay}</div>
                            {/*
                            <div className="card-text mt-2">
                            </div>
                             */}
                          </div>
                          {/* entry.sinceDate && (
                            <div className="card-footer text-secondary">
                              Od <time dateTime={entry.sinceDate}>{convertDate(entry.sinceDate)}</time>
                            </div>
                          ) */}
                        </div>
                      </div>
                    );
                  })}
                </div>
                {index !== array.length - 1 && <hr className="my-5"/>}
              </div>
            );
          })}
          <hr className="my-5"/>
          {media?.map((group, index, array) => {
            return (
              <div key={group.category} className="container">
                <h4 className="mb-4 text-center text-secondary">
                  {getGroupCategoryName(group.category)}
                </h4>
                <div className="row">
                  {sortBy(group.entries, [
                    (it) => -it.group.priority,
                    (it) => it.user.nickname.toLowerCase(),
                  ]).map((entry) => {
                    return (
                      <div
                        key={entry.user.uuid}
                        className="col-12 col-sm-6 col-md-4 my-4"
                      >
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <Avatar author={entry.user}/>
                          </div>
                          <div className="mt-4">
                            {entry.link ? (
                              <a
                                href={entry.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-decoration-none"
                              >
                                {entry.user.nickname}{" "}
                                <b>[{entry.group.groupDisplay}]</b>
                              </a>
                            ) : (
                              <>
                                {entry.user.nickname}{" "}
                                <b>[{entry.group.groupDisplay}]</b>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {index !== array.length - 1 && <hr className="my-5"/>}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  )
}

interface StaticPageParams extends ParsedUrlQuery {
  id?: string
}

export const getStaticProps: GetStaticProps<GroupsProps, StaticPageParams> = async () => {
  const adminTeam = await findAdminTeam()
  const media = await findMedia()

  return {
    props: {
      adminTeam: adminTeam.data ?? [],
      media: media.data ?? []
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}