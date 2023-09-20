import React from 'react'
import {GiTeacher} from "react-icons/gi"

function Card({icon,title,bg,count,clr}) {
  return (
    <div className='rounded-lg bg-white shadow-lg h-48 w-full flex flex-col items-center justify-center'>
        <div className={`p-3 ${bg} rounded-lg text-3xl text-white`}>
            {icon}
        </div>
        <div className='text-center'>
            <h3 className='font-bold text-xl'>{count}</h3>
            <h4>{title}</h4>
        </div>
    </div>
  )
}

export default Card