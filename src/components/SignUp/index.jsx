import React, { useState } from "react";

// * FIREBASE IMPORTS ---------------------------------------
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebaseConfig";

function SignUP() {
  const data = {
    pseudo: "",
    email: "",
    pass: "",
    confirmPass: "",
  };

  const [loginData, setLoginData] = useState(data);
  const { pseudo, email, pass, confirmPass } = loginData;
  const [error, setError] = useState("");

  const handleInputs = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((user) => setLoginData({ ...data }))
      .catch((error) => {
        setError(error.message);
        setLoginData({ ...data });
      });
  };

  const dispalyBtn =
    pseudo === "" || email === "" || pass === "" || pass !== confirmPass ? (
      <button disabled>Inscription</button>
    ) : (
      <button>Inscription</button>
    );

  const displayError = error !== "" && <span>{error}</span>;

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {displayError}
            <h2>Inscription</h2>
            <form action="#" onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  onChange={handleInputs}
                  type="text"
                  value={pseudo}
                  autoComplete="off"
                  required
                  id="pseudo"
                />
                <label htmlFor="pseudo">Pseudo</label>
              </div>

              <div className="inputBox">
                <input
                  onChange={handleInputs}
                  type="email"
                  value={email}
                  autoComplete="off"
                  required
                  id="email"
                />
                <label htmlFor="email">email</label>
              </div>

              <div className="inputBox">
                <input
                  onChange={handleInputs}
                  type="password"
                  value={pass}
                  autoComplete="off"
                  required
                  id="pass"
                />
                <label htmlFor="pass">Mot de passe</label>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  autoComplete="off"
                  required
                  id="confirmPass"
                  value={confirmPass}
                  onChange={handleInputs}
                />
                <label htmlFor="confirmPass">Confirmer le mot de Pass</label>
              </div>
              {dispalyBtn}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUP;
