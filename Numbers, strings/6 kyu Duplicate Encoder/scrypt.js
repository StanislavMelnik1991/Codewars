function duplicateEncode(word){
let result = "" 
let lowerStr = word.toLowerCase()
for (let i = 0; i < lowerStr.length; i++) {
result += lowerStr.split(lowerStr[i]).length<=2?"(":")";
}
    return result;
}
  
  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let output = duplicateEncode(val);
    //
    document.getElementById('str').innerHTML=output;
  };

  