import React, { useState } from "react";
import { modifyResume } from "../api";
import "./Login.css"; // Import the CSS file
import Loading from './Loading'; // Import your loading component



export default function ModifyResume({ user }) {
  const [loading, setLoading] = useState(false);
  const [jobdescriptionUrl, setJobdescriptionUrl] = useState("");
  const [commentary, setCommentary] = useState("");
  const [downloadLink, setDownloadLink] = useState("");

  const handleModify = async (e) => {
    setLoading(true); // Start loading
    e.preventDefault();
    try {
      const response = await modifyResume(user, jobdescriptionUrl);
      setCommentary(response.data.commentary);
      setDownloadLink(response.data.resumeDownloadPath);
    } catch (error) {
      setCommentary("Failed to modify resume.");
    }finally{
        setLoading(false); // Start loading
    }
  };

  return (
    <div>
    
      <h2>Modify Resume</h2>
      <form onSubmit={handleModify}>
        <input
          type="url"
          placeholder="Job Description URL"
          value={jobdescriptionUrl}
          onChange={(e) => setJobdescriptionUrl(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {commentary && <p><strong>Commentary:</strong> {commentary}</p>}
      {downloadLink && (
        <a href={`http://localhost:3001/download/${downloadLink}`} >
          Download Modified Resume
        </a>
      )}
    </div>
  );
}
