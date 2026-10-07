import React, { useEffect, useState } from 'react'
import { navLinks, personalInfo } from '../constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled bg-black/90 backdrop-blur-xl border-b border-zinc-800 shadow-2xl' : 'not-scrolled'}`}>
      <div className='inner w-full max-w-7xl xl:max-w-[1450px] mx-auto flex items-center justify-between'>
        <a className='logo flex items-center gap-2.5 group' href="#hero">
          <span className='size-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-base shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform'>
            H
          </span>
          <span className='font-bold text-xl md:text-2xl tracking-wide text-white'>
            {personalInfo.name}
          </span>
          <span className='hidden sm:inline-block text-xs px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 font-medium'>
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className='desktop hidden lg:flex items-center'>
          <ul className='flex items-center space-x-8'>
            {navLinks.map(({ link, name }) => (
              <li key={name} className='group'>
                <a
                  href={link}
                  className='text-zinc-300 text-base font-medium hover:text-white transition-colors duration-200 py-1'
                >
                  <span>{name}</span>
                  <span className='underline block h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-300' />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side Action Buttons */}
        <div className='flex items-center gap-3'>
          {/* LeetCode Quick Link */}
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode Profile"
            className='hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs sm:text-sm font-semibold transition-all hover:scale-105'
          >
            <img src="/images/logos/leetcode.svg" alt="LeetCode" className='size-4' />
            <span>LeetCode</span>
          </a>

          <a
            href="#contact"
            className='contact-btn group px-5 py-2 rounded-xl bg-white text-black font-bold text-sm md:text-base hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-black transition-all duration-300 shadow-md hover:scale-105 hidden sm:flex items-center'
          >
            <span>Let's Talk</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type='button'
            aria-label='Toggle menu'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='lg:hidden p-2 rounded-xl bg-black-100 border border-zinc-800 text-white hover:bg-zinc-800 transition-colors'
          >
            {mobileMenuOpen ? (
              <svg className='size-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='size-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className='lg:hidden mt-4 pt-4 pb-6 px-4 bg-black-100/98 backdrop-blur-2xl border border-zinc-800 rounded-2xl shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200'>
          <ul className='flex flex-col gap-2'>
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  onClick={() => setMobileMenuOpen(false)}
                  className='block px-4 py-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all font-semibold text-base'
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div className='pt-2 border-t border-zinc-800 flex flex-col gap-2.5'>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className='w-full py-2.5 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold text-center text-sm flex items-center justify-center gap-2'
            >
              <img src="/images/logos/leetcode.svg" alt="LeetCode" className='size-4' />
              <span>LeetCode Profile (@Harry029) ↗</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className='w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold text-center text-sm shadow-md'
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar