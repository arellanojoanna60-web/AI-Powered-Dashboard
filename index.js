import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div className="container">
      <div className="title">AI-Powered Analytics Dashboard</div>

      <textarea
        className="input-box"
        rows="4"
        placeholder="Enter your data question..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button className="button" onClick={handleSubmit}>
        Generate Insight
      </button>

      {response && (
        <div className="response-box">
          <h3>AI Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
