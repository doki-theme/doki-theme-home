import { writable } from "svelte/store";
import DokiThemeDefinitions from "./DefaultDokiThemeDefinition";
import type { DokiTheme } from "./Types";
import {browser} from "$app/env";

export const DEFAULT_THEME = "e55e70ea-454b-47ef-9270-d46390dd2769";

const getTheme = (themeId: string) =>
  DokiThemeDefinitions[themeId] || DokiThemeDefinitions[DEFAULT_THEME];

const getJSON = function (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    const status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

// todo: work on initial load
const readUrl = () => {
  const url = window.location.href, name = "id";
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  const themeId = results && results[2] ? 
  decodeURIComponent(results[2].replace(/\+/g, " ")) : DEFAULT_THEME;
  return themeId || DEFAULT_THEME;
};

const intialThemeId = browser ? readUrl(): DEFAULT_THEME

const createCurrentTheme = () => {
  const { subscribe, set } = writable<DokiTheme>(
    getTheme(intialThemeId)
  );

  return {
    subscribe,
    setTheme: (themeId: string) => {
      getJSON(`/themes/${themeId}.json`, (err, val) => {
        if (err) {
          // todo: log error?
          set(getTheme(DEFAULT_THEME))
        } else {
          set(val)
        }
      });
    },
  };
};

export const currentTheme = createCurrentTheme();
