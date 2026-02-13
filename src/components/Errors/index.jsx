import React from "react";
import bat from "../../assets/imgs/batman.png";

function ErrorPage() {
  const centerImg = {
    display: "block",
    margin: "40px auto",
    width: "75%",
  };
  return (
    <div className="quiz-bg">
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Oups, cette page n'existe pas</h2>
        <img src={bat} style={centerImg} alt="" />
      </div>
    </div>
  );
}

export default ErrorPage;
