function sortByBit(arr) {
  // your solution here
  let result = arr

result.sort((a, b) => (b-a));
  for (let i = 0; (i < result.length); i++) {
result[i] = parseInt(result[i]).toString(2);
  }

//result.sort((a, b) => (a.split('').reduce((a1,b1) => (parseInt(a1)+parseInt(b1)))) - (b.split('').reduce((a1,b1) => (parseInt(a1)+parseInt(b1)))));
result.sort(function(a,b) {
if ((a.split('').reduce((a1,b1) => (parseInt(a1)+parseInt(b1)))) == (b.split('').reduce((a1,b1) => (parseInt(a1)+parseInt(b1))))) {
  return (a - b);
}
else {
  return ((a.split('').reduce((a1,b1) => (parseInt(a1)+parseInt(b1)))) - (b.split('').reduce((a1,b1) => (parseInt(a1)+parseInt(b1)))));
}


})
console.log(arr);
for (let i = 0; (i < result.length); i++) {
  result[i] = parseInt(result[i],2);
    }
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


  