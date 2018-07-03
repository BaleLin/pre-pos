'use strict';

function collectSameElements(collectionA, obB) {
  var a=[];
  for(var k=0;k<collectionA.length;k++){
    a.push(collectionA[k].key);
  }
  a=Array.from(new Set(a));
  var b=obB.value;
  var b=Array.from(new Set(b));
  var array=a.concat(b);
  var ob={};
  var result=[];
  for(var i=0;i<array.length;i++){
    if(ob.hasOwnProperty(array[i])){
      ob[array[i]]++;
    }else{
      ob[array[i]]=0;
    }
  }
  for(var j in ob){
    if(ob[j]!=0){
      result.push(j);
    }
  }
  return result;
}
