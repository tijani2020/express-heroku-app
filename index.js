const express = require('express')
const app = express()
const port = 8080


app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello abdo i am your first app!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})