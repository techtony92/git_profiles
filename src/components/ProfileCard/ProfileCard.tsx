import React, { useState, useEffect } from "react";
import { PiUsers } from "react-icons/pi";
import {
  FaXTwitter,
  FaEnvelope,
  FaLink,
  FaRegClock,
  FaRegBuilding,
  FaLocationDot,
} from "react-icons/fa6";
import type { GitAPIResponse } from "../../externalAPI/types";
export function ProfileCard({ profile }: { profile?: GitAPIResponse }) {
  return (
    <div
      id="profile__userDetails"
      className={"w-fit flex flex-col justify-start items-start"}
    >
      <div id="profileFrame" className={""}>
        <img
          id="profilePhoto"
          className={
            "w-[40rem] h-[40rem] border-8 border-Lavender border-solid rounded-[50%]"
          }
          src={`${profile !== null && profile !== undefined ? profile.data.avatar_url : null}`}
          alt=""
        />
      </div>
      <div id="profile__NameSection" className={"w-full py-8 mb-12"}>
        <h2 id="fullName" className={"text-left text-6xl text-Lavender pb-2"}>
          {profile && profile.data.name}
        </h2>
        <h3
          id="profileName"
          className={"text-Lavender/70 text-5xl font-light "}
        >
          ggeranov
        </h3>
      </div>
      <div id="profile__Actions" className={" w-full mb-6"}>
        <button
          id="followBtn"
          className={
            "text-Lavender text-center text-3xl font-medium w-80 h-20 bg-Alien rounded-xl mr-12"
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
        <PiUsers size={16} className={"text-Lavender inline-block mr-1"} />
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
          <h3 className={"text-Lavender inline-block"}>Sofia, Bulgaria</h3>
        </div>
        <div id="social__timezone" className={""}>
          <FaRegClock className={"text-Lavender inline-block mr-2"} />
          <h3 className={"text-Lavender inline-block"}>4:29 - 6h ahead</h3>
        </div>
        <div id="social__website" className={""}>
          <FaLink className={"text-Lavender inline-block mr-2"} />
          <h3 className={"text-Lavender inline-block"}>
            https://ggerganov.com
          </h3>
        </div>
        <div id="social__email" className={""}>
          <FaEnvelope className={"text-Lavender inline-block mr-2"} />
          <h3 className={"text-Lavender inline-block"}>ggerganov@gmail.com</h3>
        </div>
        <div id="social__twitter" className={""}>
          <FaXTwitter className={"text-Lavender inline-block mr-2"} />
          <h3 className={"text-Lavender inline-block"}>@ggerganov</h3>
        </div>
      </div>
    </div>
  );
}
