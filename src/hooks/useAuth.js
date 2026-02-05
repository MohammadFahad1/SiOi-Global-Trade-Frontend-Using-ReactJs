import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthToken] = useState(getToken());

  // Fetch user profile
  const fetchUserProfile = async () => {
    try {
      const res = await apiClient.get("/auth/users/me/", {
        headers: {
          Authorization: `JWT ${authTokens.access}`,
        },
      });
      setUser(res.data);
    } catch (err) {
      console.log(
        "Error while fetching user profile: ",
        err.response?.data?.detail,
      );
    }
  };

  useEffect(() => {
    const handleUserFetch = async () => {
      fetchUserProfile();
    };

    handleUserFetch();
  }, [authTokens]);

  //   Login user
  const loginUser = async (userCredentials) => {
    try {
      const res = await apiClient.post("/auth/jwt/create/", userCredentials);

      if (res.data.access) {
        localStorage.setItem("authTokens", JSON.stringify(res.data));
        setAuthToken(res.data);
      }
    } catch (err) {
      console.log("Error while logging in user: ", err.response.data.detail);
    }
  };

  return { user, loginUser };
};

export default useAuth;
