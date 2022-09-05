const express = require('express')
const app = express()

app.use(express.json())

app.get('/divisao', (req, res)=> {
    const query = req.query
    
    const divisao = Number(query.n1)/Number(query.n2)
    res.send(`O resultado é ${divisao}`)
})
app.listen(3333,()=> console.log('servidor aberto!'))