function numberOfPairs(gloves){
let tmp = [...gloves]
tmp.sort();
console.log(tmp);
let result = 0
for (let i = 1; i < tmp.length; i+=2) { 
 if (tmp[i]===tmp[i-1]){
   result++
 }
 else{i+=-1}
}
console.log(result)
return (result)
}

  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let arr = val.split(', ');
    let output = numberOfPairs(arr); 
    //
    document.getElementById('str').innerHTML=output;
  };


  