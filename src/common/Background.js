import React from 'react'
import Header from './Header'
import Real_Main from './Real_Main'

function Background() {
  return (
    <section>
      <div className="All_main">
        <div className="back_main1"></div>
        <div className="back_main2"></div>
        <div className="real_main">
            <Real_Main></Real_Main>
        </div>
      </div>
        
        <Header></Header>
    </section>
  )
}

export default Background
