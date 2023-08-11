import { useState } from "react";
import AuthContext from "./components/context/auth-context";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (email,password) =>{
    localStorage.setItem('user', true);
    setIsLoggedIn(true);
    
  }
  return (
    <AuthContext.Provider value={isLoggedIn}>
      <Header/>
      <main>
        <Meals />
      </main>
    </AuthContext.Provider>
  );
}

export default App;
