import resume from '../docs/Dante-Kaddarian-Resume.pdf'

const Pdf = (): JSX.Element => {
  return (
    <div className='min-h-[85vh] w-full'>
        <object
        data={resume}
        type="application/pdf"
        className='h-[100vh] w-full'
        >

        </object>
    </div>
  )
}

export default Pdf
