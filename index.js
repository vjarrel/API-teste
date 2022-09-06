const express = require('express')
const app = express()

app.use(express.json())


app.get('/soma', (req, res)=>{
    const query = req.query
    const n1 = Number(query.n1)
    const n2 = Number(query.n2)

    const soma = n1+n2

    res.send(`O resultado é ${soma}`)
})

app.get('/multiplicacao', (req, res)=>{
    const query = req.query
    const n1 = Number(query.n1)
    const n2 = Number(query.n2)

    const mult = n1*n2

    res.send(`O resultado é ${mult}`)
})

app.get('/divisao', (req, res)=>{
    const query = req.query
    const n1 = Number(query.n1)
    const n2 = Number(query.n2)

    const divi = n1/n2

    res.send(`O resultado é ${divi}`)
})

app.get('/subtracao', (req, res)=>{
    const query = req.query
    const n1 = Number(query.n1)
    const n2 = Number(query.n2)

    const sub = n1-n2

    res.send(`O resultado é ${sub}`)
})

app.listen(3333,()=> console.log('servidor aberto!'))