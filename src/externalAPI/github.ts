import { Octokit } from "octokit";
const octokit = new Octokit({
  auth: import.meta.env.VITE_GIT_TOKEN,
});

export async function listUsers(callback: (data?: any, error?: any) => void) {
  try {
    const gitAPIRequest = await octokit.request("GET /users");
    callback(gitAPIRequest);
  } catch (error) {
    callback(error);
  }
}

export async function queryCoverProfile(
  callback: (status: "success" | "error", data?: any, error?: any) => void,
) {
  try {
    const gitAPIUserRequest = await octokit.request("GET /users/{username}", {
      username: "ggerganov",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const gitAPIUserRepoRequest = await octokit.request(
      "GET /users/{username}/repos",
      {
        username: "ggerganov",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );
    callback("success", [gitAPIUserRequest, gitAPIUserRepoRequest]);
  } catch (error) {
    callback("error", error);
  }
}

export async function queryUser(
  queryParam: string,
  callback: (data?: any, error?: any) => void,
) {
  try {
    const gitAPIRequest = await octokit.request(`GET /users/${queryParam}`);
    callback(gitAPIRequest);
  } catch (error) {
    callback(error);
  }
}
