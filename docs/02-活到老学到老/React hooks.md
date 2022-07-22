# React hooks

***

## memo用法 ：是否保持原状态

当组件的属性前后没有改变时，不进行重渲染

memo(React.Element, 可选函数属性)

```javascript
import {  equals } from 'ramda'
export const Icon = memo((props: IconProps) => {
  let {
    style: styleOverride,
    preset = 'default',
    icon,
    containerStyle,
    size = 'default',
    color,
    onClick = null,
    activeOpacity,
    ...rest
  } = props

  return (
    <View></View>
  )
}, (pre,next) => equals(pre,next) )
```

> 第二个参数为函数，返回一个boolean，为true则不重渲染，false则重渲染

从父组件传入的props要搭配useCallback,useMemo对函数和值进行缓存，防止子组件进行不必要的渲染
