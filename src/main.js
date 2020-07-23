import * as components from "./components"

const ImpVisThree={
  install(Vue){
    for(const componentName in components){
      const component = components[componentName];
      Vue.component(component.name,component);
    }
  }
}
export default ImpVisThree;
if(typeof window !== 'undefined' && window.Vue){
  window.Vue.use(ImpVisThree);
}