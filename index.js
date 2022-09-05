const express = require('express')
const app = express()

app.use(express.json())

app.get('/multiplicacao', (req, res)=> {
    const query = req.query
    
    const multiplicacao = Number(query.n1)*Number(query.n2)
    res.send(`O resultado é ${multiplicacao}`)
})
app.listen(3333,()=> console.log('servidor aberto!'))