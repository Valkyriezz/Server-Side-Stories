import React from "react";
import { useNavigate } from "react-router-dom";
import IdCard from "../Components/IdCard";

const Main = ({ idCardList }) => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/create");
  };

  return (
    <div>
      <h1>All ID Cards</h1>

      {idCardList.length === 0 ? (
        <>
          <p>No ID Cards Found 🥹</p>
          <button onClick={handleCreateClick}>Create One</button>
        </>
      ) : (
        <>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {idCardList.map((card, index) => (
              <IdCard key={index} data={card} />
            ))}
          </div>
          <button onClick={handleCreateClick} style={{ marginTop: "1.5rem" }}>
            Create Another
          </button>
        </>
      )}
    </div>
  );
};

export default Main;
