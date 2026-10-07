import React from 'react'
import TitleHeader from '../components/TitleHeader'
import Tech3DCard from '../components/Tech3DCard'
import { techStackIcons, skillsCategories } from '../constants'

const TechStackSection = () => {
  return (
    <section id='skills' className='w-full section-padding'>
      <div className='w-full max-w-7xl xl:max-w-[1400px] mx-auto'>
        <TitleHeader title="Technical Skills & 3D Stack" sub="⚡ What I Work With" />

        <p className='text-zinc-300 text-center max-w-3xl mx-auto mt-4 text-base md:text-xl leading-relaxed'>
          Interactive 3D representations of core technologies along with a comprehensive breakdown of languages, frameworks, databases, and engineering fundamentals.
        </p>

        {/* 3D Interactive Tech Models Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-14'>
          {techStackIcons.map((icon) => (
            <Tech3DCard key={icon.name} icon={icon} />
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          {skillsCategories.map((group) => (
            <div
              key={group.category}
              className='bg-gradient-to-b from-black-100 to-black-100/90 border border-zinc-800 hover:border-cyan-500/40 transition-all duration-300 rounded-3xl p-7 flex flex-col justify-between shadow-xl'
            >
              <div>
                <div className='flex items-center gap-2.5 mb-5'>
                  <span className='size-3 rounded-full bg-cyan-400' />
                  <h4 className='text-xl font-bold text-white'>{group.category}</h4>
                </div>

                <div className='flex flex-wrap gap-2.5'>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className='px-3.5 py-1.5 rounded-xl bg-black-200 border border-zinc-800 text-sm md:text-base font-semibold text-zinc-200 hover:text-white hover:border-cyan-500/50 hover:bg-black-50 transition-all'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStackSection
