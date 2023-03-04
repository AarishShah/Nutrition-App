const express = require('express')
const usersRouter = require('./src/nutrition')

const app = express()
app.use(express.static('public'))
app.use(usersRouter)


app.listen(3000, () => {
    console.log('server is up on port 3000')
})
