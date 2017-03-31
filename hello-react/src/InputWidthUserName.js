import React, { Component } from 'react'
import wrapWithUserName from './wrapWithLoadData'

class InputWidthUserName extends Component {
  static defaultProps = {
    data: ''
  }

  render () {
    return <input value={this.props.data} />
  }
}

InputWidthUserName = wrapWithUserName(InputWidthUserName, 'username')

export default InputWidthUserName
