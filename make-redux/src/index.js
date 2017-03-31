const appState = {
  title: {
    text: 'React.js 小书',
    color: 'red'
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}

function renderApp (appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle (title) {
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent (content) {
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}

// 负责修改数据
function stateChanger (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      state.title.color = action.color
      break
    default:
      break
  }
}

// 构建 store , state 表示应用状态的 state, stateChanger 表示 应用状态会根据 action 发生什么变化
function createStore (state, stateChanger) {
  const getState = () => state
  const dispatch = (action) => stateChanger(state, action)
  return { getState, dispatch }
}

// 创建应用 store
const store = createStore(appState, stateChanger)

renderApp(store.getState())   // 首次渲染页面
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'})    // 修改标题文本
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'})     // 修改标题颜色
renderApp(store.getState())   // 把新的数据渲染到页面
