module.exports = {
  bubble(arr) {
    for (let j = 1; j <= arr.length; j++) {

      for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          let moveNum = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = moveNum
        }
        console.log('first forloop', arr)

      }
      console.log('second forloop', arr)
    }
    return arr
  }
}
