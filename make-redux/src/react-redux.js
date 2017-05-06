import React, { Component, PropTypes } from 'react'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponet) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    constructor () {
      super()
      this.state = { allProps: {} }
    }

    componentWillMount () {
      const { store } = this.context
      this._updateProps()
      store.subscribe(() => this._updateProps())
    }

    _updateProps () {
      const { store } = this.context
      let stateProps = mapStateToProps ? mapStateToProps(store.getState, this.props) : {}     // 防止 mapStateToProps 没有传入
      let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {}  // 防止 mapDispatchToProps 传入
      this.setState({
        ...stateProps,
        ...dispatchProps,
        ...this.props
      })
    }

    render () {
      return <WrappedComponet {...this.state.allProps} />
    }
  }

  return Connect
}
