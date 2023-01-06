import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  letterCount = event => {
    const {value} = event.target
    this.setState({count: value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="details-card">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-card">
            <label htmlFor="input" className="label">
              Enter the phrase
            </label>
            <input
              className="input"
              type="input"
              id="input"
              placeholder="Enter the phrase"
              onChange={this.letterCount}
            />
          </div>

          <p className="name-count">No.of letters: {count.length}</p>
        </div>
        <div className="img-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
