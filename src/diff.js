function diff(oldTree,newTree) {
    let patches = {};
    //第一次比较树的第0个
    let index = 0;
    //递归树 比较后的结果 放到补丁包中
    walk(oldTree,newTree,index,patches);
    return patches;
}
function diffAttr(oldAttrs,newAttrs) {
    let patch = {};
    //判断老的属性和新的属性的关系
    for(let key in oldAttrs){
        if(oldAttrs[key] !== newAttrs[key]){
            patch[key] = newAttrs[key];//有可能是undefined
        }
    }
    for(let key in newAttrs){
        //老节点没有新节点的属性
        if(!oldAttrs.hasOwnProperty(key)){
            patch[key] = newAttrs[key];
        }
    }
    return patch;
}
const ATTRS = 'ATTRS';
function walk(oldNode,newNode,index,patches) {
    let currentPatch = [];
    if(oldNode.type === newNode.type){
        //比较属性是否有更改
       let attrs =  diffAttr(oldNode.props,newNode.props);
       //判断对象有没有值
        if(Object.keys(attrs).length>0){
            currentPatch.push({type:ATTRS,attrs})
        }
    }
    if(currentPatch.length > 0){//当前元素确实有补丁
        //将元素和补丁对应起来 放到大补丁包中
        patches[index] = currentPatch;
    }


}
export default diff;