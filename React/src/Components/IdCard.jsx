import React from "react";
import "./IdCard.css";

const IdCard = ({ data }) => {
  if (!data || !data.name) {
    return <p>No ID card data provided.</p>;
  }

  const { name, age, gender, occupation } = data;

  return (
    <div className="id-card">
      <h3>ID Card</h3>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Gender:</strong> {gender}
      </p>
      <p>
        <strong>Occupation:</strong> {occupation}
      </p>
    </div>
  );
};

export default IdCard;
