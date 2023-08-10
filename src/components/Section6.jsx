import logo from "../assets/images/Group 1542.png"

const Section6 = () => {
  return (
    <div className='bg-blue-700'>
       <div className="grid grid-cols-1 md:grid-cols-2 px-5 sm:px-5 md:px-24 py-7 gap-7">
      <div>
      <img src={logo} alt="" />
            <p className="text-left text-white py-4">Nairaland is a Nigerian English-language internet forum. Founded by Nigerian entrepreneur Seun Osewa on March 8, 2005, it is targeted primarily at Nigerian domestic residents and is the 6th most visited website in Nigeria.</p>
       
        <button className="bg-green-500 hover:bg-green-700 flex text-white font-bold py-2 px-4 rounded">Post Story</button>
      </div>
        <div>
            <h1 className="text-left text-white mb-4">TAGS</h1>
            <div className="grid grid-cols-3">
            <button className="bg-transparent text-white font-bold  border-white-500 hover:border-transparent py-2 px-4 rounded">Post Story</button>
            <button className="bg-transparent ring-offset-white-50  text-white font-bold py-2 px-4 rounded">Post Story</button>
            <button className="bg-transparent ring-offset-white-50  text-white font-bold py-2 px-4 rounded">Post Story</button>
            <button className="bg-transparent ring-offset-white-50 outline-2 text-white font-bold py-2 px-4 rounded">Post Story</button>
            <button className="bg-transparent ring-offset-white outline-2 text-white font-bold py-2 px-4 rounded">Post Story</button>
            <button className="bg-transparent ring-offset-white outline-2 text-white font-bold py-2 px-4 rounded">Post Story</button>
            <button className="bg-transparent ring-offset-white outline-2 text-white font-bold py-2 px-4 rounded">Post Story</button>
            <button className="bg-transparent ring-offset-white outline-2 text-white font-bold py-2 px-4 rounded">Post Story</button>
            <button className="bg-transparent ring-offset-white text-white font-bold py-2 px-4 rounded">Post Story</button>
            <button className="bg-transparent ring-offset-white text-white font-bold py-2 px-4 rounded">Post Story</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Section6