import React from 'react'
import { abilities } from '../constants/index.js'

const FeatureCards = () => {
  return (
    <div className='w-full px-4 sm:px-6 md:px-12 max-w-7xl xl:max-w-[1400px] mx-auto mt-10 mb-20'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className='bg-gradient-to-b from-black-100 to-black-100/90 border border-zinc-800 hover:border-cyan-500/40 rounded-3xl p-8 flex flex-col gap-4 shadow-xl transition-all duration-300 hover:scale-[1.02]'
          >
            <div className='flex flex-col items-start gap-4'>
              <div className='size-16 flex-none flex items-center justify-center rounded-2xl bg-black-200 border border-zinc-800 p-3'>
                <img src={imgPath} alt={title} className='size-10 object-contain' />
              </div>

              <h3 className='text-white text-2xl font-bold'>{title}</h3>
              <p className='text-zinc-300 text-base md:text-lg leading-relaxed'>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCards