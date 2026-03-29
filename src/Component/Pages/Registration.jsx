import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
  const { createUser, updateUser, setUser } = use(AuthContext);

  const [nameError, setNameError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();
    const name = e.target.name.value;

    if (name.length < 5) {
      setNameError("Name Should Be 6 words Long");
      return;
    }
    else {
      setNameError("");
    }
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    // console.log({ name, photo, email, pass })

    createUser(email, pass)
      .then(result => {

        const user = result.user;
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate("/");
        }).catch((error) => {
          console.log(error)
          setUser(user);
        });

      }).catch(() => {

        // alert("Please Input valid");
      })


  }
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card  bg-base-100 w-full max-w-sm shrink-0 py-5 shadow-2xl">
        <h2 className="font-semibold mx-auto text-2xl">Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body ">
          <fieldset className="fieldset ">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" />
            {
              nameError && <p className="text-red-400">{nameError}</p>
            }

            <label className="label">Photo URL</label>
            <input type="text" name="photo" className="input" placeholder="Photo URl" />
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name="pass" className="input" placeholder="Password" />

            <button type="submit" className="btn btn-neutral mt-4">Register</button>
            <p className=" font-semibold text-center mt-3 ">
              Already Have An Account?  <Link className="text-secondary" to="/auth/login">
                LogIn
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Registration;
