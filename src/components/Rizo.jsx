import React from 'react'
import '../components/rizo.css'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
const rizo = () => {
  return (
    
    <div>
        <header className='header'>
               <div className='container'>
            <div className='header__1'>
                <h1 className='m'>IN THE NEWS</h1>
                <img src={img3} alt="" />
                <img src={img1} alt="" />
                <img src={img4} alt="" />
                <img src={img2} alt="" />

            </div>
        </div>
        </header>
     <main>
        <section className='main__section1'>
            <div className='main__div'>
                <div className="main__img">
                    <img src={img5} alt="" />
                </div>
                    <div className="main__text">
                        <h3 className='main__h3'>DID YOU GET FINANCING FROM YOUR DEALER?</h3>
                        <h1 className='main__h1'>Fast, easy auto <br /> refinance</h1>
                        <p className='main__p'>Instantly access competitive rates in minutes, with a dedicated team available to walk you through the process.</p>
                        <button className='main__btn'>See how it work</button>
                    </div>
            </div>
        </section>
        <section className='main__section2'>
            <div className='sectin2__div'>
                <img src={img6} alt="" />
            </div>
        </section>
     </main>
    </div>
  )
}

export default rizo