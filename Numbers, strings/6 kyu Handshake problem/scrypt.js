function getParticipants(handshakes){
    return Math.ceil((1+(1+(4*2*handshakes))**(1/2))/2);
  }
  
  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let output = getParticipants(val);
    //
    document.getElementById('str').innerHTML=output;
  };