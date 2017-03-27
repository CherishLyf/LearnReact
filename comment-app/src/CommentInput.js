import React, { Component, PropTypes } from 'react'


class CommentInput extends Component {

  // prop 类型检验
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor () {
    super ()
    this.state = {
      username: '',
      content: ''
    }
  }

  componentWillMount () {
    this._loadUsername()
  }

  // 加载用户名
  _loadUsername () {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({
        username
      })
    }
  }

  componentDidMount () {
    this.textarea.focus()
  }

  // 改变用户名
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }
  // 改变用户名
  _saveUsername (username) {
    localStorage.setItem('username', username)
  }
  // 监听离开输入用户名框
  handleUsernameBlur (event) {
    this._saveUsername(event.target.value)
  }
  // 改变评论
  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }
  // 发布评论
  handleSubmit () {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content})
    }
    this.setState({content: ''})
  }

  render () {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={ this.state.username }
              onBlur={ this.handleUsernameBlur.bind(this) }
              onChange={ this.handleUsernameChange.bind(this) } />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              ref={(textarea) => {this.textarea = textarea}}
              value={ this.state.content }
              onChange={ this.handleContentChange.bind(this) } />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput;
