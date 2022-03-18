function deepCount(a){
  let tmp = [...a]
  let result = []
  function flatDeep(arr, d = 100) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [''])
                 : arr.slice();
 };
  result = flatDeep(tmp)
  console.log(tmp)
  console.log(result)
return (result.length - 1)
}
  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let arr = [1, 2, [3, 4, [5]]]
    let output = deepCount(arr); 
    //
    document.getElementById('str').innerHTML=output;
  };


  