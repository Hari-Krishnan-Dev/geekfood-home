import React from 'react'
import './GetInTouch.css'

const GetInTouch = () => {
  return (
    <div>
      <section>
        <div className='outer-div'>
          <div className='inner-div'>

            <div className='img-ctn'>
              <div className='img-in-ctn'>
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
              </div>
            </div>

            <div className='get-text-ctn'>
              <span></span>
              <div className='txt-items'>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam officiis debitis impedit qui expedita, vitae, exercitationem at quos labore fugiat corrupti delectus facilis optio officia rem! Necessitatibus, ut quis.</p>
                <a className='git-link' href="/">Get in Touch</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default GetInTouch