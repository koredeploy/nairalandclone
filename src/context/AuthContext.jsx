import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { signup } from "../api";
import axios from "axios";
import toast from "react-hot-toast";

const AuthContext = createContext();
export default AuthContext;
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("")
  const [token, setToken] = useState(
    () => JSON.parse(localStorage.getItem("token")) || null
  );
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
      console.log(error);
    }
  };

  const logoutUser = async ()=>{
   try {
    const res = await axios.post("https://nairalandapi5.onrender.com/api/auth/token/logout/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
        },
    })
    console.log(token);
    if(res.status == 200){
      setToken(null)
      setUser(null)
      localStorage.removeItem('token')
      navigate('/')
      toast.success('Logout')
    }
   } catch (error) {
    console.log(error);
   }
  }

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
      if (res.status === 200) {
        toast.success("Story Created successfully");
      }
    } catch (error) {
      console.log(error);
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
        navigate("/login");
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
    logoutUser,
    getCurrentUser,
    token,
    createStory,

  };

  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};
