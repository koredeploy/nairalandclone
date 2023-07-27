import './Signup.css'
import logo from '../../assets/images/Group 14.png'
import {  useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {registerUser} = useContext(AuthContext)
  return (

<div className='signup-body  min-h-full'>
<div className="flex min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8 w-full md:w-3/5 lg:w-2/5 mt-5 mx-auto bg-white rounded-md">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src={logo} className=" w-4/5 mx-auto" />
    <h2 className=" my-2 text-center md:text-xl font-bold leading-9 tracking-tight text-gray-900 py-4">
        Create your <span className='text-green-900'>&#8358;airaland</span> account
    </h2>
    <p className='text-sm'> Already have an account? Log in.</p>
    
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        
    <form className="space-y-5"
    onSubmit={(e)=>{
        e.preventDefault()
        const formData = {
            username,
            email,
            password,
        };
        console.log(formData);
        registerUser(formData)
    }}
    >
    <input
    onChange={(e)=>{
        setUsername(e.target.value)
    }}
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-200 sm:text-sm sm:leading-6 outline-none"
            placeholder='username'
            />
            <input
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="px-4 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-200 sm:text-sm sm:leading-6 outline-none"
            placeholder='Email address'
            />
    
            <input
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="px-3 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-200 sm:text-sm sm:leading-6 outline-none"
            placeholder='Password'
            />
            <p className="mt-5 text-left text-sm text-gray-500">By creating an account, you agree to &#8358;airaland&apos;s Terms of Use and Privacy Policy. You understand Nairaland and its affiliates may use your address to send updates, ads, and offers.</p>

        <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-red-700 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
            Create Account
        </button>
    
    </form>

    <p className="mt-5 text-left text-sm text-gray-500">
    You can opt out or learn more about your rights via the {''} 
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
        Privacy Policy.
        </a>
    </p>
    </div>
    </div>
</div>
  )
}

export default Signup