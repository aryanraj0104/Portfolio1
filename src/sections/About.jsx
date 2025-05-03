import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
    const [hasCopied, setHasCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("aryanr.0104@gmail.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }
  return (
    <section className='c-space my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
            <div className='grid-container'>
                <img src="/assets/grid1.png" alt="profile" className='w-full sm:h-[276px] h-fit object-contain'/>
                <div>
                    <p className='grid-headtext'>Hi, I'm Aryan</p>
                    <p className='grid-subtext'>With 3 years of experience, I have honed my skills and knowledge as a Software dev, with a focus on Web Dev, UI/UX and Game Dev</p>
                </div>
            </div>
        </div>
        <div className='col-span-1 xl:row-span-3'>
            <div className='grid-container'>
                <img src="/assets/grid2.png" alt="Tech Stack" className='w-full sm:w-[276px] h-fit object-contain'/>
                <div>
                    <p className='grid-headtext'>Tech Stack</p>
                    <p className='grid-subtext'>I specialise in Front-End Design using frameworks like React and Framer Motion, and have knowledge and experience in Python, C, Java, C++, JS.</p>
                </div>
            </div>
        </div>
        <div className='col-span-1 xl:row-span-4'>
            <div className='grid-container'>
                <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                    <Globe 
                    height={326} 
                    width={326} 
                    backgroundColor='rgba(0,0,0,0)'
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
                    bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.png"}
                    labelsData={[{
                        lat:17.6868,
                        lng:83.2185,
                        text:"I'm here!",
                        size: "20",
                        
                    
                    }]}
                    />
                </div>
                <div>
                    <p className='grid-headtext'>I can work remotely across most timezones</p>
                    <p className='grid-subtext'>I am based in India, with remote work available</p>
                    <a href = "#contact">
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                    </a>
                </div>
            </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3'>
            <div className='grid-container'>
                <img src="/assets/grid3.png" alt="Why I Code?" className='w-full sm:h-[266px] h-fit object-contain'/>
                <div>
                    <p className='grid-headtext'>Why I Code?</p>
                    <p className='grid-subtext'>I love problem-solving and with coding I can apply my skills in real-time and solve real-life problems. I enjoy the constant process of learning and unlearning, upskilling and upgrading my knowledge. Learning new things everyday makes me happy : {")"}</p>
                </div>
            </div>
        </div>
        <div className='xl:col-span-1 xl:row-span-2'>
            <div className='grid-container'>
                <img src="/assets/grid4.png" alt="Contact Details" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
                <div className='space-y-2'>
                    <p className='grid-subtext text-center'>Contact Me</p>
                    <div className='copy-container' onClick={handleCopy}>
                        <img src={hasCopied?"assets/tick.svg":"assets/copy.svg"} alt="copy"/>
                        <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>aryanr.0104@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
