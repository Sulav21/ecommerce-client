import React from 'react'

export const Head = () => {
  return (
    <>
    <section className='head'>
        <div className="container d_flex">
            <div className="left row">
                <i className='fa fa-phone'></i>
                <label>+61 449033 546</label>
                <i className='fa fa-envelope'></i>
                <label>exsmaple@gmail.com</label>
                
            </div>
            <div className="right row Rtext">
          <label>Theme FAQ's</label>
          <label>Need Help?</label>
            <label htmlFor=''>EN</label>
            <label htmlFor=''>USD</label>

            </div>
        </div>
    </section>
    </>
  )
}
