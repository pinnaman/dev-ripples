import React from 'react'

// Stateless component
export const Header = (props) => {
  return(
    <nav className="navbar navbar-static-top navbar-dark bg-inverse">
      <a className="navbar-brand" href="#">ReactJS Basics</a>
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">{ props.homeLink }<span className="sr-only">(current)</span></a>
        </li>
      </ul>
    </nav>
  )
}

