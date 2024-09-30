import "./asset/css/index.css";
import Navbar from "./component/navbar";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Posts from "./component/posts";
// import Count from "./component/count";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={isDark ? "dark" : "light"}>
        <Navbar />

        {/* <Count /> */}

        {/* <button onClick={() => setIsDark(!isDark)}>
          {isDark ? "Light mode" : "Dark mode"}
        </button> */}

        <Posts />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
