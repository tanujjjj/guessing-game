const express = require('express')
const path=require('path')
const app = express()
const port = process.env.PORT || 3000



app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.sendFile(path.join(__dirname,'index.html'))
  })


  app.get('/game', (req, res) => {
    //res.send('Hello World!')
    res.sendFile(path.join(__dirname,'game.html'))
    
  })

  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})