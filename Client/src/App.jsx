import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
   const [showLogin, setShowLogin] = useState(false);
   const isOwnerPath = window.location.pathname.startsWith('/owner');
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
    </>
  );
};

export default App;