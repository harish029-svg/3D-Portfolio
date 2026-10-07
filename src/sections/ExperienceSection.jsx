import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants/index.js'
import GlowCard from '../components/GlowCard'

const ExperienceSection = () => {
  return (
    <section id="experience" className='w-full section-padding'>
      <div className='w-full max-w-7xl xl:max-w-[1400px] mx-auto'>
        <TitleHeader
          title="Experience & Bootcamp Training"
          sub="💼 Applied Engineering Track"
        />

        <p className='text-zinc-300 text-center max-w-3xl mx-auto mt-4 text-base md:text-xl leading-relaxed'>
          Hands-on full-stack development, Agile sprints, CI/CD automation, and high-performance system engineering.
        </p>

        <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {expCards.map((card, index) => (
            <div key={card.title} className='flex flex-col'>
              <GlowCard card={card} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection