import { writable } from "svelte/store";
import DokiThemeDefinitions from "./DokiThemeDefinitions";
import type { DokiTheme } from "./Types";

export const DEFAULT_THEME = "420b0ed5-803c-4127-97e3-dae6aa1a5972";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
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
