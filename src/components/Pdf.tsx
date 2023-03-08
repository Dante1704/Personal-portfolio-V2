const Pdf = (): JSX.Element => {
  return (
    <div className='min-h-[85vh] w-full'>
        <object
        data={require('../docs/Dante-Kaddarian-Resume.pdf')}
        type="application/pdf"
        className='h-[100vh] w-full'
        >

        </object>
    </div>
  )
}

export default Pdf
