import React, { useState, useEffect } from "react";

const Timer = () => {
  const [hour, setHour] = useState(new Date().getHours());
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [sec, setSconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setSconds((prev) => (prev + 1) % 60);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (sec === 0) {
      setMinute((prev) => (prev + 1) % 60);
    }
  }, [sec]);

  useEffect(() => {
    if (minute === 0) {
      setHour((prev) => (prev + 1) % 60);
    }
  }, [sec]);

  return (
    <div>
      <h1>Hour {hour % 12}</h1>
      <h1>Minute {minute}</h1>
      <h1>Second {sec}</h1>
    </div>
  );
};

export default Timer;
