function unluckyDays(year){
  //your code here
  let curData
  let month = 0
  let result = 0
  for (let i = 0; i<12;i++){
    month++ 
    curData = new Date(year+"-"+month+"-"+"13");
if (curData.getDay()===5){
  result++;
}
  }
return result;
} 



  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let output = unluckyDays(val); 
    //
    document.getElementById('str').innerHTML=output;
  };

  