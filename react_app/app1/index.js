import React from 'react'
import { render } from 'react-dom'

import { Header } from "./components/Header"
import { Home } from "./components/Home"

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      homeLink: 'Header'
    } 
  }

  onGreet () {
    alert("Hello!")
  }

  onChangeLinkName (newName) {
    this.setState({
      homeLink: newName
    })
  }

  render() {
    let user = {
      name: "Ananya",
      initialAge: 9,
      hobbies: ["Sports", "Ayy Lmao", "Reading"]
    }
    return (
      <div className="container">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <Home
            user={ user }
            greet={ this.onGreet }
            changeLink={ this.onChangeLinkName.bind(this) }
            initialLinkName={ this.state.homeLink }
          />
        </div>
        
      </div>
    )
  }
}

render(<App />, window.document.getElementById('app'))