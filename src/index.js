





exports.min = function min (array) {
  let minL=array[0];
  for (let i=0; i<array.length; i++)
  {
    if (minL>array[i]){
      minL = array[i];
    }
  }
  if (array.length==0) {
    return 0;
  }
  return minL;
}

exports.max = function max (array) {
  let maxL=array[0];
  for (let i=0; i<array.length; i++)
  {
    if (maxL<array[i]){
      maxL = array[i];
    }
  }
  if (array.length==0) {
    return 0;
  }
  return maxL;
}

exports.avg = function avg (array) {
  let sum = 0;
  for (let i=0; i<array.length; i++){
    sum += array[i];
  }
  if (array.length==0) {
    return 0;
  }
  return (sum/array.length);
}
