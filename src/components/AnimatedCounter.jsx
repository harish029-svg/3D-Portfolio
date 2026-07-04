import React, { useEffect, useState } from 'react'
import { counterItems } from '../constants'

const AnimatedCounter = () => {
  const [counts, setCounts] = useState(counterItems.map(() => 0))

  useEffect(() => {
    let rafId
    const start = performance.now()
    const duration = 1500

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      setCounts(
        counterItems.map((item) => Math.floor(item.value * progress))
      )
      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
        <div className='mx-auto grid-4-cols'>
            {counterItems.map((items, index) =>(
                <div key={items.label} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
                    <div className='counter-number text-white text-5xl font-bold mb-2'>
                        {counts[index]}{items.suffix}
                    </div>

                    <div className='text-white-50 text-lg'>{items.label}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter