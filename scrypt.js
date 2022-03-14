function getParticipants(handshakes){

  return Math.ceil((1+(1+(4*2*handshakes))**(1/2))/2)
  // ...
}
console.log(getParticipants(6))