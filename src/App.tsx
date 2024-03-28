import React from "react";
import { PiUsers } from "react-icons/pi";
import {
  FaXTwitter,
  FaEnvelope,
  FaLink,
  FaRegClock,
  FaRegBuilding,
  FaLocationDot,
} from "react-icons/fa6";

function App() {
  const tempAvatar = `https://images.newscientist.com/wp-content/uploads/2019/09/05110709/ed-bridges-landscape.jpg`;
  return (
    <>
      <main
        className={
          " bg-Lavender dark:bg-Obsidian w-full h-screen overflow-x-hidden"
        }
      >
        <h1
          className={
            " text-Obsidian dark:text-Lavender text-7xl text-center pt-48"
          }
        >
          Git Profiles
        </h1>

        <div
          className={
            "flex flex-row justify-between align-top rounded-md border-Neutral border-2 w-full pl-20 pr-80 pt-10"
          }
        >
          <div
            id="filters"
            className={" w-60  flex flex-col justify-start align-middle"}
          >
            <div
              id="filterStars"
              className={"flex flex-row justify-between align-top py-5"}
            >
              <label
                htmlFor="placeholderCheckbox"
                className="filterLabel text-4xl text-Lavender"
              >
                By Stars
              </label>
              <input type="checkbox" id="placeholderCheckbox" checked={false} />
            </div>
            <div
              id="filterStars"
              className={"flex flex-row justify-between align-top py-5"}
            >
              <label
                htmlFor="placeholderCheckbox"
                className="filterLabel text-4xl text-Lavender"
              >
                By Stars
              </label>
              <input type="checkbox" id="placeholderCheckbox" checked={false} />
            </div>
            <div
              id="filterStars"
              className={"flex flex-row justify-between align-top py-5"}
            >
              <label
                htmlFor="placeholderCheckbox"
                className="filterLabel text-4xl text-Lavender"
              >
                By Stars
              </label>
              <input type="checkbox" id="placeholderCheckbox" checked={false} />
            </div>
            <div
              id="filterStars"
              className={"flex flex-row justify-between align-top py-5"}
            >
              <label
                htmlFor="placeholderCheckbox"
                className="filterLabel text-4xl text-Lavender"
              >
                By Stars
              </label>
              <input type="checkbox" id="placeholderCheckbox" checked={false} />
            </div>
            <div
              id="filterStars"
              className={"flex flex-row justify-between align-top py-5"}
            >
              <label
                htmlFor="placeholderCheckbox"
                className="filterLabel text-4xl text-Lavender"
              >
                By Stars
              </label>
              <input type="checkbox" id="placeholderCheckbox" checked={false} />
            </div>
            <div
              id="filterStars"
              className={"flex flex-row justify-between align-top py-5"}
            >
              <label
                htmlFor="placeholderCheckbox"
                className="filterLabel text-4xl text-Lavender"
              >
                By Stars
              </label>
              <input type="checkbox" id="placeholderCheckbox" checked={false} />
            </div>
            <div
              id="filterStars"
              className={"flex flex-row justify-between align-top py-5"}
            >
              <label
                htmlFor="placeholderCheckbox"
                className="filterLabel text-4xl text-Lavender"
              >
                By Stars
              </label>
              <input type="checkbox" id="placeholderCheckbox" checked={false} />
            </div>
            <div
              id="filterStars"
              className={"flex flex-row justify-between align-top py-5"}
            >
              <label
                htmlFor="placeholderCheckbox"
                className="filterLabel text-4xl text-Lavender"
              >
                By Stars
              </label>
              <input type="checkbox" id="placeholderCheckbox" checked={false} />
            </div>
            <div
              id="filterStars"
              className={"flex flex-row justify-between align-top py-5"}
            >
              <label
                htmlFor="placeholderCheckbox"
                className="filterLabel text-4xl text-Lavender"
              >
                By Stars
              </label>
              <input type="checkbox" id="placeholderCheckbox" checked={false} />
            </div>
          </div>
          <div
            id="profile__userDetails"
            className={"w-fit flex flex-col justify-center"}
          >
            <div id="profileFrame" className={"self-center"}>
              <img
                id="profilePhoto"
                className={
                  "w-[40rem] h-[40rem] border-8 border-Lavender border-solid rounded-[50%]"
                }
                src={`${tempAvatar}`}
                alt=""
              />
            </div>
            <div id="profile__NameSection" className={"w-full py-8 mb-12"}>
              <h2
                id="fullName"
                className={"text-left text-6xl text-Lavender pb-2"}
              >
                Georgi Gerganov
              </h2>
              <h3
                id="profileName"
                className={"text-Lavender/70 text-5xl font-light "}
              >
                ggeranov
              </h3>
            </div>
            <div id="profile__Actions" className={"self-center mb-6"}>
              <button
                id="followBtn"
                className={
                  "text-Lavender text-center text-3xl font-medium w-80 h-20 bg-Alien rounded-xl mx-12"
                }
              >
                Follow
              </button>
              <button
                id="followBtn"
                className={
                  "text-Lavender text-center text-3xl font-medium w-80 h-20 bg-Alien rounded-xl mx-12"
                }
              >
                Sponsor
              </button>
            </div>

            <div id="profile__tagLine" className={""}>
              <h3 className={"text-Lavender text-2xl font-medium mb-6"}>
                i like big .vimrc and i cannot lie
              </h3>
            </div>
            <div id="profile__followCount" className={"mb-8"}>
              <PiUsers
                size={16}
                className={"text-Lavender inline-block mr-1"}
              />
              <h3 id="followers" className={"text-Lavender inline-block"}>
                <strong className={"mr-2"}>12.3K</strong>followers
              </h3>
              <h4 id="seperator" className="text-Lavender inline-block mx-2">
                |
              </h4>
              <h3 id="following" className={"text-Lavender inline-block"}>
                <strong className={"mr-2"}>13</strong>following
              </h3>
            </div>
            <div
              id="profile__SocialMedia"
              className={"flex flex-col justify-start items-start  "}
            >
              <div id="social__org" className={""}>
                <FaRegBuilding className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggml-org</h3>
              </div>
              <div id="social__org" className={""}>
                <FaLocationDot className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  Sofia, Bulgaria
                </h3>
              </div>
              <div id="social__timezone" className={""}>
                <FaRegClock className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  4:29 - 6h ahead
                </h3>
              </div>
              <div id="social__website" className={""}>
                <FaLink className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  https://ggerganov.com
                </h3>
              </div>
              <div id="social__email" className={""}>
                <FaEnvelope className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  ggerganov@gmail.com
                </h3>
              </div>
              <div id="social__twitter" className={""}>
                <FaXTwitter className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggerganov</h3>
              </div>
            </div>
          </div>
          {/* The Grid */}
          <div className={" grid gap-12 grid-cols-7 "}>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
            <div className={" w-[17rem] h-[19rem] rounded bg-Charcoal"}>
              <h1
                className={
                  " text-5xl text-Lavender translate-x-[45%] translate-y-[240%]"
                }
              >
                1
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
