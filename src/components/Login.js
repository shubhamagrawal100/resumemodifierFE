import React, { useState } from "react";
import { login, register } from "../api";
import "./Login.css"; // Import the CSS file


export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = isRegistering
        ? await register(username, password)
        : await login(username, password);
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        setUser(username);
      }
    } catch (error) {
      alert("Authentication failed");
    }
  };

  return (
    <div>
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">{isRegistering ? "Register" : "Login"}</button>
        <button type="submit" onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
      </button>
      </form>
    
    </div>
  );
}
