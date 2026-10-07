import React, { useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import { personalInfo } from '../constants'

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ submitted: false, copying: false })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Prepare mailto link as direct fallback
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setStatus((prev) => ({ ...prev, submitted: true }))
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setStatus((prev) => ({ ...prev, copying: true }))
    setTimeout(() => {
      setStatus((prev) => ({ ...prev, copying: false }))
    }, 2000)
  }

  return (
    <section id="contact" className='w-full section-padding pb-20'>
      <div className='w-full max-w-7xl xl:max-w-[1400px] mx-auto'>
        <TitleHeader title="Let's Build Something Great" sub="📬 Get in Touch" />

        <p className='text-zinc-300 text-center max-w-3xl mx-auto mt-4 text-base md:text-xl leading-relaxed'>
          Whether you have an exciting project, a software engineering opportunity, or just want to connect, feel free to reach out.
        </p>

        <div className='mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start'>
          {/* Left Info Column */}
          <div className='lg:col-span-5 bg-gradient-to-b from-black-100 to-black-100/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl'>
            <div>
              <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>Contact Details</h3>
              <p className='text-zinc-400 text-base'>
                Direct channels for quick discussions and inquiries.
              </p>
            </div>

            <div className='space-y-4'>
              {/* Resume Card */}
              <div className='p-4 rounded-2xl bg-black-200 border border-cyan-500/30 flex items-center justify-between hover:border-cyan-400 transition-colors'>
                <div className='flex items-center gap-3.5'>
                  <div className='size-11 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400'>
                    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className='text-xs text-cyan-300/80 font-medium uppercase tracking-wider'>Curriculum Vitae</p>
                    <a
                      href={personalInfo.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-sm md:text-base font-bold text-white hover:text-cyan-300 transition-colors flex items-center gap-1.5'
                    >
                      <span>Harish Suthar — Resume</span>
                      <span className='text-cyan-400'>↗</span>
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 transition-colors'
                >
                  View
                </a>
              </div>

              {/* LeetCode Card */}
              <div className='p-4 rounded-2xl bg-black-200 border border-amber-500/30 flex items-center justify-between hover:border-amber-400 transition-colors'>
                <div className='flex items-center gap-3.5'>
                  <div className='size-11 rounded-xl bg-amber-500/10 flex items-center justify-center'>
                    <img src="/images/logos/leetcode.svg" alt="LeetCode" className='size-6' />
                  </div>
                  <div>
                    <p className='text-xs text-amber-300/80 font-medium uppercase tracking-wider'>LeetCode Profile</p>
                    <a
                      href={personalInfo.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-sm md:text-base font-bold text-white hover:text-amber-300 transition-colors flex items-center gap-1.5'
                    >
                      <span>leetcode.com/u/Harry029</span>
                      <span className='text-amber-400'>↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className='p-4 rounded-2xl bg-black-200 border border-zinc-800 flex items-center justify-between hover:border-zinc-700 transition-colors'>
                <div className='flex items-center gap-3.5'>
                  <div className='size-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl'>
                    ✉️
                  </div>
                  <div>
                    <p className='text-xs text-zinc-400 font-medium uppercase tracking-wider'>Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className='text-sm md:text-base font-bold text-white hover:text-cyan-400 transition-colors'
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type='button'
                  onClick={copyEmail}
                  className='px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors'
                >
                  {status.copying ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Phone Card */}
              <div className='p-4 rounded-2xl bg-black-200 border border-zinc-800 flex items-center gap-3.5 hover:border-zinc-700 transition-colors'>
                <div className='size-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-xl'>
                  📱
                </div>
                <div>
                  <p className='text-xs text-zinc-400 font-medium uppercase tracking-wider'>Mobile</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className='text-sm md:text-base font-bold text-white hover:text-emerald-400 transition-colors'
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className='p-4 rounded-2xl bg-black-200 border border-zinc-800 flex items-center gap-3.5 hover:border-zinc-700 transition-colors'>
                <div className='size-11 rounded-xl bg-sky-500/10 flex items-center justify-center'>
                  <img src="/images/linkedin.png" alt="LinkedIn" className='size-5' />
                </div>
                <div>
                  <p className='text-xs text-zinc-400 font-medium uppercase tracking-wider'>LinkedIn</p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-sm md:text-base font-bold text-white hover:text-sky-400 transition-colors'
                  >
                    harish-suthar09 ↗
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className='p-4 rounded-2xl bg-black-200 border border-zinc-800 flex items-center gap-3.5 hover:border-zinc-700 transition-colors'>
                <div className='size-11 rounded-xl bg-purple-500/10 flex items-center justify-center'>
                  <img src="/images/logos/git.svg" alt="GitHub" className='size-5' />
                </div>
                <div>
                  <p className='text-xs text-zinc-400 font-medium uppercase tracking-wider'>GitHub</p>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-sm md:text-base font-bold text-white hover:text-purple-400 transition-colors'
                  >
                    harish029-svg ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className='lg:col-span-7 bg-gradient-to-b from-black-100 to-black-100/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl'>
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>Send a Direct Message</h3>
            <p className='text-zinc-400 text-base mb-6'>
              Fill out the form below and it will draft your message immediately.
            </p>

            <form onSubmit={handleSubmit} className='space-y-5'>
              <div>
                <label className='block text-xs md:text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-2'>
                  Your Name
                </label>
                <input
                  type='text'
                  required
                  placeholder='e.g. Harish Suthar'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='w-full px-4 py-3.5 bg-black-200 border border-zinc-800 focus:border-cyan-400 rounded-xl text-white outline-none transition-all placeholder:text-zinc-600 text-base'
                />
              </div>

              <div>
                <label className='block text-xs md:text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-2'>
                  Your Email
                </label>
                <input
                  type='email'
                  required
                  placeholder='e.g. yourname@example.com'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='w-full px-4 py-3.5 bg-black-200 border border-zinc-800 focus:border-cyan-400 rounded-xl text-white outline-none transition-all placeholder:text-zinc-600 text-base'
                />
              </div>

              <div>
                <label className='block text-xs md:text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-2'>
                  Your Message
                </label>
                <textarea
                  rows='4'
                  required
                  placeholder='Tell me about your project, team, or opportunity...'
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className='w-full px-4 py-3.5 bg-black-200 border border-zinc-800 focus:border-cyan-400 rounded-xl text-white outline-none transition-all placeholder:text-zinc-600 resize-none text-base'
                />
              </div>

              <button
                type='submit'
                className='w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-black font-bold text-base md:text-lg hover:from-cyan-300 hover:to-blue-500 transition-all shadow-lg shadow-blue-500/20 cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01]'
              >
                <span>Send Message</span>
                <img src="/images/arrow-right.svg" alt="send" className='size-4' />
              </button>

              {status.submitted && (
                <p className='text-emerald-400 text-center text-sm md:text-base font-medium pt-2'>
                  ✓ Message drafted! If your email client didn't open automatically, feel free to email directly at {personalInfo.email}.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
