import React from 'react'

const TitleHeader = ({ title, sub }) => {
  return (
    <div className='flex flex-col items-center gap-4 md:gap-5'>
      {sub && (
        <div className='px-4 py-1.5 rounded-full bg-black-200 border border-zinc-800 text-xs sm:text-sm md:text-base font-semibold text-cyan-300 shadow-sm'>
          <p>{sub}</p>
        </div>
      )}
      <div className='font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white tracking-tight'>
        {title}
      </div>
    </div>
  )
}

export default TitleHeader