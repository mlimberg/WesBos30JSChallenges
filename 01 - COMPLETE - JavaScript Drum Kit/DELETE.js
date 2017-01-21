function nextItem(xs, item) {
  let next;
  if(Array.isArray(xs) === false) {
    xs = xs.split('')
  }
  if(xs.includes(item) === false) { next = undefined }
  xs.forEach((thing, i, arr) => {
    if(thing === item && i < arr.length - 1) {
     next = arr[i + 1]
   } else { next = undefined}
  })
  return next
}
