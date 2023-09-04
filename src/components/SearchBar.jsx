import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const SearchBar = ({setQuery,}) => {
    const [searchItem, setSearchItem] = useState("")
    const navigate = useNavigate()

    const onSubmit = () =>{
        setQuery(searchItem)
    }
  return (
    <>
    <form action=""
    onSubmit={(e)=> {
        e.preventDefault()
        onSubmit()
        navigate("/searchpage")
    }
}
    >

     <input
     onChange={((e)=> {
        setSearchItem(e.target.value)
       
    })}
     type="text" placeholder='Search nairaland' style={{background: "rgba(232, 236, 224, 0.50)" }} className='placeholder:text-xs  placeholder:text-white  py-1 outline-none px-3 rounded-sm text-white w-32 '/>
    </form>

    </>
  )
}

export default SearchBar