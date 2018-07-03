'use strict';

function countSameElements(collection) {
  var result=[];
  var ob={};
  var ob2={};
  for(var i=0;i<collection.length;i++) {
    if (ob.hasOwnProperty(collection[i])) {
      ob[collection[i]]++;
    } else {
      if (collection[i].indexOf("[") != -1) {
        var tem=collection[i].slice(2);
        if (ob.hasOwnProperty(collection[i][0])) {
          ob[collection[i][0]] += parseInt(tem);
        } else {
          ob[collection[i][0]] = parseInt(tem);
        }
      } else if (collection[i].indexOf("-") != -1) {
        if (ob.hasOwnProperty(collection[i][0])) {
          ob[collection[i][0]] += parseInt(collection[i][2]);
        } else {
          ob[collection[i][0]] = parseInt(collection[i][2]);
        }
      } else if (collection[i].indexOf(":") != -1) {
        if (ob.hasOwnProperty(collection[i][0])) {
          ob[collection[i][0]] += parseInt(collection[i][2]);
        } else {
          ob[collection[i][0]] = parseInt(collection[i][2]);
        }
      }else{
        ob[collection[i]]=1;
      }
    }
  }
  for(var k in ob){
    ob2.name=k;
    ob2.summary=ob[k];
    result.push(ob2);
    ob2={};
  }
  return result;
}
