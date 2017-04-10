import React from 'react'

export class Home extends React.Component {
  constructor (props) {
    super()

    this.state = {
      age: props.user.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    }
  }

  onMakeOlder () {
    this.setState({
      age: this.state.age += 3
    })

    setTimeout( () => {
      this.setState({
        status: 1
      })
    }, 3000)
  }

  onChangeLink () {
    this.props.changeLink(this.state.homeLink)
  }

  onHandleChange (event) {
    this.setState({
      homeLink: event.target.value
    })
  }

  render () {
    return(
      <div>
        <hr/>
        <p>Your name is { this.props.user.name }, your age is { this.state.age }</p>
        <p>Status: { this.state.status } </p>
        <div>
          <h4>Hobbies</h4>
          <ul>
            { this.props.user.hobbies.map( (hobby, index) => <li key={index}>{hobby}</li>) }
          </ul>
        </div>
        <button onClick={ () => this.onMakeOlder() } className="btn btn-primary">Make me older!</button>
        <hr/>
        <input type="text"
          value={ this.state.homeLink }
          onChange={ (event) => this.onHandleChange(event) }
        />
        <button onClick={ this.onChangeLink.bind(this) } className="btn btn-default">Change Header Link</button>
        <button onClick={ this.props.greet } className="btn btn-default">Greet</button>
      </div>
    )
  }
}

Home.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number
  }),
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
}