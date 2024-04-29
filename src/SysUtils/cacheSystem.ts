import { createTimer, cacheObserver } from "./timeUtil";
import { listUsers } from "../externalAPI/github";
let cache = {};
let timer;
export function createDataCache(data) {
  cache = data;
  timer = createTimer();
  timer.start();
  cacheObserver(timer);
}

export function accessCache() {
  if (timeElapsed) {
    hydrate();
    return cache;
  }
  return cache;
}

function hydrate() {
  // call remote data fetch functions here, initial and revalidate stuff here.
}
