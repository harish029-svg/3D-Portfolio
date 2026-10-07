import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TitleHeader from '../components/TitleHeader'
import { projectsData } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useGSAP(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return
      gsap.fromTo(
        card,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.15 * index,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=80',
          },
        }
      )
    })

    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
  }, [])

  return (
    <section id='work' ref={sectionRef} className='w-full section-padding'>
      <div className='w-full max-w-7xl xl:max-w-[1400px] mx-auto'>
        <TitleHeader title="Featured Projects" sub="🚀 Real-World Engineering" />

        <p className='text-zinc-300 text-center max-w-3xl mx-auto mt-4 text-base md:text-xl leading-relaxed'>
          Production-ready applications featuring full-stack architectures, interactive 3D WebGL visuals, and intelligent AI pipelines.
        </p>

        {/* Featured Project: Voidra AI (Large Showcase) */}
        {projectsData.length > 0 && (
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className='mt-14 bg-gradient-to-b from-black-100 to-black-100/90 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 md:p-12 relative group/card'
          >
            {/* Ambient Background Glow */}
            <div className='absolute -top-24 -right-24 size-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none' />
            <div className='absolute -bottom-24 -left-24 size-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none' />

            <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10'>
              {/* Left Column: Project Details */}
              <div className='lg:col-span-6 space-y-5'>
                <div className='flex flex-wrap items-center gap-3'>
                  <span className='px-3.5 py-1 rounded-full text-xs md:text-sm font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'>
                    {projectsData[0].badge}
                  </span>
                  <span className='text-xs md:text-sm text-zinc-400 font-mono tracking-wide'>
                    Featured 3D + AI Project
                  </span>
                </div>

                <a
                  href={projectsData[0].live || projectsData[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='inline-block group/title'
                >
                  <h3 className='text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight group-hover/title:text-cyan-400 transition-colors flex items-center gap-3'>
                    <span>{projectsData[0].title}</span>
                    <span className='text-cyan-400 text-2xl md:text-3xl opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-1 transition-all duration-300'>
                      ↗
                    </span>
                  </h3>
                </a>

                <p className='text-cyan-300 text-lg md:text-xl font-semibold'>
                  {projectsData[0].tagline}
                </p>

                <p className='text-zinc-300 text-base md:text-lg leading-relaxed'>
                  {projectsData[0].desc}
                </p>

                <ul className='space-y-2.5 pt-2'>
                  {projectsData[0].highlights.map((highlight, idx) => (
                    <li key={idx} className='flex items-start gap-3 text-sm md:text-base text-zinc-200'>
                      <span className='text-cyan-400 mt-1 font-bold text-base'>▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className='flex flex-wrap gap-2 pt-3'>
                  {projectsData[0].tech.map((t) => (
                    <span
                      key={t}
                      className='px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium bg-black-200 text-blue-200 border border-zinc-800'
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Direct Action Links: Live Demo + GitHub */}
                <div className='flex flex-wrap items-center gap-4 pt-4'>
                  <a
                    href={projectsData[0].live || projectsData[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold text-sm md:text-base hover:from-cyan-300 hover:to-blue-500 transition-all flex items-center gap-2.5 shadow-lg shadow-cyan-500/20 hover:scale-[1.02] cursor-pointer'
                  >
                    <span>🚀 Live Demo</span>
                    <span className='text-lg'>↗</span>
                  </a>

                  <a
                    href={projectsData[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='px-6 py-3.5 rounded-xl bg-black-200 border border-zinc-700 hover:border-zinc-500 text-white font-semibold text-sm md:text-base hover:bg-black-50 transition-all flex items-center gap-2 shadow-md cursor-pointer'
                  >
                    <img src="/images/logos/git.svg" alt="GitHub" className='size-5' />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Complete Uncut Image Display */}
              <div className='lg:col-span-6'>
                <a
                  href={projectsData[0].live || projectsData[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='block group/img relative rounded-2xl overflow-hidden border border-zinc-800 hover:border-cyan-400/80 bg-gradient-to-b from-zinc-900/80 via-black to-zinc-950 p-3 sm:p-4 shadow-2xl transition-all duration-300 cursor-pointer'
                >
                  <div className='w-full flex items-center justify-center min-h-[300px] md:min-h-[380px] bg-black/50 rounded-xl overflow-hidden p-2'>
                    <img
                      src={projectsData[0].imgPath}
                      alt={projectsData[0].title}
                      className='w-full h-auto max-h-[460px] object-contain rounded-lg group-hover/img:scale-[1.03] transition-transform duration-500'
                    />
                  </div>

                  {/* Click indicator badge */}
                  <div className='absolute bottom-5 right-5 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 opacity-90 group-hover/img:opacity-100 group-hover/img:bg-cyan-500 group-hover/img:text-black transition-all'>
                    <span>Click to Open Project</span>
                    <span>↗</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
          {projectsData.slice(1).map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index + 1] = el)}
              className='bg-gradient-to-b from-black-100 to-black-100/95 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-xl group'
            >
              <div>
                {/* Complete Uncut Project Image */}
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='block relative rounded-2xl overflow-hidden border border-zinc-800/90 bg-gradient-to-b from-zinc-900/70 to-black p-3 mb-6 group/item hover:border-blue-400/60 transition-all cursor-pointer'
                >
                  <div className='w-full flex items-center justify-center h-64 sm:h-72 bg-black/40 rounded-xl overflow-hidden p-2'>
                    <img
                      src={project.imgPath}
                      alt={project.title}
                      className='w-full h-full object-contain rounded-lg group-hover/item:scale-[1.03] transition-transform duration-500'
                    />
                  </div>
                  <div className='absolute bottom-5 right-5 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-blue-500/30 text-blue-300 text-xs font-medium flex items-center gap-1 opacity-90 group-hover/item:bg-blue-500 group-hover/item:text-black transition-all'>
                    <span>Open Project ↗</span>
                  </div>
                </a>

                <div className='flex items-center justify-between mb-3'>
                  <span className='px-3.5 py-1 rounded-full text-xs md:text-sm font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30'>
                    {project.badge}
                  </span>
                </div>

                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='block group/title'
                >
                  <h4 className='text-2xl md:text-3xl font-bold text-white mb-2 group-hover/title:text-blue-400 transition-colors flex items-center gap-2'>
                    <span>{project.title}</span>
                    <span className='text-blue-400 text-xl opacity-0 group-hover/title:opacity-100 transition-opacity'>↗</span>
                  </h4>
                </a>

                <p className='text-blue-300 text-base font-medium mb-3'>
                  {project.tagline}
                </p>

                <p className='text-zinc-300 text-base leading-relaxed mb-5'>
                  {project.desc}
                </p>

                <ul className='space-y-2 mb-6'>
                  {project.highlights.map((h, i) => (
                    <li key={i} className='flex items-start gap-2.5 text-sm md:text-base text-zinc-200'>
                      <span className='text-blue-400 font-bold'>▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className='px-3 py-1 rounded-lg text-xs md:text-sm font-medium bg-black-200 text-zinc-200 border border-zinc-800'
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className='flex flex-wrap items-center gap-3 pt-2 border-t border-zinc-800/80'>
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm md:text-base flex items-center gap-2 transition-all shadow-md cursor-pointer'
                  >
                    <span>Live Demo</span>
                    <span>↗</span>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='px-4 py-2.5 rounded-xl bg-black-200 border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white font-medium text-sm md:text-base flex items-center gap-2 transition-all cursor-pointer'
                  >
                    <img src="/images/logos/git.svg" alt="GitHub" className='size-4' />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection