import Vue from 'vue'

// 传入一个组件配置
// 创建它的实例，并且将它挂载到body上
// 返回组件实例
export default function create(Component, props) {
  // 实例创建
  // 作业：使用extend方式创建组件实例并挂载
  // extend方法返回的组件构造函数
  const Ctor = Vue.extend(Component)
  const comp = new Ctor({propsdata:props})
  comp.$mount()
  document.body.appendChild(comp.$el)
  comp.remove = () => {
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }

  return comp
}