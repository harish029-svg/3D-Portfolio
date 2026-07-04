import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* {leftside} */}

                <div className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>

                    <div className='text-content'>
                        <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly website called Ryde</h2>
                        <p className='text-white-50 md:tect-xl'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe unde consectetur itaque assumenda! Unde ex, nam reiciendis cupiditate voluptates mollitia vero consequuntur maxime molestias magnam.
                        </p>
                    </div>
                </div>

                {/* {right side} */}

                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project'>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project2.png" alt="Library Management Platform" />
                        </div>
                        <h2>Library Management Platform</h2>
                    </div>

                    <div className='project'>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/project3.png" alt="YC Directory" />
                        </div>
                        <h2>YC Directory- A Startup Showcase App</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection