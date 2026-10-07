import React, { useRef } from 'react'

const GlowCard = ({ card, children }) => {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const angle = (Math.atan2(y, x) * (180 / Math.PI) + 360) % 360
    cardRef.current.style.setProperty('--start', `${angle}`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className='card card-border timeline-card rounded-3xl p-8 bg-gradient-to-b from-black-100 to-black-100/90 shadow-xl transition-all duration-300 flex flex-col justify-between h-full'
    >
      <div>
        <div className='flex items-center justify-between gap-3 mb-4'>
          <span className='px-3.5 py-1 rounded-full text-xs md:text-sm font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30'>
            {card.badge || 'Experience'}
          </span>
          <span className='text-xs md:text-sm text-zinc-400 font-mono'>{card.date}</span>
        </div>

        <h4 className='text-xl md:text-2xl font-bold text-white mb-1.5'>{card.title}</h4>
        <p className='text-base font-semibold text-cyan-300 mb-4'>{card.organization}</p>

        <p className='text-zinc-300 text-base leading-relaxed mb-5'>{card.review}</p>

        {card.responsibilities && card.responsibilities.length > 0 && (
          <ul className='space-y-2.5 mb-4 border-t border-zinc-800/80 pt-4'>
            {card.responsibilities.map((resp, i) => (
              <li key={i} className='flex items-start gap-3 text-sm md:text-base text-zinc-200'>
                <span className='text-cyan-400 font-bold mt-0.5'>▸</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {children}
    </div>
  )
}

export default GlowCard