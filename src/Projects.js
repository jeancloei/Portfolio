import React from "react"
import Thumbnail from './Thumbnail.js'
import './App.css'

function Projects(props){
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="http://wynwatch.herokuapp.com"
        image="/wynwatch.png"
        title="Wynwatch"
        category="Web App"
        />

      <Thumbnail
        link="http://wynstore.herokuapp.com"
        image="/wynstore.png"
        title="Wynstore"
        category="Web App"
        />
    </div>
  )
}

export default Projects;