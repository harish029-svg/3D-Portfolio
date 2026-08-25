import React from 'react'
import { abilities } from '../constants/index.js'

const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg mt-10 mb-20'>
        <div className='mx-auto grid-3-cols'>
             {abilities.map(({imgPath, title, desc }) => (
                <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                    <div className='flex flex-col items-start gap-4'>
                      <div className='size-20 flex-none flex items-center justify-center rounded-full'>
                        <img src={imgPath} alt={title} className='size-16 object-contain' />
                      </div>
        
                        <h3 className='text-white text-2xl font-semibold'>{title}</h3>
                        <p className='text-white-50 text-lg'>{desc}</p>
                    </div>
                </div>
             ))}
        </div>
    </div>

  )
}

export default FeatureCards