import React, { useRef, useState, useEffect } from "react";

function Landing() {
  // * REFS
  const elSelected = useRef(null);
  const leftBtn = useRef(null);
  const rightBtn = useRef(null);

  const [btn, setBtn] = useState(false);

  // console.log(leftBtn);

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
