import React from 'react'

export default function Techs() {
  return (
    <article className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__stack">
        <li className="techs__stack-item">HTML</li>
        <li className="techs__stack-item">CSS</li>
        <li className="techs__stack-item">JS</li>
        <li className="techs__stack-item">React</li>
        <li className="techs__stack-item">Git</li>
        <li className="techs__stack-item">Express.js</li>
        <li className="techs__stack-item">mongoDB</li>
      </ul>
    </article>
  )
}


