function highAndLow(numbers){
    // ...
let arr = [];
arr = numbers.split(" ");
let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr)
return(max + " " + min)
  }
console.log(highAndLow("1 2 3 4 5"));
butt.onclick = function() {
  let val = document.getElementById('elem1').value;
  //
  let output = highAndLow(val);
  //
  document.getElementById('str').innerHTML=output;
};