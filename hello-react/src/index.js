import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//
// class LikeButton extends React.Component {
//
//   constructor () {
//     super()
//     this.state = {
//       name: 'lyf',
//       isLiked: false
//     }
//   }
//
//   handleClickOnLikeButton () {
//     this.setState({
//       isLiked: !this.state.isLiked
//     })
//   }
//
//   render () {
//     const likedText = this.props.likedText || '取消'
//     const unlikedText = this.props.unlikeText || '点赞'
//     return (
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>
//         { this.state.isLiked ? likedText : unlikedText } 👍
//       </button>
//     )
//   }
// }
//
// class Index extends Component {
//   render() {
//     return (
//       <div>
//         <LikeButton likedText="已赞" unlikeText="赞" />
//       </div>
//     )
//   }
// }

// 列表渲染
const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

// class Index extends Component {
//   render () {
//     // const userElements = []       // 保存每个用户渲染后的 jsx 数组
//     // for (let user of users) {
//     //   userElements.push(      // 循环每个用户
//     //     <div>
//     //       <div>姓名: {user.username}</div>
//     //       <div>年龄: {user.age}</div>
//     //       <div>性别: {user.gender}</div>
//     //       <hr />
//     //     </div>
//     //   )
//     // }
//     return (
//       <div>{userElements}</div>
//     )
//   }
// }

class User extends Component {
  render () {
    const { user } = this.props

    return (
      <div>
        <div>姓名：{user.username}</div>
        <div>年龄：{user.age}</div>
        <div>性别：{user.gender}</div>
        <hr />
      </div>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        {users.map((user, i) => <User key={i} user={user} />)}
      </div>
    )
  }
}



ReactDOM.render(
  <Index />,
  document.getElementById('root')
)
