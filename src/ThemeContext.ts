import React from "react";

type themesKinds = "lightTheme" | "darkTheme";

export const Context = React.createContext<themesKinds>("lightTheme");