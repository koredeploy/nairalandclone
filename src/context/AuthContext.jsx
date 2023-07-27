// import { createContext, useContext } from "react"

// export const AuthContext = createContext()

// // eslint-disable-next-line no-unused-vars
// export const StateProvider = ({children}) => {
  



//   return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
// }

// export const useStore = useContext(AuthContext)




import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api";

const AuthContext = createContext();
export default AuthContext;
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const registerUser = async (incoming) => {
    try {
      const res = await signup(incoming);
      console.log(res);
      navigate('/login');
    } catch (error) {
      // Properly handle the error, you can show an error message to the user
      console.error("Error during signup:", error);
      // Optionally, you can rethrow the error to let the component handle it further
      throw error;
    }
  };

  const AuthData = {
    registerUser,
  };

  return (
    <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
  );
};



