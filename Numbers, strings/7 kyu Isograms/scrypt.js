function isIsogram(str){
    //...
var lowerStr = str.toLowerCase()
var obj = lowerStr.split('').reduce((o, v, i) => { o[v] = v; return o; }, {});
var arrUnique = Object.keys(obj);
var output = arrUnique.join('')


//console.log('input: ' + lowerStr);
//console.log('output: ' + output);
return (lowerStr === output)? true:false;
  }

console.log(isIsogram("isogramMMMMM"))
butt.onclick = function() {
  let val = document.getElementById('elem1').value;
  //
  let output = isIsogram(val);
  //
  document.getElementById('str').innerHTML=output;
};