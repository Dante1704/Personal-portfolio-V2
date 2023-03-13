import { useRef, useEffect } from 'react'
import useForm from '../hooks/useForm' // custom hook
import { sendContactEmail } from '../services'

const ContactForm = (): JSX.Element => {
  const [input, dispatch] = useForm()

  const nameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    nameRef.current?.select()
  }, [])

  const handleValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const property = e.target.name
    const value = e.target.value
    dispatch({
      type: 'change_value',
      payload: {
        inputName: property,
        inputValue: value
      }
    })
  }

  const clickCleanHandler = (): void => {
    dispatch({
      type: 'clear_state'
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
