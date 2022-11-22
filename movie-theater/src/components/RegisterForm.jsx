import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../css/registerForm.css";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("data", data);
    
  };

  const handleLogin = () => {
    navigate('/')
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form">
        <div className="title">Bienvenido!</div>
        <div className="subtitle">entra a la app</div>
        <div className="input-container ic1">
          <input
            id="email"
            className="input"
            type="email"
            placeholder=""
            {...register("email")}
          />
          <div className="cut"></div>
          <label hmtlfor="email" className="placeholder">
            email@domain.com
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="username"
            className="input"
            type="text"
            placeholder=""
            {...register("username")}
          />
          <div className="cut"></div>
          <label hmtlfor="username" className="placeholder">
            username
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="password"
            className="input"
            type="password"
            placeholder=""
            {...register("password")}
          />
          <div className="cut cut-short"></div>
          <label hmtlfor="password" className="placeholder">
            Password
          </label>
        </div>

        <button type="text" className="submit-btn submit" value="entrar">
          Registrarse
        </button>
        <a className="login" href="" onClick={handleLogin}>Login</a>
        
      </div>
    </form>
  );
}

export default RegisterForm;
