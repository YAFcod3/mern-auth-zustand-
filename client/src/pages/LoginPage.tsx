import React, { useState } from "react";
import { loginRequest,profileRequest } from "../api/auth";
import { useAuthStore } from "../store/auth";

function LoginPage() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setToken= useAuthStore(state=> state.setToken)
 const setProfile=useAuthStore(state=> state.setProfile)




  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const resLogin = await loginRequest(email, password);
     

      //guardar el token
      setToken(resLogin.data.token)
      // console.log(resLogin);

      const resProfile = await profileRequest()
      //guardar el perfil
      setProfile(resProfile.data.profile)
      console.log(resProfile)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email@gamil.com"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <input
        type="password"
        placeholder="********"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <button >Sign in</button>
    </form>
  );
}

export default LoginPage;
