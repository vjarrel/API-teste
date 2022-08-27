const express = require('express')
const app = express()

app.get('/soma', (req, res)=> {
    const soma = 5+5
    res.send(`O resultado é ${soma}`)
})
app.listen(3333,()=> console.log('servidor aberto!'))