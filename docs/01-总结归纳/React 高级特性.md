# React 高级特性

## 非受控组件

1.  必须手动操作DOM元素，setState实现不了的

2.  如文件上传\<input type="file" />

3.  某些富文本编辑器，需要传入DOM元素

```javascript
class App extends Component {
  constructor(){
    state = {
      val: '123'
    }
    this.inputRef = React.crreateRef()
  }
  show = () => {
    console.log(this.inpuRef.current.value)
  }
  render(){
    return <>
      <input defaultValue={this.state.val} ref={this.inputRef} />
      <button  onClick={show}>
    </>
  }
}
```

上面的input输入并不会引起state中val的变化，val只是作为defaultValue使用，input输入内容后，点击通过this.inputRef 可以拿到输入框中的值



## Protals 传送门

`ReactDOM.createProtal(component, container)` ,将内容component渲染到指定容器container中

如弹框model



## Context

### 第一步： 创建Context

```javascript
const ThemeContext = React.createContext('')
```

### 第二步：提供容器Provider

```javascript
<ThemeContext.Provider value={''} children={children} />
```

### 第三步：消费Context

1.  类组件 要将contextType 挂载在该组件上，然后组件内通过this.context拿到Provider中的值

```javascript
class ThemeButto extends Component {
  render(){
    const value = this.context
  }
}
ThemeButton.contextType = ThemeContext
```

2\. 类组件第二种写法 static contextType

```javascript
class ThemeButto extends Component {
  static contextType = ThemeContext
  render(){
    const value = this.context
  }
}
```

3\. 通过Consumer 拿到

```html
<ThemeContext.Consumer>{value => (<>{value}</>)}</ThemeContext.Consumer>
```



## 异步组件

通过`React.lazy(() => import('./demo.js') ) ` 的方式异步加载组件

```react&#x20;jsx
const Demo = React.lazy( () => import('./demo.js') )
```

也可以配合React.suspense 进行过渡处理

```react&#x20;jsx
const Demo = React.lazy( () => import('./demo.js') )

render(){
  return (
    <React.suspense fallback={<Loading />}><Demo /></React.suspense>
  )
}
```



## 性能优化

### shouldComponentUpdate

```javascript
shouldComponentUpdate(nextProps, nextState){
  return false/true  // 默认返回true
}
```

shouldComponentUpdate 需要配合不可变值使用，

不可变值：setState的值必须是跟之前的值不一样的值

```react&#x20;jsx
state = {
  a: [1,2,3]
}
this.state.a.push(4)
this.setState({a: this.state.a}) // ❌错误写法
```

如果用了以上写法，a 的引用没有变，set之前就将值改了，前后是一个值，如果将值传给另一个组件，该组件中 shouldComponentUpdate 函数中如果用lodash的isEqual比对nextProps 和 props 的a 值，则会返回false，不会更新

## HOC

high order component 高阶组件

本质就是一接收组件并返回组件的函数，内部会有一些逻辑，给接收的组件传递一些新的props值

## render props

和HOC有区别，它是个组件并接收个函数，在组件内部通过调用接收的函数，将组件内部的值传递出去，外层就可以用回调接收到值





