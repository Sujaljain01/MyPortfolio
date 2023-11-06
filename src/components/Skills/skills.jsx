import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
function Skills() {
  return ( 
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillPara">I'm a skilled Web Developer with Zero experience in creating visual and User friendly designs,Web Developer with Zero experience in creating visual and User friendly designs.Web Developer with Zero experience in creating visual and User friendly designs</span>
        <div className="skillBars">
            <div className="skillbar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX DESIGN</h2>
                    <p>content for er with Zero experience in creating visual and User friendly  </p>
                </div>
            </div>
            <div className="skillbar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>WEB DESIGN</h2>
                    <p>content for er with Zero experience in creating visual and User friendly  </p>
                </div>
            </div>
            <div className="skillbar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>APP DESIGN</h2>
                    <p>content for er with Zero experience in creating visual and User friendly  </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
