function recycle(array) {
  let order = {     
    paper: [],  
    glass: [],
    organic: [],
    plastic: []
  };
  let result = []
  for (let key in array) {
    order[array[key].material][key] = array[key].type;
    array[key].secondMaterial != undefined ? order[array[key].secondMaterial][key] = array[key].type :false
  }
  result[0] = order.paper.filter(Boolean);
  result[1] = order.glass.filter(Boolean);
  result[2] = order.organic.filter(Boolean);
  result[3] = order.plastic.filter(Boolean);
  console.log(order)
console.log(result)
  return result
}


  butt.onclick = function() {
    let val = document.getElementById('elem1').value;
    //
    val = [
      {type: 'rotten apples', material: 'organic'},
      {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
      {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
      {type: 'amazon box', material: 'paper'},
      {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
    ];
     let output = recycle(val); 
    //
    document.getElementById('str').innerHTML=output;
  };


  