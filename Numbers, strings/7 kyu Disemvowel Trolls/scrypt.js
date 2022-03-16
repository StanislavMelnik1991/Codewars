function disemvowel(str) {
    str = str.replace(/[euoai]/gi,'');
         return str;
      }
      console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))
      butt.onclick = function() {
        let val = document.getElementById('elem1').value;
        //
        let output = disemvowel(val);
        //
        document.getElementById('str').innerHTML=output;
      };