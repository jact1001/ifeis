const express = require('express')
const app = express()

const port = 3000

app.listen(port, () => {
    console.log('example ', port)
});

app.get('/movies', (req, res) => {
    res.json(
        {
                title: 'El Señor de lo Anillos',
                content: 'contenido'
            },
            {
                title: '101 Dalmatas',
                content: 'contenido'
            }
        )
});

app.use(express.urlencoded({
    extended: true
}))

app.post('receive', (req, res) => {
   let body = req.body;
   console.log(body);
   res.send(req.body)
});
