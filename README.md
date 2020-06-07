# 使用 REACT 定义组件快速入门

## 工程结构

```shell
├── components                                    # 组件文件夹
│   ├── XDataList                                 # 数据列表组件
│   │   ├── XDataItem.jsx                         # 数据列表项
│   │   └── XDataList.jsx                         # 数据列表组件
│   └── XInput                                    # 输入框测试组件
│       └── XInput.jsx                            # 数据框组件测试
├── css                                           # 样式文件夹
│   └── XDataList                                 # 数据列表组件样式文件夹
│       ├── XDataItem.scss                        # 数据列表项样式
│       └── XDataList.scss                        # 数据列表样式
├── index.html                                    # 首页
└── index.js                                      # 入口文件
```

## 组件说明

### XDataList 数据列表

使用 XDataList 可以将一个数组对象渲染为一个列表项。

该组件主要涉及如下知识点:

+ 如何定义和使用有状态组件 (XDataList) 和 无状态组件 (XDataItem)
+ 如何定义和使用组件的属性
+ 如何使用动态数据渲染组件
+ 如何在组件中使用样式

## XInput 输入项

使用 XInput 主要用于展示组件的内部数据如何更新及内部数据更新后如何重新反应到画面。

该组件主要涉及如下知识点:

+ 第三方样式 bootstrap 的使用
+ 组件中事件如何使用
+ 组件中的内部数据如何更新
+ input 输入项如何实现双向绑定