import emailjs from '@emailjs/browser'
import swal from 'sweetalert'

export const sendContactEmail = (form: HTMLFormElement): void => {
  emailjs
    .sendForm('service_wi35ken', 'template_25i093g', form, 'orQH8RSYIHTN8myvp')
    .then(
      async (result) => {
        await swal({
          title: 'Message Sent',
          text: 'I will write you back as soon as possible. Thank you.',
          icon: 'success'
        })
        console.log(result.text)
      },
      async (error) => {
        await swal({
          title: 'Ups, something went wrong.',
          text: 'Please, write me to work.dantekaddarian@gmail.com',
          icon: 'error'
        })
        console.log(error.text)
      }
    )
}
