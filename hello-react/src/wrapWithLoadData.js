import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

export default (WrappedComponent, name) => {
  class NewComponet extends Component {

    constructor () {
      super()
      this.state = { data: null }
    }

    componentWillMount() {
      let data = localStorage.getItem(name)
      this.setState({data})
    }

    render () {
      return <WrappedComponent data={this.state.data} />
    }
  }
  return NewComponet
}
