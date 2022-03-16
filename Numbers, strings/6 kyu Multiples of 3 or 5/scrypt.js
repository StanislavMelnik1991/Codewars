function solution(number){
let result = 0
for (let i = 3; i < number; i++) {
if (i%3 > 0){
  if (i%5 > 0){
  }
  else {
    result += i;
  }
}
else{
  result += i;  
}
  }
  return result
}
  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let output = solution(val);
    //
    document.getElementById('str').innerHTML=output;
  };

  