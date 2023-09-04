import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import menu from '../assets/icons/icon-hamburger.svg'

import '../styles/Navbar.css'
import SearchBar from './SearchBar';


const Navbar = () => {
    const navigate = useNavigate();
  const {token, searchValue, setSearchValue } = useContext(AuthContext)

console.log(searchValue);
  // console.log(token);
  

  const [display, setDisplay] = useState(false)
  const isactive = display ? "nav-links active" : 'nav-links'

  

//   const logoutUser = async () => {
//     if(token){
//         try{
//         await axios.post("https://nairalandapi5.onrender.com/api/auth/token/logout/", {
//             headers: {
//               Authorization: `Token ${token}`,
//               },
//           })
//         }catch(error){
//             console.log(error)
//         }
//     }
// }

// const logoutUser = async ()=>{
//     if(token){
//     try {
//         const res = await axios.post("https://nairalandapi5.onrender.com/api/auth/token/logout/", {
//             headers: {
//             "Content-Type": "application/json",
//             Authorization: `Token ${token}`,
//             },
//           })

//        } catch (error) {
//         console.log(error);
        
//        }
//        if(res.status == 201){
//        setToken(null)
//        localStorage.removeItem('token')
//          navigate('/')
//          toast.success('Logout')
//        }
//      }else{
//         console.log("no token please")
//        }
    
//    } catch (error) {
//      console.log(error);
//    }
//    }
  
  return (
    <div className=' flex justify-between w-full gap-5 px-5  sm:px-5 md:px-24 py-5 bg-green-950 items-center navbar'>
      <Link className='text-white' to='/'> <span className='text-white md:text-3xl text-xl '>&#8358;airaland</span>.</Link>
      
      <div className={`${isactive} `}>
      <Link to='/'> <p className='sm:text-black md:text-white'>Home</p></Link>
      <Link to='/createpage'> <p className='sm:text-black  md:text-white'>Write</p></Link>
      <Link to='/trending'> <p className='sm:text-black  md:text-white'>Trending</p></Link>
      <Link to='/login'> <p className='sm:text-black md:text-white'>Signin</p></Link>


      </div>
      <div className=' flex  items-center justify-between gap-4'>
     <SearchBar setQuery={setSearchValue} query={searchValue}/>

      <span className='sm:block lg:hidden menu w-full object-cover'> 
      
      <img src={menu} alt=""  onClick={()=>{
          setDisplay(!display)
        }}/>

        </span>

      </div>
    </div>
  )
}
export default Navbar