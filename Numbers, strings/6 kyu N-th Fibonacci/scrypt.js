function nthFibo(n) {
  let result = ((((1+(5**0.5))/2)**(n-1))-(((1-(5**0.5))/2)**(n-1)))/(5**0.5);

  return Math.round(result);
}
  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let output = nthFibo(val);
    //
    document.getElementById('str').innerHTML=output;
  };

  