'use strict';

function createUpdatedCollection(collectionA, collectionB) {
  var result=[];
  var collection={};
  var collection2={};
  for(var i=0;i<collectionA.length;i++){
    if(collection.hasOwnProperty(collectionA[i])){
      collection[collectionA[i]]++;
    }else{
      collection[collectionA[i]]=1;
    }
  }
  for(var j in collection){
    collection2.key=j;
    collection2.count=collection[j];
    result.push(collection2);
    collection2={};
  }
  var collectionB=collectionB.value;
  for(var i=0;i<collectionB.length;i++){
    for(var j=0;j<result.length;j++){
      if(result[j].key == collectionB[i]){
        if(result[j].count >= 3){
          var perthree=parseInt(result[j].count/3);
          result[j].count -= perthree;
        }else {
          result[j].count--;
        }
        break;
      }
    }
  }
  return result;
}
