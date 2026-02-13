import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const getToken = () => {
    const token = localStorage.getItem("authTokens");
    return token ? JSON.parse(token) : null;
  };

  const [authTokens, setAuthToken] = useState(getToken());

  const handleAPIError = (
    error,
    massage = "Something went wrong! Try again later.",
  ) => {
    if (error.response && error.response.data) {
      const errorMessage = Object.values(error.response.data).flat().join("\n");
      setErrorMsg(errorMessage || massage);
      return {
        success: false,
        message: errorMessage || massage,
      };
    } else {
      setErrorMsg(massage);
      return {
        success: false,
        message: massage,
      };
    }
  };

  // Fetch user profile
  const fetchUserProfile = async () => {
    try {
      setErrorMsg("");
      setLoading(true);
      const res = await authApiClient.get("/auth/users/me/");
      setUser(res.data);
    } catch (err) {
      setErrorMsg(err.response?.data.detail || "Failed to fetch user profile");
      localStorage.removeItem("cartId");
      localStorage.removeItem("authTokens");
      setUser(null);
      setAuthToken(null);
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const updateUserProfile = async (data) => {
    try {
      setErrorMsg("");
      const res = await authApiClient.patch("/auth/users/me/", data);
      setUser(res.data);
      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      return handleAPIError(err, "Failed to update user profile");
    }
  };

  // Change Password
  const changePassword = async (data) => {
    try {
      setErrorMsg("");
      const res = await authApiClient.post("/auth/users/set_password/", data);
      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      return handleAPIError(err, "Failed to change password");
    }
  };

  useEffect(() => {
    if (authTokens) {
      const handleUserFetch = async () => {
        fetchUserProfile();
      };
      handleUserFetch();
    }
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

  // Logout user
  const logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authTokens");
  };

  // Register User
  const registerUser = async (userData) => {
    try {
      setErrorMsg("");
      setLoading(true);
      await apiClient.post("/auth/users/", userData);
      return true;
    } catch (err) {
      if (err.response && err.response.data) {
        setErrorMsg(Object.values(err.response.data).flat().join("\n"));
      } else {
        setErrorMsg(
          "Registration failed. Please check your details and try again.",
        );
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loginUser,
    logoutUser,
    errorMsg,
    setErrorMsg,
    loading,
    registerUser,
    updateUserProfile,
    changePassword,
  };
};

export default useAuth;
