import logo from "../assets/images/Group 1542.png"
import { Link } from "react-router-dom"

const Section6 = () => {
  return (
    <div className='bg-green-950 '>
       <div className="grid grid-cols-1 md:grid-cols-2 px-5 sm:px-5 md:px-24 py-14 md:gap-10 gap-7">
      <div>
        <Link to="/"><h1 className="text-white text-left text-xl text-bold"><span className="p">&#8358;</span>airaland</h1></Link>
            <p className="text-left text-gray-100 py-4">Nairaland is a Nigerian English-language internet forum. Founded by Nigerian entrepreneur Seun Osewa on March 8, 2005, it is targeted primarily at Nigerian domestic residents and is the 6th most visited website in Nigeria.</p>
       
        <button className="bg-green-800 hover:bg-green-700 flex text-white font-bold py-2 px-4 rounded">Post Story</button>
      </div>
        <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
              <div className="flex flex-col text-white text-left py-5 md:mt-4">
                <h1 className="text-xl sm:text-base md:text-base text-semibold">Quick Menu</h1>
            <Link  className="py-1"  to="/home">
            Home
            </Link>
           
            <Link className="py-1" to='/trending'>
            Trending News
            </Link>
            <Link className="py-1" to="/allpost">
            Recent News
            </Link>
              </div>
              <div className="text-left flex flex-col md:mt-4 text-white py-5">
              <Link className="py-1" to="/signup">
            Sign Up
            </Link>
            <Link className="py-1" to="/createpage">
            post Story
            </Link>
              <Link className="py-1" to="#">
            Contact Us
            </Link>
              </div>
            <div className="text-white text-left py-5 md:mt-4">
              <Link to='#' className=""> Terms and Policy</Link>
            </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Section6