import React from "react";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import { PiUsers } from "react-icons/pi";
import {
  FaRegClock,
  FaRegBuilding,
  FaLink,
  FaEnvelope,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  cellAlign: "left",
  contain: true,
  autoPlay: 1500,
  pauseAutoPlayOnHover: false,
};

type CarouselProps = {
  children: React.JSX.Element | Array<React.JSX.Element>;
};

export function Carousel({ children }: CarouselProps) {
  return (
    <Flickity
      className="carousel h-[35rem] w-full "
      elementType={"div"}
      options={flickityOptions}
      disableImagesLoaded
      reloadOnUpdate
      static
    >
      <div className="w-fit h-full p-10 bg-Deep">
        <div className="w-full h-full bg-[url(/github-mark.png)] bg-no-repeat bg-center bg-contain rounded-lg bg-Licorice/70 ">
          <div className="w-full h-full p-8 flex flex-row justify-start items-start gap-12 ">
            <img
              className="object-cover w-[16rem] h-[16rem]"
              src="/uifaces-popular-image_1.jpg"
              alt="landingProfilePhoto"
            />
            <div className="flex flex-col justify-evenly items-start">
              <div data-attr="name" className=" text-Lavender">
                <h1 className="text-4xl text-left pb-4">Danny McClean</h1>
                <h2
                  data-attr="occupation_title"
                  className="text-2xl text-left pb-4"
                >
                  Senior Software Engineer
                </h2>
              </div>
              <div className="flex flex-col justify-evenly items-start">
                <div id="profile__tagLine" className="">
                  <h3 className={"text-Lavender text-2xl font-medium mb-6"}>
                    i like big .vimrc and i cannot lie
                  </h3>
                </div>
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
            </div>

            <div
              id="profile__SocialMedia"
              className={"flex flex-col justify-start items-start gap-4 "}
            >
              <div id="social__org" className="">
                <FaRegBuilding className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggml-org</h3>
              </div>
              <div id="social__website" className="">
                <FaLink className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  https://ggerganov.com
                </h3>
              </div>
              <div id="social__email" className="">
                <FaEnvelope className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  ggerganov@gmail.com
                </h3>
              </div>
              <div id="social__twitter" className="">
                <FaXTwitter className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggerganov</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit h-full p-10 bg-Deep">
        <div className="w-full h-full bg-[url(/github-mark.png)] bg-no-repeat bg-center bg-contain rounded-lg bg-Licorice/70 ">
          <div className="w-full h-full p-8 flex flex-row justify-start items-start gap-12 ">
            <img
              className="object-cover w-[16rem] h-[16rem]"
              src="/uifaces-popular-image_1.jpg"
              alt="landingProfilePhoto"
            />
            <div className="flex flex-col justify-evenly items-start">
              <div data-attr="name" className=" text-Lavender">
                <h1 className="text-4xl text-left pb-4">Danny McClean</h1>
                <h2
                  data-attr="occupation_title"
                  className="text-2xl text-left pb-4"
                >
                  Senior Software Engineer
                </h2>
              </div>
              <div className="flex flex-col justify-evenly items-start">
                <div id="profile__tagLine" className="">
                  <h3 className={"text-Lavender text-2xl font-medium mb-6"}>
                    i like big .vimrc and i cannot lie
                  </h3>
                </div>
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
              {/* <div className="">
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
              </div> */}
            </div>

            <div
              id="profile__SocialMedia"
              className={"flex flex-col justify-start items-start gap-4 "}
            >
              <div id="social__org" className="">
                <FaRegBuilding className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggml-org</h3>
              </div>
              <div id="social__website" className="">
                <FaLink className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  https://ggerganov.com
                </h3>
              </div>
              <div id="social__email" className="">
                <FaEnvelope className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  ggerganov@gmail.com
                </h3>
              </div>
              <div id="social__twitter" className="">
                <FaXTwitter className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggerganov</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit h-full p-10 bg-Deep">
        <div className="w-full h-full bg-[url(/github-mark.png)] bg-no-repeat bg-center bg-contain rounded-lg bg-Licorice/70 ">
          <div className="w-full h-full p-8 flex flex-row justify-start items-start gap-12 ">
            <img
              className="object-cover w-[16rem] h-[16rem]"
              src="/uifaces-popular-image_1.jpg"
              alt="landingProfilePhoto"
            />
            <div className="flex flex-col justify-evenly items-start">
              <div data-attr="name" className=" text-Lavender">
                <h1 className="text-4xl text-left pb-4">Danny McClean</h1>
                <h2
                  data-attr="occupation_title"
                  className="text-2xl text-left pb-4"
                >
                  Senior Software Engineer
                </h2>
              </div>
              <div className="flex flex-col justify-evenly items-start">
                <div id="profile__tagLine" className="">
                  <h3 className={"text-Lavender text-2xl font-medium mb-6"}>
                    i like big .vimrc and i cannot lie
                  </h3>
                </div>
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
              {/* <div className="">
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
              </div> */}
            </div>

            <div
              id="profile__SocialMedia"
              className={"flex flex-col justify-start items-start gap-4 "}
            >
              <div id="social__org" className="">
                <FaRegBuilding className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggml-org</h3>
              </div>
              <div id="social__website" className="">
                <FaLink className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  https://ggerganov.com
                </h3>
              </div>
              <div id="social__email" className="">
                <FaEnvelope className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  ggerganov@gmail.com
                </h3>
              </div>
              <div id="social__twitter" className="">
                <FaXTwitter className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggerganov</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit h-full p-10 bg-Deep">
        <div className="w-full h-full bg-[url(/github-mark.png)] bg-no-repeat bg-center bg-contain rounded-lg bg-Licorice/70 ">
          <div className="w-full h-full p-8 flex flex-row justify-start items-start gap-12 ">
            <img
              className="object-cover w-[16rem] h-[16rem]"
              src="/uifaces-popular-image_1.jpg"
              alt="landingProfilePhoto"
            />
            <div className="flex flex-col justify-evenly items-start">
              <div data-attr="name" className=" text-Lavender">
                <h1 className="text-4xl text-left pb-4">Danny McClean</h1>
                <h2
                  data-attr="occupation_title"
                  className="text-2xl text-left pb-4"
                >
                  Senior Software Engineer
                </h2>
              </div>
              <div className="flex flex-col justify-evenly items-start">
                <div id="profile__tagLine" className="">
                  <h3 className={"text-Lavender text-2xl font-medium mb-6"}>
                    i like big .vimrc and i cannot lie
                  </h3>
                </div>
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
              {/* <div className="">
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
              </div> */}
            </div>

            <div
              id="profile__SocialMedia"
              className={"flex flex-col justify-start items-start gap-4 "}
            >
              <div id="social__org" className="">
                <FaRegBuilding className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggml-org</h3>
              </div>
              <div id="social__website" className="">
                <FaLink className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  https://ggerganov.com
                </h3>
              </div>
              <div id="social__email" className="">
                <FaEnvelope className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  ggerganov@gmail.com
                </h3>
              </div>
              <div id="social__twitter" className="">
                <FaXTwitter className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggerganov</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit h-full p-10 bg-Deep">
        <div className="w-full h-full bg-[url(/github-mark.png)] bg-no-repeat bg-center bg-contain rounded-lg bg-Licorice/70 ">
          <div className="w-full h-full p-8 flex flex-row justify-start items-start gap-12 ">
            <img
              className="object-cover w-[16rem] h-[16rem]"
              src="/uifaces-popular-image_1.jpg"
              alt="landingProfilePhoto"
            />
            <div className="flex flex-col justify-evenly items-start">
              <div data-attr="name" className=" text-Lavender">
                <h1 className="text-4xl text-left pb-4">Danny McClean</h1>
                <h2
                  data-attr="occupation_title"
                  className="text-2xl text-left pb-4"
                >
                  Senior Software Engineer
                </h2>
              </div>
              <div className="flex flex-col justify-evenly items-start">
                <div id="profile__tagLine" className="">
                  <h3 className={"text-Lavender text-2xl font-medium mb-6"}>
                    i like big .vimrc and i cannot lie
                  </h3>
                </div>
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
              {/* <div className="">
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
              </div> */}
            </div>

            <div
              id="profile__SocialMedia"
              className={"flex flex-col justify-start items-start gap-4 "}
            >
              <div id="social__org" className="">
                <FaRegBuilding className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggml-org</h3>
              </div>
              <div id="social__website" className="">
                <FaLink className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  https://ggerganov.com
                </h3>
              </div>
              <div id="social__email" className="">
                <FaEnvelope className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  ggerganov@gmail.com
                </h3>
              </div>
              <div id="social__twitter" className="">
                <FaXTwitter className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggerganov</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit h-full p-10 bg-Deep">
        <div className="w-full h-full bg-[url(/github-mark.png)] bg-no-repeat bg-center bg-contain rounded-lg bg-Licorice/70 ">
          <div className="w-full h-full p-8 flex flex-row justify-start items-start gap-12 ">
            <img
              className="object-cover w-[16rem] h-[16rem]"
              src="/uifaces-popular-image_1.jpg"
              alt="landingProfilePhoto"
            />
            <div className="flex flex-col justify-evenly items-start">
              <div data-attr="name" className=" text-Lavender">
                <h1 className="text-4xl text-left pb-4">Danny McClean</h1>
                <h2
                  data-attr="occupation_title"
                  className="text-2xl text-left pb-4"
                >
                  Senior Software Engineer
                </h2>
              </div>
              <div className="flex flex-col justify-evenly items-start">
                <div id="profile__tagLine" className="">
                  <h3 className={"text-Lavender text-2xl font-medium mb-6"}>
                    i like big .vimrc and i cannot lie
                  </h3>
                </div>
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
              {/* <div className="">
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
                <div className="">
                  <h2 className="">repo 1 with short name</h2>
                </div>
              </div> */}
            </div>

            <div
              id="profile__SocialMedia"
              className={"flex flex-col justify-start items-start gap-4 "}
            >
              <div id="social__org" className="">
                <FaRegBuilding className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggml-org</h3>
              </div>
              <div id="social__website" className="">
                <FaLink className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  https://ggerganov.com
                </h3>
              </div>
              <div id="social__email" className="">
                <FaEnvelope className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>
                  ggerganov@gmail.com
                </h3>
              </div>
              <div id="social__twitter" className="">
                <FaXTwitter className={"text-Lavender inline-block mr-2"} />
                <h3 className={"text-Lavender inline-block"}>@ggerganov</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-[70rem] h-full p-10">
        <img className="w-full h-full" src="/github-mark.png" alt="" />
      </div>
      <div className="w-[70rem] h-full p-10">
        <img className="w-full h-full" src="/github-mark.png" alt="" />
      </div>
      <div className="w-[70rem] h-full p-10">
        <img className="w-full h-full" src="/github-mark.png" alt="" />
      </div>
      <div className="w-[70rem] h-full p-10">
        <img className="w-full h-full" src="/github-mark.png" alt="" />
      </div>
      <div className="w-[70rem] h-full p-10">
        <img className="w-full h-full" src="/github-mark.png" alt="" />
      </div>
      <div className="w-[70rem] h-full p-10">
        <img className="w-full h-full" src="/github-mark.png" alt="" />
      </div> */}
    </Flickity>
  );
}
