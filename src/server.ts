import express, { request, response } from "express"

const app = express()

app.get('/', (request, response) =>
    response.json({ Ok: 'Entrou na rota' })
)

//iniciando o servidor
app.listen(3333, () => console.log("Server is running!"))