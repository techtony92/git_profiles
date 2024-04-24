export interface GitAPIResponse {
  data: Array<GitAPIResponseData>;
  headers: GitAPIResponseHeaders;
}

type indexedAccess = {
  [index: string]: string | number;
};

type GitAPIResponseData = indexedAccess & {
  allow_forking: boolean;
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: string; //convert this to a more narrow data-time timestamp type"2017-08-27T11:28:52Z"
  default_branch: string; // convert this to a more narrow type "master"
  deployments_url: string;
  description: string;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: null | string;
  hooks_url: string;
  html_url: string;
  id: number;
  is_template: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: string | Array<string>;
  languages_url: string;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  }; //{'mit', name: 'MIT License', spdx_id: 'MIT', url: 'https://api.github.com/licenses/mit', node_id: 'MDc6TGljZW5zZTEz'}
  merges_url: string;
  milestones_url: string;
  mirror_url: null | string;
  name: string;
  node_id: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
  }; //{login: 'ggerganov', id: 1991296, node_id: 'MDQ6VXNlcjE5OTEyOTY=', avatar_url: 'https://avatars.githubusercontent.com/u/1991296?v=4', gravatar_id: '', …}
  permissions: {
    admin: boolean;
    maintain: boolean;
    push: boolean;
    triage: boolean;
    pull: boolean;
  };
  private: boolean;
  pulls_url: string;
  pushed_at: string;
  releases_url: string;
  size: number;
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  topics: number & Array<string>; //(5) ['asteroids', 'computer-graphics', 'procedural-generation', 'raytracing', 'shadows']
  trees_url: string;
  updated_at: string;
  url: string;
  visibility: string;
  watchers: number;
  watchers_count: number;
  web_commit_signoff_required: boolean;
  //--------profile Types
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  email: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: string | null;
  location: string;
  login: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: string;
};

type GitAPIResponseHeaders = indexedAccess & {
  "cache-control": string;
  "content-type": string;
  etag: string;
  link: string;
  "last-modifier": string;
  "x-github-media-type": string;
  "x-github-request-id": string;
  "x-ratelimit-limit": string;
  "x-ratelimit-remaining": string;
  "x-ratelimit-reset": string;
  "x-ratelimit-resource": string;
  "x-ratelimit-used": string;
};
