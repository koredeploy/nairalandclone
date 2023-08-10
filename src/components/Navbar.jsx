import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Navbar = () => {
  const {token, logoutUser} = useContext(AuthContext)
  return (
    <div className='flex justify-between px-5 py-2 bg-green-700'>
      <Link className='text-white' to='/'> <span className='text-blue'>Nairaland</span>.</Link>
      <div className=' flex justify-between gap-3'>
        <Link className='text-white' to='/createpage' >Post Story</Link>
        {token !==null ? <Link onClick={()=>{
            logoutUser()
        }} className='text-white'>logout</Link> : <div className='px-3 text-white flex gap-3' ><Link className='' to='/login'>Sign In</Link>
        <Link className='text-white' to='/signup px-3'>Get Started</Link></div>}
      </div>
    </div>
  )
}

export default Navbar