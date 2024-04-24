import React from "react";
import { FaCodeFork, FaRegStar } from "react-icons/fa6";

import type { GitAPIResponse } from "../../externalAPI/types";
export function RepoGrid({ repositories }: { repositories: GitAPIResponse }) {
  console.log(repositories);
  return (
    <div className={" grid gap-6 grid-cols-4 "}>
      {repositories.data.map((repository) => (
        <div
          key={repository.id}
          className={
            " w-[32rem] h-[19rem] rounded bg-Charcoal py-4 flex flex-col justify-between items-start bg-no-repeat bg-cover bg-center bg-[url('/github-mark.png')]"
          }
        >
          <div className=" w-full flex flex-col justify-start items-start ">
            <div className="w-full flex flex-row justify-between p-3 ">
              <h1 className={"text-3xl text-Lavender text-left"}>
                {repository.name}
              </h1>
              <h2
                className={
                  "text-1xl text-Lavender text-right px-4 py-1 border rounded-2xl"
                }
              >
                {repository.visibility}
              </h2>
            </div>
            <h2 className={"text-2xl text-Lavender/40 text-left px-4 "}>
              {repository.description && repository.description.length > 50
                ? repository.description.substring(0, 50).concat("...")
                : repository.description}
            </h2>
          </div>
          <div className="w-full flex flex-row gap-6 p-4 justify-start items-center">
            <div className="w-max ">
              <h2 className={"text-2xl text-Lavender text-left"}>
                {repository.language}
              </h2>
            </div>
            <div className="w-max ">
              <h2 className={"text-2xl text-Lavender text-left px-2 inline"}>
                {repository.stargazers_count}
              </h2>
              <FaRegStar className="inline" />
            </div>
            <div className="w-max ">
              <h2 className={"text-2xl text-Lavender text-left px-2 inline"}>
                {repository.forks}
              </h2>
              <FaCodeFork className="inline" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
