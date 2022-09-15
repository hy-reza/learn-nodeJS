// console.log(global);

const interval = setInterval(() => {
  console.log('appears every 1 second')
}, 1000)

setTimeout(() => {
  console.log('appear after 3 second')
  clearInterval(interval)
}, 5000)  


console.info(__dirname)
console.info(__filename)