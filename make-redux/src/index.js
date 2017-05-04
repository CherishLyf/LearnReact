// 我们给 stateChanger 起了一个通用的名字叫 'reducer',
// reducer 是一个纯函数，接受两个参数 state, action
// reducer 不允许有副作用，也不能操作 DOM 和 AJAX，它们做的仅仅是 --- 初始化 state 和计算新的 state
function stateChanger (state, action) {
  if (!state) {
    return {
      title: {
        text: 'React.js 小书',
        color: 'red'
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue'
      }
    }
  }

  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {   // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {    // 构建新的对象返回
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state      // 没有修改
  }
}

// 初始化数据，并且生成更新数据
function createStore (stateChanger) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = stateChanger(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({})  // 初始化 state
  return { getState, dispatch, subscribe }
}

function renderApp (newAppState, oldAppState = {}) {    // 防止 oldAppState没有传入，传入默认参数 {}
  if (newAppState === oldAppState) return // 数据没有变化就不渲染
  console.log('render app ...')
  renderTitle(newAppState.title, oldAppState.title)
  renderContent(newAppState.content, oldAppState.content)
}

function renderTitle (newTitle, oldTitle = {}) {

  if (newTitle === oldTitle) return // 数据没有变化不渲染
  console.log('render title ...')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}

function renderContent (newContent, oldContent = {}) {
  if (newContent === oldContent) return
  console.log('render content ...')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
}


// 创建应用 store
const store = createStore(stateChanger)
let oldState = store.getState()       // 缓存旧的 state
store.subscribe(() => {
  const newState = store.getState()     // 数据可能变化 获取新的 state
  renderApp(newState, oldState)         // 把旧的数据传进去
  oldState = newState

})

renderApp(store.getState())   // 首次渲染页面
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'})    // 修改标题文本
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'})     // 修改标题颜色
