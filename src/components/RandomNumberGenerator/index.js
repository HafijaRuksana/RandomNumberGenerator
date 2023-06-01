// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  getRandomNumber = () => {
    this.setState({randomNumber: Math.round(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="container">
        <div className="content-card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.getRandomNumber}
          >
            Generate
          </button>
          <p className="number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
