import React, { createContext, useState } from "react";
import Menu from "./pages/Menu";
import Main from "./pages/Main";
import { useTranslation } from "react-i18next";
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const { t, i18n } = useTranslation();
  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Menu />
        <Main />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
