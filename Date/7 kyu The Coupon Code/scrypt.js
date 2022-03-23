function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let curData = new Date(currentDate);
  let expData = new Date(expirationDate);
  console.log(curData + "   " + enteredCode)
  console.log(expData + "   " + correctCode)
let result = (curData-expData)
  console.log(result)

  return (((curData-expData)<86400000)&&(enteredCode === correctCode)?true:false)
}




  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    let val2 = document.getElementById('elem2').value;
    let val3 = document.getElementById('elem3').value;
    let val4 = document.getElementById('elem4').value;
    //
    let output = checkCoupon(val,val2,val3,val4); 
    //
    document.getElementById('str').innerHTML=output;
  };

  