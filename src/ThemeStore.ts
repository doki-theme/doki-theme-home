import { writable } from "svelte/store";
import DokiThemeDefinitions from "./DokiThemeDefinitions";

export const BEST_GIRL = "8c99ec4b-fda0-4ab7-95ad-a6bf80c3924b";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const getTheme = (themeId: string) =>
  DokiThemeDefinitions[themeId] || DokiThemeDefinitions[BEST_GIRL];

const createCurrentTheme = () => {
  const { subscribe, set } = writable(
    getTheme(getParameterByName("themeId") || BEST_GIRL)
  );

  return {
    subscribe,
    setTheme: (themeId: string) => {
      set(getTheme(themeId));
    },
  };
};

export const currentTheme = createCurrentTheme();
