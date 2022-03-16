function explode(s) {
    let arr = s.split('');
    for (let key in arr) {
  arr[key] = arr[key].repeat(arr[key]);
    };
    arr = arr.join('');
    return arr;
  }


  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    let output = explode(val);
    document.getElementById('str').innerHTML=output;
  };