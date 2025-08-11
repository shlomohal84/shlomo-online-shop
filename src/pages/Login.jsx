import { useNavigate } from "react-router";
import GlobalContext from "../helpers/context/app.context";
import { useContext, useEffect, useState } from "react";

import ToastMessage from "../components/ToastMessage";

export default function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { handleToggleLogin } = useContext(GlobalContext);
  const [showUsernameError, setShowUsernameError] = useState(true);
  const [showEmailError, setShowEmailError] = useState(true);
  const [showPasswordError, setShowPasswordError] = useState(true);
  // const [submitValidation, setSubmitValidation] = useState(false);
  const handleInputChange = (evt) => {
    setInputs((prevState) => ({ ...prevState, [evt.target.name]: evt.target.value }));
  };

  const handleUsernameValidation = () => {
    if (!inputs.username.length) {
      setShowUsernameError(true);
      // setSubmitValidation(false);
    } else setShowUsernameError(false);
  };

  const handleEmailValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email)) {
      setShowEmailError(true);
      // setSubmitValidation(false);
    } else setShowEmailError(false);
  };

  const handlePasswordValidation = () => {
    if (!(inputs.password.length >= 4 && inputs.password.length <= 8)) {
      setShowPasswordError(true);
      // setSubmitValidation(false);
    } else setShowPasswordError(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleToggleLogin(inputs.username, inputs.email);
    navigate("/");
  };
  return (
    <>
      <h3 className="category-header">
        <span>Login</span>
      </h3>
      <form onSubmit={handleSubmit} className="login-form">
        {showUsernameError && <ToastMessage errorBody="Field mustn't be empty" />}
        <div className="login-input-group">
          <label htmlFor="username">Username:</label>
          <input
            placeholder="Username"
            type="text"
            name="username"
            autoComplete="on"
            id="username"
            onBlur={handleUsernameValidation}
            value={inputs.username}
            onChange={handleInputChange}
          />
        </div>
        {showEmailError && <ToastMessage errorBody="Invalid Email address" />}
        <div className="login-input-group">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Email"
            type="text"
            name="email"
            autoComplete="on"
            id="email"
            onBlur={handleEmailValidation}
            onChange={handleInputChange}
          />
        </div>
        {showPasswordError && <ToastMessage errorBody="Password must be at least 4-8 characters" />}
        <div className="login-input-group">
          <label htmlFor="password">Password:</label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            onBlur={handlePasswordValidation}
            onChange={handleInputChange}
          />
        </div>
        {/* {showSubmitError && <ToastMessage errorBody="Please check all the inputs" errorToggle={true} />} */}
        <div className="button-wrapper">
          <button disabled={showUsernameError || showEmailError || showPasswordError}>Login</button>
        </div>
      </form>
    </>
  );
}
