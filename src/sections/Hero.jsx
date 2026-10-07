import { words, personalInfo } from "../constants/index.js"
import Button from "../components/Button.jsx"
import HeroExperience from "../components/HeroModels/HeroExperience.jsx"
import AnimatedCounter from "../components/AnimatedCounter.jsx"

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden pt-10 md:pt-0'>
      <div className='absolute top-0 left-0 z-10 pointer-events-none opacity-40'>
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className='hero-layout xl:grid xl:grid-cols-[55%_45%] gap-8 lg:gap-10 xl:items-center items-start max-w-[1500px] mx-auto px-4 sm:px-6 md:px-12'>
        {/* left: hero content */}
        <header className='flex flex-col justify-center w-full'>
          <div className='flex flex-col gap-6 md:gap-7'>
            {/* Status pill badge */}
            <div className='flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/25 w-fit backdrop-blur-md shadow-sm'>
              <span className='size-2.5 rounded-full bg-emerald-400 animate-pulse' />
              <span className='text-xs sm:text-sm md:text-base text-blue-200 font-medium'>
                Open for Software Engineering & Full-Stack Roles
              </span>
            </div>

            <div className='hero-text'>
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span key={`${word.text}-${index}`} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50 shadow-sm"
                        />
                        <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-zinc-300 text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed relative z-10">
              Hi, I'm <span className="text-white font-bold">{personalInfo.name}</span>, a Full-Stack & 3D Web Developer building scalable web applications, interactive Three.js graphics, and AI-powered systems.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2 z-20">
              <Button />

              {/* Resume / CV Button */}
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 font-semibold text-sm md:text-base flex items-center gap-2.5 transition-all shadow-md shadow-cyan-500/10 hover:scale-[1.02]"
              >
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Resume / CV</span>
              </a>

              {/* LeetCode Button */}
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 font-semibold text-sm md:text-base flex items-center gap-2.5 transition-all shadow-md shadow-amber-500/10 hover:scale-[1.02]"
              >
                <img src="/images/logos/leetcode.svg" alt="LeetCode" className="size-5" />
                <span>LeetCode</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl border border-zinc-700 bg-black-100 hover:bg-black-50 hover:border-zinc-500 text-white font-medium text-sm md:text-base flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <img src="/images/logos/git.svg" alt="GitHub" className="size-5" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl border border-zinc-700 bg-black-100 hover:bg-black-50 hover:border-zinc-500 text-white font-medium text-sm md:text-base flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <img src="/images/linkedin.png" alt="LinkedIn" className="size-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </header>

        {/* 3D room experience */}
        <div className='hero-3d-layout hidden md:block'>
          <HeroExperience />
        </div>
      </div>

      <AnimatedCounter />
    </section>
  )
}

export default Hero