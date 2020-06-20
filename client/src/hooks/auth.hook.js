import { useState, useCallback, useEffect } from "react";
const storageName = "userData";
const nameStorage = "";
export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [usName, setUsName] = useState("");

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);
    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: id, token: jwtToken })
    );
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

    if (data && data.token) {
      login(data.token, data.userId, data.userName);
    }
  }, [login]);

  return { login, logout, getName, setName, token, userId };
};
