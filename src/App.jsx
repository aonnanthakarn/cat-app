import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import MainApp from "./components/MainApp";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const users = [
    { id: 1, username: "catLover1", name: "ร๊ากแมว 1", color: "bg-pink-500" },
    { id: 2, username: "catLover2", name: "ทาสแมว 2", color: "bg-blue-500" },
  ];

  const handleLogin = (user) => setCurrentUser(user);
  const handleLogout = () => setCurrentUser(null);

  return currentUser ? (
    <MainApp user={currentUser} onLogout={handleLogout} />
  ) : (
    <LoginPage users={users} onLogin={handleLogin} />
  );
};

export default App;
