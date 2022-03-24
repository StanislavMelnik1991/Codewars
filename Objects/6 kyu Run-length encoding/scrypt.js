var runLengthEncoding = function(str){
let tmp = str.split('')
let result = []
for (var i = 0; i<(tmp.length);i++){
  result[i] = [1,tmp[i]];
  function controller(){
if (tmp[i+1]===tmp[i]){
result[i][0]++;
tmp.splice(i+1,1);
console.log('tmp  '+tmp+'  calc  ');
controller();
}}
  controller()
}
console.log('result  '+result)
  return result
}


  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
     let output = runLengthEncoding(val); 
    //
    document.getElementById('str').innerHTML=output;
  };


  