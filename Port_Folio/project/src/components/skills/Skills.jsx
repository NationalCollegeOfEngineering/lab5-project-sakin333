import React from 'react'
import './Skills.css'
import ProfessionalSkills from './ProfessionalSkills'
import Parent1 from './Parent1'
// import Parent2 from './parent2'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Parent1 />

            {/* <Parent2 /> */}
        </div>
    </section>
  )
}

export default Skills