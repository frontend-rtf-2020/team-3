import { useState, useCallback } from "react";
const storageDesk = "Desk";
export const useDesk = () => {
  let [deskId, setDeskId] = useState("");

  const dropDesk = useCallback((id, name) => {
    console.log("dsafsaf2151221", id);
    localStorage.setItem(
      storageDesk,
      JSON.stringify({ deskId: id, deskName: name })
    );
    setDeskId(JSON.stringify(id));
  }, []);

  const upDesk = useCallback(() => {
    const data = JSON.parse(localStorage.getItem(storageDesk));
    console.log("desk.hook.js", data);
    return data || { deskId: undefined, deskName: "" };
  }, []);

  const deleteDesk = useCallback(() => {
    localStorage.setItem(
      storageDesk,
      JSON.stringify({ deskId: undefined, deskName: " " })
    );
  }, []);

  return { dropDesk, upDesk, deleteDesk, deskId };
};
