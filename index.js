const express = require('express')
const app = express()

app.use(express.json())

app.get('/soma', (req, res)=> {
    const query = req.query
    
    const subtracao = Number(query.n1) - Number(query.n2)
    res.send(`O resultado é ${subtracao}`)
})
app.listen(3333,()=> console.log('servidor aberto!'))