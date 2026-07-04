import {words} from "../constants/index.js"
import Button from "../components/Button.jsx"
import HeroExperience from "../components/HeroModels/HeroExperience.jsx"
import AnimatedCounter from "../components/AnimatedCounter.jsx"
const Hero = () => {
  return (
     <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>

       <div className='hero-layout xl:grid xl:grid-cols-[55%_45%] gap-10 xl:items-center items-start'>
        {
        // left: hero content
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
            <div className='flex flex-col gap-7'>
                <div className='hero-text'>
                    <h1>Shaping 
                        <span className="slide">
                            <span className="wrapper">              
                                {words.map((word, index)=>(
                                    <span key={`${word.text}-${index}`} className="flex items-center md:gap-3 gap-1 pb-2">
                                        <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />

                                        <span>{word.text}</span>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>


                    <h1>into Real Projects</h1>
                    <h1>that Deliver Results</h1>
                </div>

                <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                    Hi, I'm Harish, a passionate developer creating immersive digital experiences. 
                </p>
                <Button />
            </div>
        </header>
        }

        <div className='hero-3d-layout hidden md:block'>
            <HeroExperience />
        </div>
       </div>
       <AnimatedCounter />
     </section>
    
  )
}

export default Hero