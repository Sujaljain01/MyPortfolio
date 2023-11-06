import React from 'react'
import './intro.css';
import bg from '../../assets/bgsujal.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
function Intro() {
  return (
<section className="intro">
    <div className="introContent">
    <span className="hello">Hello,</span>
    <span className="introText">I'm <span className="introName">Sujal Jain</span> <br/>Web Designer</span>
    <p className="introPara">I'm a skilled Web Developer with Zero experience in  <br /> creating visual and User friendly designs</p>
    <Link><button className="btn"><img src={btnImg} alt="" className='imgg' />Hire Me</button></Link>
    </div> 
    <img src={bg} alt="" className="bg" />
</section>
  )
}

export default Intro
