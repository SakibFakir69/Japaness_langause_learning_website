


import React from 'react'
import Banner from '../Homepages/Banner'
import About from '../Homepages/About'
import Success from '../Homepages/Success'
import Unique from '../Homepages/Unique'
import Other from '../Homepages/Other'

function Home() {
  return (
    <div className='px-4 mx-auto'>

    
      <Banner/>
    

      {/* add 3 ai genrate photo */}
      <About/>
      {/* add hand icon per ttitle */}
      <Success/>
      <Unique/>
      <Other/>
      {/* discount offer */}



     
    </div>
  )
}

export default Home