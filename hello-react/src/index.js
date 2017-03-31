import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import InputWidthUserName from './InputWidthUserName'

class Index extends Component {
  render () {
    return (
      <div>
        用户名: <InputWidthUserName />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)
