'use strict';
function collectSameElements(collectionA, objectB) {

    const A = [];//定义一个用来比较的数组
    var k = 0;
    for (var i = 0; i < collectionA.length; i++) {
      for (var j = 0; j < objectB.value.length; j++) {
        if(collectionA[i] === objectB.value[j]){
          A[k++] = collectionA[i];
        }
      }
    }
    return A;
}
