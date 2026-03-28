import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold">Login with</h2>
      <div className="space-y-3 mt-2">
        <button className="btn w-full btn-secondary btn-outline">
          <FcGoogle  size={24}/>
          Login With Google
        </button>
        <button className="btn w-full btn-primary btn-outline">
          <FaGithub size={24}/>
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
