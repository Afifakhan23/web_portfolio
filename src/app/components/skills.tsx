import React from 'react'
import skillcss from '../styles/skills.module.css'

const Skills = () => {
  return (
    <>
      <div className={skillcss.container}>
        <h2 className={skillcss.h2}>My Skills</h2>
        <ul className={skillcss.skills}>
            <li className={skillcss.skill1}>HTML CSS</li>
            <li className={skillcss.skill2}>Javascript</li>
            <li className={skillcss.skill3}>Next.js</li>
            <li className={skillcss.skill4}>tailwindCSS</li>
            <li className={skillcss.skill5}>mySQL</li>
        </ul>
      </div>
    </>
  )
}

export default Skills