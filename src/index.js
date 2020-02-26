import {createElement,render,renderDom} from './element'
import diff from './diff'
import patch from './patch'
let vertualDom = createElement('ul',{class:'list'},[
    createElement('li',{class:'item'},['a']),
    createElement('li',{class:'item'},['b']),
    createElement('li',{class:'item'},['c'])
]);
let vertualDom2 = createElement('ul',{class:'list-group'},[
    createElement('li',{class:'item'},['1']),
    createElement('li',{class:'item'},['b']),
    createElement('div',{class:'item'},['3'])
]);

//存在小问题 如果平级元素有互换 那会导致重新渲染
//新增节点也不会被更新
//index

let el = render(vertualDom);
renderDom(el,window.root);
let patches = diff(vertualDom,vertualDom2);
//给元素打补丁 重新更新视图
patch(el,patches);


//将虚拟dom转化成了真实dom渲染到页面上
// let el = render(vertualDom);
// renderDom(el,window.root);
console.log(el);
console.log(vertualDom);

//DOM DIFF 比价两个虚拟DOM区别 比较两个对象的区别
// dom diff 作用 根据两个虚拟对象创建出补丁，描述下改变的内容，
//将这个补丁用来更新dom


