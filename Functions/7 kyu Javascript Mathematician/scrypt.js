let result = 0
function calculate() {
let args1 = [...calculate.arguments];
 console.log(args1 + "     first")  
  function inside() {
 let args2 = [...inside.arguments];
    result = args2.reduce((previous, current) => {
return (previous + current)});
    result += args1.reduce((previous, current) => {
return (previous + current)});
 console.log(args2 + "     second")  
  console.log(result + "     result")     
    return result;
  }
  return inside;
}


console.log(calculate(2,4)(3,7,1));
  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let output = calculate(val); 
    //
    document.getElementById('str').innerHTML=output;
  };


  