function formatDuration (seconds) {
  // Complete this function
  let result = 0;
  const M = 60;
  const H = 60 * M;
  const D = H * 24;
  const Y = D * 365;
  let date = ["year", "day", "haur", "minute", "sec"];
  date[0] = (seconds/Y)
  date[1] = ((seconds%Y)/D);
  date[2] = ((seconds%D)/H);
  date[3] = ((seconds%H)/M);
  date[4] = (seconds%M);
 //year
date[0] = ((date[0]>=1)?Math.floor(date[0]):0);
(date[0] === 0) ? date[0] = "":((date[0]>1) ? date[0] = date[0] + " years":date[0] = date[0] + " year");
//day
date[1] = ((date[1]>=1)?Math.floor(date[1]):0);
(date[1] === 0) ? date[1] = "":((date[1]>1) ? date[1] = date[1] + " days":date[1] = date[1] + " day");
//haur
date[2] = ((date[2]>=1)?Math.floor(date[2]):0);
(date[2] === 0) ? date[2] = "":((date[2]>1) ? date[2] = date[2] + " hours":date[2] = date[2] + " hour");
//minute
date[3] = ((date[3]>=1)?Math.floor(date[3]):0);
(date[3] === 0) ? date[3] = "":((date[3]>1) ? date[3] = date[3] + " minutes":date[3] = date[3] + " minute");
//sec
(date[4] === 0) ? date[4] = "":((date[4]>1) ? date[4] = date[4] + " seconds":date[4] = date[4] + " second");

date = date.filter(Boolean);
(date.length>1)? date[date.length - 2] = date[date.length - 2] +" and "+ date[date.length - 1]:date[date.length-1] = date[date.length-1];
(date.length>1)? date[date.length-1] = "":date[date.length-1] = date[date.length-1];
date = date.filter(Boolean);

result = date.join(', ');
(result === "")?result = "now":false;

  return result
}




  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    let output = formatDuration(val); 
    //
    document.getElementById('str').innerHTML=output;
  };

  