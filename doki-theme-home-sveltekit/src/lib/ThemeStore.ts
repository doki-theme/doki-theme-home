import { writable } from "svelte/store";
import DokiThemeDefinitions from "./DefaultDokiThemeDefinition";
import type { DokiTheme } from "./Types";

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

const createCurrentTheme = () => {
  const { subscribe, set } = writable<DokiTheme>(
    getTheme(DEFAULT_THEME)
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
