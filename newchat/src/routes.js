import {CHAT_ROUTE, LOGIN_ROUTE} from "./utilities/constants";

export const publicRoutes = [
  {
    path : LOGIN_ROUTE,
    Component : Login,
  }
];
export const privateRoutes = [
  {
    path : CHAT_ROUTE,
    Component : Chat,
  }
];

