const express = require('express')

const cors = require('cors')
const  middleware = require('./middleware/index')
const app = express()

const port = 5000

app.use(cors())

app.use(express.json())

app.get('/', function (req, res) {
  console.log('Normal Routes Hello World!')
  res.json('Normal Routes Hello World! From Server')
})

app.get('/protected', middleware.decode, (req, res, next) => {
  console.log('Protected Routes From Server !!')

  res.json('Protected routes from Server')
  console.log(req.headers.authorization)
})

app.listen(port, () => console.log(`Server app listening on port ${port}!`))
