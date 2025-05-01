import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Socials & Links</p>
        </div>
        <div className='flex gap-3'>
            <a href="https://github.com/aryanraj0104" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                    <img src = "/assets/github.svg" alt="github" className='w-1/2 h-1/2'/>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/araj01/" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                    <img src = "/assets/linkedin.svg" alt="github" className='w-1/2 h-1/2'/>
                </div>
            </a>
            <a href="https://leetcode.com/u/aryan_raj_01/" target="_blank" rel="noopener noreferrer">
                <div className="social-icon">
                    <img src = "/assets/leetcode.svg" alt="github" className='w-1/2 h-1/2'/>
                </div>
            </a>
        </div>
      
    </section>
  )
}

export default Footer
