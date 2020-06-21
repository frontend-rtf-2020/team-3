import { useState, useCallback, useEffect } from "react";
const storageName = "userData";
const nameStorage = "";
const hashStorage = "";
export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [usName, setUsName] = useState("");

  const login = useCallback((jwtToken, id) => {
    console.log("login");
    setToken(jwtToken);
    setUserId(id);
    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: id, token: jwtToken })
    );
  }, []);

  const getUserId = useCallback(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    return data.userId;
  }, []);

  const getName = useCallback(() => {
    const data = JSON.parse(localStorage.getItem(nameStorage));
    return data.name;
  }, []);
  const setName = useCallback((ourName) => {
    localStorage.setItem(nameStorage, JSON.stringify({ name: ourName }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    const helpData = JSON.parse(localStorage.getItem(nameStorage));
    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, []);

  const getHash = useCallback(() => {
    const data = JSON.parse(localStorage.getItem(hashStorage));
    return data.hash || "";
  }, []);
  const setHash = useCallback((ourHash) => {
    console.log(ourHash);
    localStorage.setItem(hashStorage, JSON.stringify({ hash: ourHash }));
  }, []);

  const setCheck = useCallback((ourCheck) => {
    const data = JSON.parse(localStorage.getItem(hashStorage));
    localStorage.setItem(
      hashStorage,
      JSON.stringify({ check: ourCheck || false, hash: data.hash })
    );
  }, []);
  const getCheck = useCallback(() => {
    const data = JSON.parse(localStorage.getItem(hashStorage));
    return data.check || false;
  }, []);

  return {
    login,
    logout,
    getName,
    setName,
    getHash,
    setHash,
    getUserId,
    setCheck,
    getCheck,
    token,
    userId,
  };
};
