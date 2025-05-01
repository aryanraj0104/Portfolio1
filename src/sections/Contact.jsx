import React, { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:''
  })
  
  //service_f9swc3c

  const handleChange = ({target:{name,value}}) =>{
    setForm({...form,[name]:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    try{
      await emailjs.send('service_f9swc3c', "template_a43iybi", {
        from_name: form.name,
        to_name: 'Aryan',
        from_email: form.email,
        to_email: 'aryanr.0104@gmail.com',
        message: form.message,
      },
      'DW15qezeC0onXaVPa'
      );
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.')
      setForm({
        name:'',
        email:'',
        message:''
      });
    } catch(err){
      setLoading(false);
      console.log(err);
      alert('Something went wrong. Please try again later.')
    }
  }

  const isMobile = useMediaQuery({maxWidth:768});

  return (
    <section id='contact' className='c-space my-20'>
      <div className='relative min-h-screen flex justify-center items-center flex-col'>
        {!isMobile && <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-full"/>}
        <div className='contact-container min-h-full'>
          <h3 className='head-text xl:mt-12 lg:mt-8 md:mt-4'>Let's Work Together</h3>
          <p className="text-lg text-white-600 mt-3">Whether you're building a new website, improve an existing platform or innovate something new, I'm here to help.</p>
          <form ref={formRef} onSubmit={handleSubmit} className='mt-6 mb-10 flex flex-col space-y-7'>
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='John Doe'
              className='field-input'
              required
              />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Email</span>
              <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='johndoe@gmail.com'
              className='field-input'
              required
              />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>Message</span>
              <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder= "Hi I'm intesrested in..."
              className='field-input'
              rows={5}
              required
              />
            </label>
            <button type='submit' className='field-btn' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow'/>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
