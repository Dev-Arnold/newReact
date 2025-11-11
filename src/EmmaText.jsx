import React, { createContext, useState } from "react";
// localStorage is used to store data permanently/forever till it is manually deleted.
// sessionStorage is used to store data temporarily. i.e., whenever you close the tab or the browser, the data disappers.

export let WinnerContext = createContext();

function EmmaText({ children }) {
  let [theme, setTheme] = useState(() => {
    let myTheme = sessionStorage.getItem("themeChoice");
    if (myTheme == null) {
      return false;
    } else {
      return JSON.parse(myTheme);
    }
  });

  function toggleTheme() {
    let themeChoice = !theme;
    setTheme(themeChoice);
    sessionStorage.setItem("themeChoice", JSON.stringify(themeChoice));
  }

  return (
    <WinnerContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </WinnerContext.Provider>
  );
}

export default EmmaText;
