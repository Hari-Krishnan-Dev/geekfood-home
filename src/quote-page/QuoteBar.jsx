import React from 'react'

const QuoteBar = (props) => {
  return (
    <div>
          <section className='divider'>
        <div className='quotebar'>
          <p>{props.discription}</p>
          <span>{props.author}</span>
        </div>
         </section>
    </div>
  )
}

export default QuoteBar