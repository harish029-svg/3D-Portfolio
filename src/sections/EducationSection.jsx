import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { educationList } from '../constants'

const EducationSection = () => {
  return (
    <section id="education" className='w-full section-padding'>
      <div className='w-full max-w-7xl xl:max-w-[1400px] mx-auto'>
        <TitleHeader title="Academic Background" sub="🎓 Education" />

        <p className='text-zinc-300 text-center max-w-3xl mx-auto mt-4 text-base md:text-xl leading-relaxed'>
          Solid foundational and university coursework in Computer Science and Engineering.
        </p>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6'>
          {educationList.map((edu) => (
            <div
              key={edu.institution}
              className='bg-gradient-to-b from-black-100 to-black-100/90 border border-zinc-800 hover:border-blue-500/40 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:scale-[1.02]'
            >
              <div>
                <div className='flex items-center justify-between gap-2 mb-4'>
                  <span className='px-3.5 py-1 rounded-full text-xs md:text-sm font-bold bg-blue-500/15 text-blue-300 border border-blue-500/30'>
                    {edu.score}
                  </span>
                  <span className='text-xs md:text-sm font-mono text-zinc-400'>{edu.period}</span>
                </div>

                <h4 className='text-xl md:text-2xl font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors'>
                  {edu.institution}
                </h4>

                <p className='text-sm text-zinc-400 mb-3'>{edu.location}</p>

                <p className='text-cyan-300 text-base font-semibold mb-3'>
                  {edu.degree}
                </p>

                <p className='text-zinc-300 text-base leading-relaxed'>
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
