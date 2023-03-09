import { useState, useRef, useEffect } from 'react'
import { sendContactEmail } from '../services'

const ContactForm = (): JSX.Element => {
  const [input, setInput] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  const nameRef = useRef<HTMLInputElement>(null)
  // cuando se monta el componente ya aparece listo el cursor sobre el primer input de name para empezar a escribir.
  useEffect(() => {
    nameRef.current?.select()
  }, [])

  const handleValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const property = e.target.name
    const value = e.target.value
    setInput({
      ...input, [property]: value
    })
  }

  const clickCleanHandler = (): void => {
    setInput({
      from_name: '',
      from_email: '',
      message: ''
    })
  }

  const handleSendMessage = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const formContact: HTMLFormElement = e.target
    sendContactEmail(formContact)
    clickCleanHandler()
  }

  return (
    <form onSubmit={handleSendMessage} className='bg-[#e6e7ff] max-w-[616px] flex flex-col gap-10 p-16 rounded-lg'>
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span className='bg-[#e6f3ff] text-[#0c0019]'>Name</span>
          <input type="text" placeholder="Juan" name='from_name' className="input input-bordered text-[#0c0019] bg-[#f5f5ff]" value={input.from_name} onChange={handleValue} ref={nameRef} required />
        </label>
      </div>
     <div className="form-control">
        <label className="input-group input-group-vertical">
          <span className='bg-[#e6f3ff] text-[#0c0019]'>Email</span>
          <input type="email" placeholder="info@site.com" name="from_email" className="input input-bordered text-[#0c0019] bg-[#f5f5ff]" value={input.from_email} onChange={handleValue} required/>
        </label>
      </div>
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span className='bg-[#e6f3ff] text-[#0c0019]'>Message</span>
          <textarea placeholder="Hi Dante..." name="message" className="input input-bordered text-[#0c0019] bg-[#f5f5ff]" value={input.message} onChange={handleValue} required/>
        </label>
      </div>
      <button type='submit' className="btn bg-[#23014c] text-[#e6e7ff] hover:bg-[#012a4c]">Send Message</button>
    </form>
  )
}

export default ContactForm
