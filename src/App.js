import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Projects from './Projects.js'
import Articles from './Articles.js'
import About from './About.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops'
import './App.css'



function App() {
  return (
    <BrowserRouter>
        <div className="navigation">
            <img className="navbar-r" src="./logo1.png" />
          <div className="navbar-l">
            <Navbar bg="dark" variant="dark">
              <Nav.Link href="/">Projects</Nav.Link>
              <Nav.Link href="/articles">Articles</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
            </Navbar>
          </div>
        </div>
        <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }}>
          { props => (
            <div  className="App" style={ props }>
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />
      </div>
      )}
      </Spring>
    </BrowserRouter>
  )
}

export default App;
