import React, { use, useState } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

  const {logIn}=use(AuthContext);

  const location=useLocation();

  const navigate=useNavigate();

  const [error, setError]=useState("")

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;

    logIn(email,pass)
    .then(()=>{
    navigate(`${location.state? location.state : "/"}`)
    }).catch((error)=>{
      setError(error.message);
    })
  }
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card  bg-base-100 w-full max-w-sm shrink-0 py-5 shadow-2xl">
        <h2 className="font-semibold mx-auto text-2xl">Login Your Account</h2>
        <form onSubmit={handleLogin} className="card-body ">
          <fieldset className="fieldset ">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email required" />
            <label className="label">Password</label>
            <input type="password" name="pass" className="input" placeholder="Password required" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {
              error && <p className="text-red-500">{error}</p>
            }
            <button type="Submit" className="btn btn-neutral mt-4">Login</button>
            <p className=" font-semibold text-center mt-3 ">Don't Have An Account? <Link className="text-secondary" to="/auth/register">Register</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
