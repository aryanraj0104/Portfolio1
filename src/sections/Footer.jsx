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
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                    </svg>
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
