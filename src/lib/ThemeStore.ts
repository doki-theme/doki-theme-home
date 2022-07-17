import { writable } from "svelte/store";
import DokiThemeDefinitionsLite from "./DokiThemeDefinitionsLite";
import DefaultDokiThemeDefinition from "./DefaultDokiThemeDefinition";

import type { DokiTheme, DokiThemeLite } from "./Types";

// Zero Two Obsidian
export const DEFAULT_THEME = "13adffd9-acbe-47af-8101-fa71269a4c5c";

const isBrowser = typeof window !== 'undefined';
const currentThemeId = isBrowser ?
  readQueryParamValue("themeId") || DEFAULT_THEME :
  DEFAULT_THEME;
const showWallpaperParam = isBrowser ?
  readQueryParamValue("showWallpaper") != "false" :
  true;

const createCurrentThemeLite = () => {
  const { subscribe, set } = writable<DokiThemeLite | undefined>(
    { a: "#00000000", b: "#00000000" }
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

const createShowWallpaper = () => {
  const { subscribe, set } = writable<boolean>(true);
  function setShowWallpaper(showWallpaper: boolean) {
    set(showWallpaper);
  }
  return {
    subscribe,
    setShowWallpaper: (showWallpaper: boolean) => {
      setShowWallpaper(showWallpaper);
    },
  };
};

export const currentThemeLite = createCurrentThemeLite();
export const showWallpaper = createShowWallpaper();

if (isBrowser) {
  currentThemeLite.setTheme(currentThemeId);
  showWallpaper.setShowWallpaper(showWallpaperParam);
}

const createCurrentTheme = () => {
  const { subscribe, set } = writable<DokiTheme | undefined>();
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
if (isBrowser) {
  currentTheme.setTheme(currentThemeId);
}

function readQueryParamValue(name: string) {
  const url = window.location.href;
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  const themeId = results && results[2] &&
    decodeURIComponent(results[2].replace(/\+/g, " "));
  return themeId;
}

