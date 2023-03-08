import ContactForm from './ContactForm'

const Contact = (): JSX.Element => {
  return (
    <section id='contact' className='flex flex-col gap-10 max-w-2xl mx-auto px-2 pb-20 text-[#eee1ff]'>
      <h2 className='text-5xl font-bold font-poppins text-center w-max subpixel-antialiased mx-auto p-2 pt-36'>Contact</h2>
      <h3 className='text-2xl font-bold mb-5 mt-32'>Let&apos;s get in touch!</h3>
       <div className="mt-20 mb-10 px-3 flex justify-center gap-6 ">
          <a href='mailto:dante.nkaddarian@gmail.com'>
            <button className="btn bg-[#eee1ff] text-[#0c0019] hover:bg-[#e6f3ff]">email me</button>
          </a>
          <a href="https://www.linkedin.com/in/dante-nicolas-kaddarian-39696a131/" target="_blank" rel='noreferrer'>
            <button className="btn bg-[#eee1ff] text-[#0c0019] hover:bg-[#e6f3ff]">MESSAGE ME ON LINKEDIN</button>
          </a>
      </div>
      <p className='text-center mb-20'>Also, you can reach me out directly by filling out the form underneath.</p>
      <ContactForm/>
    </section>
  )
}

export default Contact
