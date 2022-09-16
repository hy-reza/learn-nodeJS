const fs = require('fs')

const readStream = fs.createReadStream('./docs/streamFile.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/writeStream.txt')

// readStream.on('data', (chunk) => {
//   console.info('----New Chunk----');
//   console.info(chunk);
//   writeStream.write(chunk);
// })



//do the same thing
readStream.pipe(writeStream)