import React, { createContext, useContext } from "react";

const NowDateContext = createContext(new Date());

export const NowDateProvider = NowDateContext.Provider;

export const useNowDate = () => useContext(NowDateContext);
