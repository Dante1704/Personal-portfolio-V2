import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'

const ContactForm = (): JSX.Element => {
  const nameRef = useRef<HTMLInputElement>(null)

  const [input, setInput] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })

  // cuando se monta el componente ya aparece listo el cursor sobre el primer input de name para empezar a escribir.
  useEffect(() => {
    nameRef.current.select()
  }, [])

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const property = e.target.name
    const value = e.target.value
    setInput({
      ...input, [property]: value
    })
  }

  const clickCleanHandler = (): void => {
    setInput({
      name: '',
      email: '',
      message: ''
    })
  }

  const handleSendMessage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    emailjs
      .sendForm('service_wi35ken', 'template_25i093g', e.target, 'orQH8RSYIHTN8myvp')
      .then(
        (result) => {
          swal({
            title: 'Message Sent',
            text: 'I will write you back as soon as possible. Thank you.',
            icon: 'success'
          })
          console.log(result.text)
          clickCleanHandler()
        },
        (error) => {
          swal({
            title: 'Ups, something went wrong.',
            text: 'Please, write me to work.dantekaddarian@gmail.com',
            icon: 'error'
          })
          console.log(error.text)
        }
      )
  }

  return (
    <form onSubmit={handleSendMessage} className='bg-[#e6e7ff] max-w-[616px] flex flex-col gap-10 p-16 rounded-lg'>
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span className='bg-[#e6f3ff] text-[#0c0019]'>Name</span>
          <input type="text" placeholder="your name" name='from_name' className="input input-bordered text-[#0c0019] bg-[#f5f5ff]" value={input.name} onChange={handleValue} ref={nameRef} required />
        </label>
      </div>
     <div className="form-control">
        <label className="input-group input-group-vertical">
          <span className='bg-[#e6f3ff] text-[#0c0019]'>Email</span>
          <input type="email" placeholder="info@site.com" name="from_email" className="input input-bordered text-[#0c0019] bg-[#f5f5ff]" value={input.email} onChange={handleValue} required/>
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
