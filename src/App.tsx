import React, { useState, useEffect } from "react";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { RepoGrid } from "./components/Grids/RepoGrid";
import { Carousel } from "./components/carousel";
import { queryCoverProfile } from "./externalAPI/github";
import type { GitAPIResponse } from "./externalAPI/types";
function App() {
  const [coverProfile, updateCoverProfile] =
    useState<Array<GitAPIResponse> | null>(null);

  useEffect(() => {
    if (coverProfile === null) {
      queryCoverProfile(
        (
          status: "success" | "error",
          remoteResponse: Array<GitAPIResponse>,
        ) => {
          if (status === "error") return;
          updateCoverProfile(remoteResponse);
        },
      );
    }
  }, [coverProfile]);
  const flickityOptions = {
    initialIndex: 2,
  };
  console.log(coverProfile);
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
        <Carousel />
        <div
          className={
            "flex flex-row justify-between align-top rounded-md border-Neutral border-2 w-full pl-20 pr-80 pt-10"
          }
        >
          <div
            id="filters"
            className={" w-60  flex flex-col justify-start align-middle"}
          ></div>

          {coverProfile !== null ? (
            <div className=" flex flex-row justify-start items-start ">
              <ProfileCard profile={coverProfile[0]} />
              {/* The Grid */}
              <RepoGrid repositories={coverProfile[1]} />
            </div>
          ) : (
            <h1> loading ...</h1>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
