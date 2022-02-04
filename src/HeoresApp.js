import React, { useEffect, useReducer } from "react";
import { authReducer } from "./auth/auth.reducer";
import { AuthContext } from "./auth/authContext";
import { AppRouter } from "./components/routes/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

const HeoresApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeoresApp;
