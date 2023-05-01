import "./App.css";
import Card from "./components/Card/Card";
import { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="App">
      <h1>GitHub Users!</h1>
      <div className="container">
        {userData.map((user) => {
          console.log(user);
          return (
            <Card
              userName={user.login}
              profilImage={user.avatar_url}
              profilUrl={user.html_url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
