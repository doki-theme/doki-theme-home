import { writable } from "svelte/store";
import DokiThemeDefinitionsLite from "./DokiThemeDefinitionsLite";
import DefaultDokiThemeDefinition from "./DefaultDokiThemeDefinition";

import type { DokiTheme, DokiThemeLite } from "./Types";

export const DEFAULT_THEME = "e55e70ea-454b-47ef-9270-d46390dd2769";

const readUrl = () => {
  const url = window.location.href, name = "themeId";
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  const themeId = results && results[2] ?
    decodeURIComponent(results[2].replace(/\+/g, " ")) : DEFAULT_THEME;
  return themeId;
};

const isBrowser = typeof window !== 'undefined';
const currentThemeId = isBrowser ?
  readUrl() :
  DEFAULT_THEME;

const createCurrentThemeLite = () => {
  const { subscribe, set } = writable<DokiThemeLite>(
    {a: "#00000000", b: "#00000000"}
  );
  function setCurrentTheme(themeId: string) {
    set(DokiThemeDefinitionsLite[themeId] ||
      DokiThemeDefinitionsLite[DEFAULT_THEME]);
  }
  return {
    subscribe,
    setTheme: (themeId: string) => {
      setCurrentTheme(themeId);
    },
  };
};
export const currentThemeLite = createCurrentThemeLite();

if(isBrowser) {
  currentThemeLite.setTheme(currentThemeId);
}

const createCurrentTheme = () => {
  const { subscribe, set } = writable<DokiTheme>();
  async function setCurrentTheme(themeId: string) {
    try {
      const themeResponse = await fetch(`/themes/${themeId}.json`);
      const theme = await themeResponse.json();
      set(theme);
    } catch (e) {
      set(DefaultDokiThemeDefinition[DEFAULT_THEME]);
    }
  }
  return {
    subscribe,
    setTheme: (themeId: string) => {
      setCurrentTheme(themeId);
    },
  };
};

export const currentTheme = createCurrentTheme();
if(isBrowser) {
  currentTheme.setTheme(currentThemeId);
}
