动手实现 Redux

## redux 总结

`createStore` 现在可以直接使用了，套路就是:

```
// 定义一个 reducer
function reducer (state, action) {
   /* 初始化 state 和 switch case */
}

// 生成 store
const store = createStore(reducer)

// 监听数据的变化重新渲染页面
store.subscribe(() => renderApp(store.getState()))

// 首次渲染页面
renderApp(store.getState())

// 后面可以随意 dispatch 页面自动更新
store.dispatch(...)
```


例子全部来源于 [React 小书](http://react.huziketang.com/)
