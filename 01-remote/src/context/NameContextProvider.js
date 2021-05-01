import React from "react";

export const NameContextProvider = React.createContext("No name provided");

export default function useNameContext(){
  return React.useContext(NameContextProvider);
}