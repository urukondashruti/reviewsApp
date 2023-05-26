import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  onDecrement = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onIncrement = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    if (count < reviewsList.length - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const value1 = reviewsList[count]

    const {imgUrl, username, companyName, description} = value1

    return (
      <div className="back">
        <h1>Reviews</h1>
        <button
          type="button"
          className="button"
          data-testId="leftArrow"
          onClick={this.onDecrement}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            data-testId="leftArrow"
            alt="left arrow"
          />
        </button>
        <div className="con">
          <img src={imgUrl} alt={username} />
          <p>{username}</p>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>
        <button
          type="button"
          className="button"
          data-testId="rightArrow"
          onClick={this.onIncrement}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            data-testId="rightArrow"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
