import React from 'react'

function Details({title, value}) {
  return (
    <div className='grid grid-cols-[25%_auto] gap-5 sm:gap-3 text-cyan-100 py-1 md:gap-4 md:grid-cols-[10%_60%]'>
        <div className=''>{title}:</div>
        <div className='justify-self-start'>{value}</div>
    </div>
  )
}

export default Details