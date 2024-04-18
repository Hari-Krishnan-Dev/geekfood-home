import React from 'react'
import './SearchFood.css'

const SearchFood = () => {
  return (
    <div>
      <section className='search-ctn'>
      <div className='bg-div'></div>
      <div className='sf-bg'>
      <div className='sf-items'>
        <h1 className='txt-food'>Let us find your
        <strong >Forever Food.</strong></h1>
        
        <p className='p-sf'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
        <div className='anchors-sf'>
          <a className="search-sf" href="/">Search Now</a>
          <a className="know-sf"  href="/">Know more</a>
        </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default SearchFood