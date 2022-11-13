
import React, { useState } from 'react'





function ButtonsGrid({input,data}) {
const [selected, setSelected] = useState("")

  return (
    <div>
      <button 
      type='button'
      onClick={(event) => {
        setSelected(event.target.value)
        data(selected)
      }} value={input} className={`py-3 px-4 text-center text-black bg-white ${selected === input ? "hover:bg-red-500 hover:text-[#ffffff]" : ""} hover:bg-red-500 hover:text-[#ffffff] rounded-2xl shadow block lg:inline drop-shadow-md`} >{input}</button>
    </div>
  )
}

export default ButtonsGrid