import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { achievementsList, certificatesList, personalInfo } from '../constants'

const AchievementsSection = () => {
  return (
    <section id="achievements" className='w-full section-padding'>
      <div className='w-full max-w-7xl xl:max-w-[1400px] mx-auto'>
        <TitleHeader
          title="Achievements & Certifications"
          sub="🏆 Milestones & Recognition"
        />

        <p className='text-zinc-300 text-center max-w-3xl mx-auto mt-4 text-base md:text-xl leading-relaxed'>
          Proven dedication through competitive problem solving, university athletic representation, and accredited technical certifications.
        </p>

        {/* Achievements Grid */}
        <div className='mt-16'>
          <div className='flex flex-wrap items-center justify-between gap-4 mb-6'>
            <h3 className='text-2xl md:text-3xl font-bold text-white flex items-center gap-3'>
              <span className='size-3 rounded-full bg-emerald-400 animate-pulse' />
              Key Achievements & Coding Streaks
            </h3>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className='px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-sm font-semibold flex items-center gap-2 transition-all hover:scale-105'
            >
              <img src="/images/logos/leetcode.svg" alt="LeetCode" className='size-4' />
              <span>Visit LeetCode Profile (@Harry029) ↗</span>
            </a>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {achievementsList.map((item) => (
              <div
                key={item.title}
                className='bg-gradient-to-b from-black-100 to-black-100/90 border border-zinc-800 hover:border-zinc-600 rounded-3xl p-7 transition-all duration-300 hover:scale-[1.02] shadow-xl flex flex-col justify-between group'
              >
                <div>
                  <div className='text-4xl mb-4'>{item.icon}</div>
                  <h4 className='text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors'>
                    {item.title}
                  </h4>
                  <p className='text-sm font-semibold text-emerald-400 mb-3'>{item.platform}</p>
                  <p className='text-zinc-300 text-base leading-relaxed mb-4'>{item.desc}</p>
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='mt-2 inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-amber-200 transition-colors pt-3 border-t border-zinc-800/80'
                  >
                    <img src="/images/logos/leetcode.svg" alt="LeetCode" className='size-4' />
                    <span>{item.linkText || 'Open LeetCode'}</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className='mt-16'>
          <h3 className='text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3'>
            <span className='size-3 rounded-full bg-cyan-400' />
            Verified Certifications
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {certificatesList.map((cert) => (
              <div
                key={cert.title}
                className='bg-gradient-to-b from-black-100 to-black-100/90 border border-zinc-800 hover:border-cyan-500/40 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:scale-[1.02]'
              >
                <div>
                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-3xl'>{cert.icon}</span>
                    <span className='text-xs font-mono text-zinc-400'>{cert.date}</span>
                  </div>

                  <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3'>
                    {cert.badge}
                  </span>

                  <h4 className='text-lg md:text-xl font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors'>
                    {cert.title}
                  </h4>
                  <p className='text-sm font-semibold text-cyan-400 mb-3'>{cert.issuer}</p>
                  <p className='text-zinc-300 text-sm md:text-base leading-relaxed'>{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
