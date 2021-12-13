import { writable } from "svelte/store";
import DokiThemeDefinitions from "./DefaultDokiThemeDefinition";
import type { DokiTheme } from "./Types";
import {browser} from "$app/env";

export const DEFAULT_THEME = "e55e70ea-454b-47ef-9270-d46390dd2769";

const getTheme = (themeId: string) =>
  DokiThemeDefinitions[themeId] || DokiThemeDefinitions[DEFAULT_THEME];

const readUrl = () => {
  const url = window.location.href, name = "id";
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  const themeId = results && results[2] ? 
  decodeURIComponent(results[2].replace(/\+/g, " ")) : DEFAULT_THEME;
  return themeId || DEFAULT_THEME;
};

const createCurrentTheme = () => {
  const { subscribe, set } = writable<DokiTheme>(getTheme(DEFAULT_THEME));
  async function setCurrentTheme(themeId: string) {
    try {
      set(await (await fetch(`/themes/${themeId}.json`)).json());
    } catch (e) {
      set(getTheme(DEFAULT_THEME));
    }
  }
  return {
    subscribe,
    init: async () => {
      const intialThemeId = browser ? readUrl(): "default";
      await setCurrentTheme(intialThemeId);
    },
    setTheme: (themeId: string) => {
      setCurrentTheme(themeId);
    },
  };
};

export const currentTheme = createCurrentTheme();

currentTheme.init()