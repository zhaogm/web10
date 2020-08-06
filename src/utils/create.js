import Vue from 'vue'
//村长喊你来搬砖
export default function extend(Component, props) {
  const Ctor = Vue.extend(Component)
  const comp = new Ctor({propsData:props})
  comp.$mount()
  document.body.appendChild(comp.$el)
  comp.remove = () => {
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }

  return comp
}