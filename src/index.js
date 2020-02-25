import {createElement,render,renderDom} from './element'
let vertualDom = createElement('ul',{class:'list'},[
    createElement('li',{class:'item'},['a']),
    createElement('li',{class:'item'},['b']),
    createElement('li',{class:'item'},['c'])
]);
//将虚拟dom转化成了真实dom渲染到页面上
let el = render(vertualDom);
renderDom(el,window.root);
console.log(el);
console.log(vertualDom);

//DOM DIFF 比价两个虚拟DOM区别 比较两个对象的区别



