import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import { User } from "../types/user";

export enum AuthActionType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

interface AuthAction {
  type: AuthActionType;
  payload: any;
}

interface AuthState {
  user: User;
}

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

type AuthContext = {
  user: User;
  dispatch: Dispatch<AuthAction>;
} | null;
export const AuthContext = createContext<AuthContext>(null);

type Props = {
  children?: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (user) {
      dispatch({ type: AuthActionType.LOGIN, payload: user });
    }
  }, []);

  console.log("AuthContext state: ", state);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
