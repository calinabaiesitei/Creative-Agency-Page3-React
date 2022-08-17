import React from 'react'

import PropTypes from 'prop-types'

import './text-container.css'

const TextContainer = (props) => {
  return (
    <div className="text-container-text-container">
      <span className="text-container-text">{props.text}</span>
      <h2 className="text-container-text1 heading2">
        <span>Explore our portfolio</span>
      </h2>
      <span className="text-container-text3">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation.
        </span>
      </span>
      <button className="button-secondary button-lg button">
        {props.primary}
      </button>
    </div>
  )
}

TextContainer.defaultProps = {
  primary: 'See all projects',
  text: 'our work',
}

TextContainer.propTypes = {
  primary: PropTypes.string,
  text: PropTypes.string,
}

export default TextContainer
