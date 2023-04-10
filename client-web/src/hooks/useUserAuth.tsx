import userAuthContext from "../context/authContext";
import { useContext } from "react";

export function useUserAuth() {
    return useContext(userAuthContext);
  }