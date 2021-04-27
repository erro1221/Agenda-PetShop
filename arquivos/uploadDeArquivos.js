const fs = require('fs')

fs.readFile('../assets', (erro, buffer) => {
 console.log('imagem foi bufferizada')
 console.log(buffer)

 fs.writeFile('./assets', buffer, (erro))
    
})
