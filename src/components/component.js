import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <span className="component-text">{props.text}</span>
      <div className="component-container1">
        <span className="component-text1">{props.text1}</span>
        <span className="component-text2">{props.text2}</span>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text2:
    'There are countless businesses already in existence, so it’s very likely that you won’t be the first person to think of an idea or product. There are countless businesses already in existence, so it’s very likely that you won’t be the first person to think of an idea or product. ',
  text1: 'Finding the best idea',
  text: '01',
}

AppComponent.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default AppComponent
