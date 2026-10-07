import React, { useEffect, useState } from 'react'
import { counterItems, personalInfo } from '../constants'

const AnimatedCounter = () => {
  const [counts, setCounts] = useState(counterItems.map(() => 0))

  useEffect(() => {
    let rafId
    const start = performance.now()
    const duration = 1500

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      setCounts(
        counterItems.map((item) => {
          if (item.isDecimal) {
            return (item.value * progress / 100).toFixed(2)
          }
          return Math.floor(item.value * progress)
        })
      )
      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div id='counter' className='w-full px-4 sm:px-6 md:px-12 xl:max-w-[1450px] mx-auto xl:mt-0 mt-32'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {counterItems.map((item, index) => {
          const isLeetCode = item.label.toLowerCase().includes('leetcode')
          const CardElement = isLeetCode ? 'a' : 'div'
          const linkProps = isLeetCode
            ? {
                href: personalInfo.leetcode,
                target: '_blank',
                rel: 'noopener noreferrer',
                title: 'View LeetCode Profile',
              }
            : {}

          return (
            <CardElement
              key={item.label}
              {...linkProps}
              className={`bg-gradient-to-b from-black-100 to-black-100/90 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 rounded-2xl p-7 flex flex-col justify-center shadow-lg group ${
                isLeetCode ? 'hover:border-amber-500/50 cursor-pointer hover:scale-[1.02]' : ''
              }`}
            >
              <div className='flex items-baseline justify-between'>
                <div
                  className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-2 transition-colors ${
                    isLeetCode
                      ? 'text-amber-400 group-hover:text-amber-300'
                      : 'text-white group-hover:text-cyan-400'
                  }`}
                >
                  {counts[index]}
                  {item.suffix}
                </div>
                {isLeetCode && (
                  <span className='text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20'>
                    LeetCode ↗
                  </span>
                )}
              </div>

              <div className='text-zinc-300 text-base md:text-lg font-semibold leading-snug'>
                {item.label}
              </div>
            </CardElement>
          )
        })}
      </div>
    </div>
  )
}

export default AnimatedCounter