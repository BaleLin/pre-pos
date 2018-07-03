'use strict';


function countSameElements(collection) {
    var ob1 = {};
    var result = [];
    for(var i=0;i<collection.length;i++)
  {
    if (collection[i].length>1&&!(ob1.hasOwnProperty(collection[i]))){
      ob1[collection[i][0]]=parseInt(collection[i][2]);
    }
    else if(collection[i].length==1&&ob1.hasOwnProperty(collection[i])){
      ob1[collection[i]]++;
    }
else{
  ob1[collection[i]] = 1;
}
  }
for(var k in ob1){
  var ob2 = {};
  ob2.key=k;
  ob2.count=ob1[k];
  result.push(ob2);
}
return result;
}
