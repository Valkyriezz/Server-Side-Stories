import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Credentials from "./Pages/Credentials";

function App() {
  const [idCardList, setIdCardList] = useState(() => {
    const saved = localStorage.getItem("idCardList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("idCardList", JSON.stringify(idCardList));
  }, [idCardList]);

  const handleDataSubmit = (newCard) => {
    setIdCardList((prev) => [...prev, newCard]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main idCardList={idCardList} />} />
        <Route
          path="/create"
          element={<Credentials onSubmit={handleDataSubmit} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
