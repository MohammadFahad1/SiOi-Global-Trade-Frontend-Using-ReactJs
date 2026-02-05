import { useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const [authToken, setAuthToken] = useState(getToken());

  //   Login user
  const loginUser = async (userCredentials) => {
    try {
      const res = await apiClient.post("/auth/jwt/create/", userCredentials);

      if (res.data.access) {
        localStorage.setItem("authTokens", JSON.stringify(res.data));
        setAuthToken(res.data);
        setUser(res.data);
      }
    } catch (err) {
      console.log("Login Failed", err.message);
    }
  };

  return { user, loginUser };
};

export default useAuth;
