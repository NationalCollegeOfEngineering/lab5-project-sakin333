import React, { useEffect, useState } from 'react'
import { proSkills } from './data'

const ProfessionalSkills = ({ id, title, percentage}) => {
  const [proStyle, setProStyle] = useState()

  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        background: `conic-gradient(rgb(220,20,60) ${percentage * 3.6}deg, rgba(0, 0, 0, 0.1) 0deg)`,
      }
      console.log(newStyle)
      setProStyle(newStyle)
    }, 1000)
  },[percentage])

 
  return (
      <div className="proskills__grid">
        <div className="skills__box cirular">
          <div className="skills__group group">
            <div className="circular-bar">
              <div className="inner__circle" style={proStyle}>
                <span className="percent"></span>
              </div>
            </div>
            <span className="title__pro">{title}</span>
          </div>
        </div>
      </div>
  )
}

export default ProfessionalSkills