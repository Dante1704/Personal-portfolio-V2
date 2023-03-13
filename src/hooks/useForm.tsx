import { useReducer } from 'react'
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
    default:
      return state
  }
}

const useForm = (): [InputState, React.Dispatch<FormReducerAction>] => {
  return useReducer(formReducer, INITIAL_STATE)
}

export default useForm
