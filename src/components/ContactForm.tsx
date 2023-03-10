import { /* useState, */ useRef, useEffect, useReducer } from 'react'
import { sendContactEmail } from '../services'
import { type InputState } from '../types/index'

const INITIAL_STATE = {
  from_name: '',
  from_email: '',
  message: ''
}

type FormReducerAction = {
  type: 'change_value'
  payload: {
    inputName: string
    inputValue: string
  }
} | {
  type: 'clear_state'
}

const formReducer = (state: InputState, action: FormReducerAction): InputState => {
  switch (action.type) {
    case 'change_value':
    { const { inputName, inputValue } = action.payload
      return {
        ...state,
        [inputName]: [inputValue]
      }
    }
    case 'clear_state':
    { return INITIAL_STATE }
  }
}

const ContactForm = (): JSX.Element => {
  // const [input, setInput] = useState<InputState>(INITIAL_STATE)

  const [input, dispatch] = useReducer(formReducer, INITIAL_STATE)

  const nameRef = useRef<HTMLInputElement>(null)
  // cuando se monta el componente ya aparece listo el cursor sobre el primer input de name para empezar a escribir.
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
    /* setInput({
      ...input, [property]: value
    }) */
  }

  const clickCleanHandler = (/* setInput: React.Dispatch<React.SetStateAction<InputState>> */): void => {
    /* setInput(INITIAL_STATE) */
    dispatch({
      type: 'clear_state'
    })
  }

  const handleSendMessage = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const formContact: HTMLFormElement = e.target
    sendContactEmail(formContact)
    clickCleanHandler(/* setInput */)
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
