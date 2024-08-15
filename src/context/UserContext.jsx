import { createContext, useContext, useEffect, useState } from "react";
import { useGetUser } from "../authentication/useGetUser";

const UserContext = createContext();

function UserProvider({ children }) {
  const [isLoggedin, setIsLoggedin] = useState();
  const { getUser } = useGetUser();

  useEffect(
    function () {
      if (getUser?.role === "authenticated") {
        setIsLoggedin(true);
      }
    },
    [isLoggedin, getUser]
  );
  console.log(isLoggedin);
  return (
    <UserContext.Provider value={{ getUser, isLoggedin, setIsLoggedin }}>
      {children}
    </UserContext.Provider>
  );
}
function useUser() {
  const context = useContext(UserContext);
  return context;
}
export { UserProvider, useUser };
