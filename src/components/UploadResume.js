import React, { useState } from "react";
import { uploadResume } from "../api";
import "./Login.css"; // Import the CSS file
import Loading from './Loading'; // Import your loading component



export default function UploadResume({ user }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleUpload = async (e) => {
    setLoading(true); // Start loading
    e.preventDefault();
    try {
      const response = await uploadResume(user, file);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response);
    }finally{
        setLoading(false); // Start loading
    }
  };

  return (
    <div>
      {loading && <Loading />} {/* Show loading indicator */}
      <h2>Upload Resume</h2>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
      
      {message && <p>{message}</p>}
    </div>
  );
}
