const Atendimento = require('../models/atendimentos')

module.exports = app => {
app.get('/atendimentos', (req, res) =>  {
    Atendimento.lista(res, req)
})

app.get('/atendimento/:id', (req, res) => {
    const id = parseInt(req.params.id)



    Atendimento.buscaPorId(id, res)
    res.send('Ok')
}) 

app.patch('/atendimentos/:id',(req, res) =>{

    const id = parseInt(req.params.id)
    const valores = req.body

    Atendimento.altera(id, valores, res)

})

app.delete('/atendimentos/:id', (req, res)  => {

    const id = parserInt(req.params.id)
   
    Atendimento.deletar(id, res)

})



app.post('/atendimentos', (req, res) => {
    const atendimento = req.body

    Atendimento.adiciona(atendimento, res)
 
 } )
}