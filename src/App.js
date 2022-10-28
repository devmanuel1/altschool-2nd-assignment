import HomePage from "./Pages/Home";
import UsersPage from "./Pages/Users";
import NotFoundPage from "./Pages/NotFound";
import NavBar from "./Components/Shared/NavBar";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";

// createing navigation context
export const NavigateContext = createContext();
function App() {
  // acive route state 
  const [activeRoute, setActiveRoute] = useState("");

  return (
    <>
      <NavigateContext.Provider value={{ activeRoute, setActiveRoute }}>
        {/* common components */}
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </NavigateContext.Provider>
    </>
  );
}

export default App;

// colors
// sky => #CAEBF2
// carbon => #A9A9A9
// watermelon => #FF3B3F
// neutral => #EFEFEF
