import React, { Component } from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentInput'

export default class CommentApp extends Component {
  render () {
    return (
      <div className="wrapper">
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}
