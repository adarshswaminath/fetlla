import { useState } from "react";
import LoginPage from "./Components/pages/LoginPage";
import MainSection from "./Components/pages/MainSection";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showMessage,setMessage] = useState(false)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if(username==="admin" && password==="admin"){
      setLoggedIn(true)
    } else {
      setMessage(true)
    }
  };
  return (
    <div className="p-2 bg-gray-100 min-h-screen">
      {isLoggedIn ? (
        <MainSection />
      ) : (
        <LoginPage 
          handleSubmit={handleSubmit}
          showMessage={showMessage}
          setUsername={setUsername} 
          setPassword={setPassword} 
        />
      )}
    </div>
  );
}

export default App;
