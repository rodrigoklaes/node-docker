const express = require('express')
const app = express()
  
const routes = express.Router()
const port = 3000

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '172.18.0.104',
      port: 3306,
      user : 'klaes',
      password : 'klaes',
      database : 'db_aula'
    }
});

app.use(express.urlencoded());
app.use(express.json());

routes.get('/', async (req, res) => {
    try {
        const result = await knex('aluno')
        res.send(result)
    } catch (error) {
        res.send(error)
    }
}
)
routes.get('/test', async (req, res) => {
    try {
        res.send("resultaaaaaaaa")
    } catch (error) {
        res.send(error)
    }
})

routes.post('/', async (req, res) => {
    console.log(req.body);
    const result = await knex('aluno').insert(req.body)
    res.send(result)
})

app.use('/', routes)

app.listen(port, () => {
    console.log(`Run on ${port}`);
})