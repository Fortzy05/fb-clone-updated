import React from "react";
import Image from "next/legacy/image";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="http://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1 onClick={signIn} className="p-5 cursor-pointer bg-blue-500 rounded-full text-white text-center">
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
