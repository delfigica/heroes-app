import React, { useState } from "react";
import { userContext } from "./hooks/userContext";
import { AppRoutes } from "./routers/AppRoutes";

export const HeroesApp = () => {

  const [user, setUser] = useState({});

  return (
    <userContext.Provider value={{user, setUser}}>
      <AppRoutes />
    </userContext.Provider>
  );
};
