'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var ob1 = {};
  var result = [];
  for(var i=0;i<collectionA.length;i++)
  {
    for(var j=0;j<(objectB.value).length;j++){
      var arr =objectB.value;
      if(collectionA[i].key==arr[j]){
       collectionA[i].count=collectionA[i].count-(parseInt((collectionA[i].count)/3));
      }
    }
  }
  return collectionA;
}
