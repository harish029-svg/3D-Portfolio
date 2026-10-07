import React from 'react'
import { personalInfo, socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='w-full border-t border-zinc-900 bg-black-100/70 py-12 px-5 md:px-12'>
      <div className='max-w-7xl xl:max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>
        <div className='flex items-center gap-3.5'>
          <span className='size-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-black text-base shadow-md shadow-cyan-500/20'>
            H
          </span>
          <div>
            <p className='text-white font-bold text-lg'>{personalInfo.name}</p>
            <p className='text-sm text-zinc-400'>{personalInfo.role}</p>
          </div>
        </div>

        <p className='text-sm text-zinc-400 text-center md:text-left'>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Built with React, Three.js & Tailwind CSS.
        </p>

        <div className='flex items-center gap-3'>
          {socialImgs.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className='size-11 rounded-xl bg-black-200 border border-zinc-800 hover:border-cyan-400 hover:scale-105 flex items-center justify-center transition-all group'
            >
              <img
                src={social.imgPath}
                alt={social.name}
                className='size-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity'
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
