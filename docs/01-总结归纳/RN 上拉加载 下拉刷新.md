# RN 上拉加载 下拉刷新hook

```javascript
type ParamsType = {
  fetchFunc: (data: any) => Promise<any> // 加载函数
  params: { [key: string]: any } // 传给加载函数的参数
  pagesize?: number // 每页数量
  otherParam?: any[] // 触发重新加载的条件
}
export const useFetch = (useFetchParams: ParamsType) => {
  const { fetchFunc, params, pagesize, otherParam = [] } = useFetchParams

  const [pageno, setPageno] = useState(0)
  const [refreshState, setRefreshState] = useState(RefreshState.Idle)

  const pageSet = useRef({ pagesize: pagesize || 10, total: 0, pageno: 0 }).current
  const dataList = useRef([])
  const [, setUpdate] = useState(false)
  const refreshPage = () => setUpdate(pre => !pre)

  const [isFetch, setIsFetch] = useState(true)

  // 条件改变  pageno置0
  useEffect(() => {
    dataList.current = []
    // 初次进入不改变加载条件
    if (pageno) setPageno(pre => ++pre)
    pageSet.pageno = 0
    dataList.current = []
    refreshPage()
  }, otherParam)

  useEffect(() => {
    console.log("** --- page --- **", pageno, pageSet) // wsp-log
    const pageParams = {
      pageno: pageSet.pageno | 0,
      pagesize: pagesize || pageSet.pagesize,
    }
    fetchFunc({ ...params, ...pageParams }).then(res => {
      setIsFetch(false)
      const { data, pageno, pagesize, total } = res

      if (pageno > 0) dataList.current.push(...data)
      else dataList.current = data

      pageSet.total = total
      pageSet.pageno = pageno
      pageSet.pagesize = pagesize
      setRefreshState(RefreshState.Idle)
      refreshPage()
    })
  }, [pageno])

  // 下拉刷新
  const onHeaderRefresh = () => {
    console.log("下拉刷新")

    setRefreshState(RefreshState.HeaderRefreshing)
    pageSet.pageno = 0
    setPageno(pre => pre + 1)
  }

  // 上拉加载
  const onFooterRefresh = () => {
    console.log("上拉加载")
    if (dataList.current.length >= pageSet.total) {
      setRefreshState(RefreshState.NoMoreData)
      return
    }
    setRefreshState(RefreshState.FooterRefreshing)
    pageSet.pageno += 1
    setPageno(pre => pre + 1)
  }

  return {
    pageno: pageSet.pageno,
    pagesize: pageSet.pagesize,
    total: pageSet.total,
    refreshPage,
    dataList: dataList.current,
    refreshState,
    onHeaderRefresh,
    onFooterRefresh,
    isFetch,
  }
}

```

## 使用

```javascript
const {
    dataList,
    refreshState,
    refreshPage,
    onHeaderRefresh,
    onFooterRefresh,
    isFetch,
  } = useFetch({
    fetchFunc: task.getTemplateTaskList, // 返回promise的请求
    params: {
      ...appDeptIds,
      op: 2,
    },
    otherParam: [refresTable],
  })
```
