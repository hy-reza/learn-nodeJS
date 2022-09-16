const fs = require('fs')

//readinf files
fs.readFile('./docs/readme.txt', (err, data) => {
  err ? console.error(err) : console.log(data.toString())
})
const data = fs.readFileSync('./docs/readme.txt')
console.info(data.toString());

//writing files
fs.writeFile('./docs/writtenFile.txt', 'this is the new written file text content', (err) => {
  return err ? console.error(err) : console.info('file successfully written')
})

fs.writeFileSync('./docs/writtenFile.txt', 'new cuy')

//directory

!fs.existsSync() ? 
fs.mkdir('./assets', (err) => err ? console.error(err) : console.info("directory successfully created")) :
fs.rmdir('./assets', (err) => err ? console.error(err) : console.info("directory successfully deleted"))


//deleted files
fs.existsSync('./docs/deleteMe.txt') ? fs.unlink('./docs/deleteMe.txt', (err) => {err ? console.error(err) : console.info('file successfully deleted')}) : fs.writeFileSync('./docs/deleteMe.txt', 'delete me !')