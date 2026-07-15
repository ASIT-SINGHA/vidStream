import React from 'react'

function Container({children}) {
  return (
    <div className=' text-white bg-gray-800 w-screen h-dvh'>
      {children}
    </div>
  )
}

export default Container
