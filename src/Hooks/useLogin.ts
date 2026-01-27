import { useState, useEffect } from "react";

interface LoginResponse {
  token: string;
}

const AUTH_EVENT = "authStateChanged";

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);
    setIsInitialized(true);

    const handleAuthChange = () => {
      const updatedToken = localStorage.getItem("authToken");
      setToken(updatedToken);
    };

    window.addEventListener(AUTH_EVENT, handleAuthChange);
    return () => window.removeEventListener(AUTH_EVENT, handleAuthChange);
  }, []);

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }

      const data: LoginResponse = await response.json();
      setToken(data.token);
      localStorage.setItem("authToken", data.token);
      window.dispatchEvent(new Event(AUTH_EVENT));
      return data.token;
    } catch (err: any) {
      const errorMessage = err.message || "An error occurred during login";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
    window.dispatchEvent(new Event(AUTH_EVENT));
  };

  const isAuthenticated = !!token;

  return {
    login,
    logout,
    token,
    isAuthenticated,
    isInitialized,
    loading,
    error,
  };
};

export default useLogin;
