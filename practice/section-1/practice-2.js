'use strict';



function collectSameElements(collectionA, collectionB) {

  const A = [];//定义一个用来与collectionA的数组
  var index = 0;//下标定义
  for (var a = 0; a< collectionA.length; a++) {
    for (var b = 0; b < collectionB.length; b++) {
      for (var ins = 0; ins < collectionB[b].length; ins++) {
        if (collectionB[b][ins] === collectionA[a]) {
          A[index++] = collectionA[a];
        }
      }
    }
  }
  return A;
}
