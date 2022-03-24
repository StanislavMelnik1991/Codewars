function myLanguages(results) {
console.log(results)
keysSorted = Object.keys(results).sort(function(a,b){return results[b]-results[a]})
console.log(keysSorted)
for (let key in results) {
  if (results[key]<60){
    keysSorted.pop();
  }
 }
  return keysSorted 
}


  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    val = {"Java" : 10, "Ruby" : 80, "Python" : 65}
    let output = myLanguages(val); 
    //
    document.getElementById('str').innerHTML=output;
  };


  