import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import UploadResume from "./components/UploadResume";
import ModifyResume from "./components/ModifyResume";
import "./App.css"; // Import the CSS file
import Loading from './components/Loading'; // Import your loading component




function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div>
        <h1>Resume Modifier App</h1>
        {user ? (
          <div>
            {loading && <Loading />} {/* Show loading indicator */}
            <nav>
              <Link to="/upload">Upload Resume</Link>
              <Link to="/modify">Modify Resume</Link>
              <button onClick={handleLogout}>Logout</button>
            </nav>
            <Routes>
              <Route path="/upload" element={<UploadResume user={user} />} />
              <Route path="/modify" element={<ModifyResume user={user} />} />
            </Routes>
          </div>
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
    </Router>
  );
}

export default App;
