// import { createContext, useContext } from "react"

// export const AuthContext = createContext()

// // eslint-disable-next-line no-unused-vars
// export const StateProvider = ({children}) => {

//   return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
// }

// export const useStore = useContext(AuthContext)

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { signup } from "../api";
import axios from "axios";
import toast from "react-hot-toast"

const AuthContext = createContext();
export default AuthContext;
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword]= useState(false)
  const [token, setToken] = useState(
    () => JSON.parse(localStorage.getItem('token')) || null
  );



  const loginUser = async (incoming)=>{
    try {
      const res = await axios.post("https://nairalandapi2.onrender.com/api/auth/token/login/",incoming )
      console.log(res);
      if (res.status === 200){
        toast.success('login successful')
        setToken(res.data);
        localStorage.setItem('token', JSON.stringify(res.data));
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const registerUser = async (incoming) => {
    // try {
    //   const res = await signup(incoming);
    //   console.log(res);
    //   navigate('/login');
    // } catch (error) {
    //   // Properly handle the error, you can show an error message to the user
    //   console.error("Error during signup:", error);
    //   // Optionally, you can rethrow the error to let the component handle it further
    //   throw error;
    // }

    try {
      const res = await axios.post(
        "https://nairalandapi2.onrender.com/api/auth/users/",
        incoming
      );
      console.log(incoming);
    
      if (res.status === 201) {
        console.log("registered successful");
        toast.success("registered successful")
        navigate('/login');
        loginUser({
          username: incoming.username,
          password: incoming.password,
        });
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const AuthData = {
    registerUser,
    showPassword,
    setShowPassword,
    loginUser,
    token,
  };

  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};
