import React from 'react'

export default function Techs() {
  return (
    <section className="techs">
      <h1 className="techs__title">Технологии</h1>
      <h2 className="techs__subtitle">7 технологий</h2>
      <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="techs__stack">
        <div className="techs__stack-item">HTML</div>
        <div className="techs__stack-item">CSS</div>
        <div className="techs__stack-item">JS</div>
        <div className="techs__stack-item">React</div>
        <div className="techs__stack-item">Git</div>
        <div className="techs__stack-item">Express.js</div>
        <div className="techs__stack-item">mongoDB</div>
      </div>
    </section>
  )
}


