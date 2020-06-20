import { useState, useCallback } from "react";
const storageDesk = "Desk";
export const useDesk = () => {
  let [deskId, setDeskId] = useState(null);

  const dropDesk = useCallback((id) => {
    localStorage.setItem(storageDesk, JSON.stringify({ deskId: id }));
    deskId = JSON.stringify(id);
    console.log("desk.hook", id);
  }, []);

  const upDesk = useCallback(() => {
    const data = JSON.parse(localStorage.getItem(storageDesk));
    console.log("upDesk", data.deskId);
    return data.deskId;
  }, []);

  return { dropDesk, upDesk, deskId };
};
