import  { useState } from 'react'
import { RiseLoader } from 'react-spinners'

const Loading = ({loading}) => {
  // const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('green')

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div className='py-5'>
      <RiseLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading