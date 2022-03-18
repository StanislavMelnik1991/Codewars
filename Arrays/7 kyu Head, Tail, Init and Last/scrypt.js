let result = []
function head (arr) {
result = arr[0]
//console.log(result + " head")
//console.log(arr)
  return result
}
function tail (arr) {
result = [...arr]
result.shift();
console.log(result)
console.log(arr)
  return result
}
function init (arr) {
result = [...arr]
result.pop();
console.log(result);
console.log(arr);
  return result
}
function last (arr) {
result = arr[arr.length - 1]
//console.log(result + "last")
//console.log(arr)
  return result
}


  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let output = head(val); 
    //
    document.getElementById('str').innerHTML=output;
  };

  butt1.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let output = tail(val); 
    //
    document.getElementById('str').innerHTML=output;
  };
  butt2.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let output = init(val); 
    //
    document.getElementById('str').innerHTML=output;
  };
  butt3.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let output = last(val); 
    //
    document.getElementById('str').innerHTML=output;
  };

  