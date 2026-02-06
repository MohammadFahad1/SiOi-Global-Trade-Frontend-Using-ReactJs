import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthToken] = useState(getToken());

  // Fetch user profile
  const fetchUserProfile = async () => {
    try {
      setErrorMsg("");
      setLoading(true);
      const res = await apiClient.get("/auth/users/me/", {
        headers: {
          Authorization: `JWT ${authTokens?.access}`,
        },
      });
      setUser(res.data);
    } catch (err) {
      setErrorMsg(err.response?.data.detail || "Failed to fetch user profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authTokens) {
      const handleUserFetch = async () => {
        fetchUserProfile();
      };
      handleUserFetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authTokens]);

  //   Login user
  const loginUser = async (userCredentials) => {
    try {
      setErrorMsg("");
      setLoading(true);
      const res = await apiClient.post("/auth/jwt/create/", userCredentials);

      if (res.data.access) {
        localStorage.setItem("authTokens", JSON.stringify(res.data));
        setAuthToken(res.data);
        await fetchUserProfile();
        return true;
      }
    } catch (err) {
      setErrorMsg(err.response?.data.detail || "Failed to login user");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  return { user, loginUser, logoutUser, errorMsg, loading, setErrorMsg };
};

export default useAuth;
