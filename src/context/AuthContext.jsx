import { createContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { signup } from "../api";
import axios from "axios";
import toast from "react-hot-toast";

const AuthContext = createContext();
export default AuthContext;
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("")

  const [showPassword, setShowPassword] = useState(false);

    const [token, setToken] = useState(()=>
  JSON.parse(localStorage.getItem('token')) || null);
  // console.log(token);



  const loginUser = async (incoming) => {
    try {
      const res = await axios.post(
        "https://nairalandapi5.onrender.com/api/auth/token/login/",
        incoming
      );
      console.log(res);
      if (res.status === 200) {
        toast.success("login successful");
        setToken(res.data.auth_token);
        console.log(res.data.auth_token);
        localStorage.setItem("token", JSON.stringify(res.data.auth_token));
        navigate("/");
      }
    } catch (error) {
      toast.error(error)
    }
  };

  // const logoutUser = async ()=>{
  //  try {
  //   const res = await axios.post("https://nairalandapi5.onrender.com/api/auth/token/logout/", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Token ${token}`,
  //       },
  //   })
  //   if(token){
  //     console.log(token, "pass");
  //     // if(res.status == 204){
  //     // setToken(null)
  //     // setUser(null)
  //     // localStorage.removeItem('token')
  //     //   navigate('/')
  //     //   toast.success('Logout')
  //     // }
  //   }
   
  // } catch (error) {
  //   console.log(error);
  // }
  // }

  const getCurrentUser = async ()=>{
    const res = await axios.get("https://nairalandapi5.onrender.com/api/auth/users/me",{
      headers: {
        "Content-Type" : "application/json",
        Authorization: `Token ${token}`
      }
    })
    const data = await res.json()
    setUser(data)
  }

  // const getStory = async ()=>{
  //   const res = await axios.get(`https://nairalandapi5.onrender.com/api/singlepost/${id}`, {
  //     headers: {
  //       "Content-Type" : "application/json",
  //       Authorization: `Token ${token}`
  //     }
  //   })
  // }
 

  const signOut = async ()=>{
    const res = await fetch('https://nairalandapi5.onrender.com/api/auth/token/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
  setToken(null)
  localStorage.removeItem('token')
  toast.success("Thanks for your time")
  navigate('/')

  }

 

  const createStory = async (data) => {
    try {
      const res = await axios.post(
        "https://nairalandapi5.onrender.com/api/create/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
            },
          
        }
      );
      console.log(res);
      if (res.status === 201) {
        toast.success("Story Created successfully");
        navigate("/")
      }
    } catch (error) {
      toast.error(error)
    }
  };

  const registerUser = async (incoming) => {
    try {
      const res = await axios.post(
        "https://nairalandapi5.onrender.com/api/auth/users/",
        incoming
      );
      console.log(incoming);

      if (res.status === 201) {
        console.log("registered successful");
        toast.success("registered successful");
        navigate("/");
        loginUser({
          username: incoming.username,
          password: incoming.password,
        });
        console.log(res);
      }
    } catch (error) {
      console.log(error.response.data.password[0]);

      if (error.response.data.username) {
        toast.error(`${error.response.data.username[0]}`);
      }
      if (error.response.data.email) {
        toast.error(`${error.response.data.email[0]}`);
      }
    }
  };

  

  const AuthData = {
    registerUser,
    showPassword,
    setShowPassword,
    loginUser,
    getCurrentUser,
    token,
    createStory,
    setSearchValue,
    searchValue,
    signOut,
  

  };

  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};
