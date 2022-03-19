function getLengthOfMissingArray(arrayOfArrays) {
  let result = "";
  if ((arrayOfArrays == null)||(arrayOfArrays.length == 0)||arrayOfArrays.includes(null)){
    return 0;
  };
   let tmp = [...arrayOfArrays]
 tmp.sort((a, b) => a.length - b.length);
 if (tmp[0].length===0){
  return 0;
};
console.log(result)
for (let i = 1;i<(tmp.length);i++) {
  if ((tmp[i].length - tmp[i - 1].length)>1) {
    
    console.log(tmp)
    console.log(i)
    return (tmp[i].length-1);
  }
};
  }


  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let arr = [ [], [ 1, 2, 2 ] ];
    let output = getLengthOfMissingArray(arr); 
    //
    document.getElementById('str').innerHTML=output;
  };


  