function createSecretHolder(secret) {
  let obj = {
    result: secret,
    getSecret() { 
      return (this.result);
    },
      setSecret(tmp) { 
      this.result = tmp;
    }
  };
  return obj
  }

console.log(calculate(2,4)(3,7,1));
  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let output = calculate(val); 
    //
    document.getElementById('str').innerHTML=output;
  };


  