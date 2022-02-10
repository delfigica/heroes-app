import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { userContext } from "../../hooks/userContext";

export const LoginScreen = () => {
  const navigate = useNavigate();

  const [formValue, handleInputChange] = useForm({
    userName: "",
  });

  const { userName } = formValue;

  const { setUser } = useContext(userContext);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/", {
      replace: true,
    });
    if (userName === "") {
      setUser({
        userName: "strange",
        id: new Date().getTime(),
      });
    } else {
      setUser({
        userName,
        id: new Date().getTime(),
      });
    }
  };

  return (
    <div className="container login-screen">
      <div className="card col-5 p-4">
        <h4>Enter your name</h4>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="form-control"
            name="userName"
            value={userName}
            onChange={handleInputChange}
          />
          <div className="d-grid gap-2">
            <button className="btn btn-dark mt-4" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
