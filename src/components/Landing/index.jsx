import React, { useRef, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";

function Landing() {
  // * REFS
  const elSelected = useRef(null);
  const leftBtn = useRef(null);
  const rightBtn = useRef(null);

  const [btn, setBtn] = useState(false);
  let goTo = useNavigate();

  const navigateTo = (e) => {
    if (e.target.innerText === "Inscription") {
      goTo("/signup");
    }
    if (e.target.innerText === "Connexion") {
      goTo("/login");
    }
    console.log(e.target);
  };

  useEffect(() => {
    elSelected.current.classList.add("startingImg");
    setTimeout(() => {
      elSelected.current.classList.remove("startingImg");
      setBtn(true);
    }, 1000);
  }, []);

  const btnAnimation = (e) => {
    if (e.type === "mouseover") {
      if (e.target.innerText === "Inscription") {
        elSelected.current.classList.add("leftImg");
      } else if (e.target.innerText === "Connexion") {
        elSelected.current.classList.add("rightImg");
      }
    } else if (e.type === "mouseout") {
      if (e.target.innerText === "Inscription") {
        elSelected.current.classList.remove("leftImg");
      } else if (e.target.innerText === "Connexion") {
        elSelected.current.classList.remove("rightImg");
      }
    }
  };

  const btnShow = btn && (
    <>
      <div className="leftBox">
        <button
          ref={leftBtn}
          onMouseOver={btnAnimation}
          onMouseOut={btnAnimation}
          className="btn-welcome"
          onClick={navigateTo}
        >
          Inscription
        </button>
      </div>
      <div className="rightBox">
        <button
          ref={rightBtn}
          onMouseOver={btnAnimation}
          onMouseOut={btnAnimation}
          className="btn-welcome"
          onClick={navigateTo}
        >
          Connexion
        </button>
      </div>{" "}
    </>
  );

  return (
    <main ref={elSelected} className="welcomePage">
      {btnShow}
    </main>
  );
}

export default Landing;
