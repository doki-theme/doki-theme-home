import { writable } from "svelte/store";
import DokiThemeDefinitions from "./DokiThemeDefinitions";
import type { DokiTheme } from "./Types";

export const DEFAULT_THEME = "e55e70ea-454b-47ef-9270-d46390dd2769";

function getParameterByName(name, url = "") {
  name = name.replace(/[[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const getTheme = (themeId: string) =>
  DokiThemeDefinitions[themeId] || DokiThemeDefinitions[DEFAULT_THEME];

const createCurrentTheme = () => {
  const { subscribe, set } = writable<DokiTheme>(
    getTheme(getParameterByName("themeId") || DEFAULT_THEME)
  );

  return {
    subscribe,
    setTheme: (themeId: string) => {
      set(getTheme(themeId));
    },
  };
};

export const currentTheme = createCurrentTheme();
