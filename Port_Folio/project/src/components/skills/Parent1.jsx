import React from 'react'
import Frontend from './Frontend'
import { skills } from './data'

const Parent1 = () => {
  return (
    <div className="skills__content">
        <h1 className="skills__title">Technical Skills</h1>
        {skills.map((skill, index) => (
            <Frontend 
                id={skill.id}
                title={skill.title}
                percentage={skill.percentage}
            />
        ))}
    </div>
  )
}

export default Parent1