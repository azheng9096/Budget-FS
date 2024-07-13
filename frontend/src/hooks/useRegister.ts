import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { AuthActionType } from "../context/AuthContext";

export const useRegister = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const register = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update auth context
      dispatch({ type: AuthActionType.LOGIN, payload: json });
      setIsLoading(false);
    }
  };

  return { register, isLoading, error };
};
