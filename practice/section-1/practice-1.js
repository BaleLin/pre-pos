'use strict';


  'use strict';

  function collectSameElements(collectionA, collectionB) {

    const A = [];
    var index = 0;//下标
    for (var i = 0; i < collectionA.length; i++) {
      for (var j = 0; j < collectionB.length; j++) {
        if (collectionA[i] === collectionB[j]) {
          A[index++] = collectionA[i];
        }
      }
    }

    return A;

}
