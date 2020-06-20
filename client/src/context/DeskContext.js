import { createContext } from "react";

function noop() {}

export const DeskContext = createContext({
  deskId: null,
  dropDesk: noop,
  upDesk: noop,
});
