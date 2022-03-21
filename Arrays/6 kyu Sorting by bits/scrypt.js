function sortByBit(arr) {
  // your solution here
  let result = arr
  for (let i = 0; (i < result.length); i++) {
result[i] = +parseInt(result[i]).toString(2);
  }

  
console.log(result);
console.log(arr);
return result
}

  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let arr = val.split(', ');
    let output = sortByBit(arr); 
    //
    document.getElementById('str').innerHTML=output;
  };


  