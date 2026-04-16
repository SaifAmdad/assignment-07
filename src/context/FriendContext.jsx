import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const StoreContext = createContext();

export const ContextProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const getFriends = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setFriends(data);
    };
    getFriends();
  }, []);

  const values = useMemo(() => {
    return {
      friends,
      setFriends,
    };
  });

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};
