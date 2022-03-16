function explode(s) {
    let arr = s.split('');
    for (let key in arr) {
  arr[key] = arr[key].repeat(arr[key]);
    };
    arr = arr.join('');
    return arr;
  }
  console.log(explode("123"))