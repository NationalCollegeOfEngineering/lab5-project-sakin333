import React from 'react'
import ProfessionalSkills from './ProfessionalSkills'
import { proSkills } from './data'

const Parent2 = () => {
  return (
    <div className="skills__content">
        <h1 className="skills__title">Professional Skills</h1>
        {proSkills.map((proSkill, index) => (
                <ProfessionalSkills
                    id={proSkill.id}
                    title={proSkill.title}
                    percentage={proSkill.percentage}
                />
        ))}
    </div>
  )
}

export default Parent2