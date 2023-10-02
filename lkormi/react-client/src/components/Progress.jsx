// Progress.jsx
import React from "react";

const Progress = ({ phrases }) => {
  const gotItCount = phrases.filter((phrase) => phrase.status === "Got it").length;
  const totalPhrases = phrases.length;
  const progressPercentage = (gotItCount / totalPhrases) * 100;

  return (
    <div className="progress">
      <h2>Progress</h2>
      <p>
        You've mastered {gotItCount} out of {totalPhrases} phrases. (
        {progressPercentage.toFixed(2)}%)
      </p>
    </div>
  );
};

export default Progress;
