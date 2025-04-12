import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("Carolina");

  return (
    <>
      <div>{userName.length >= 8 && <h1>UserName muito grande!</h1>}</div>
    </>
  );
}

export default App;
