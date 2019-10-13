const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/string', function(req, res) {
	res.send('{"name": "superman"}')  //check the content-type is response header
})  

app.post('/json', function(req, res) {
	res.send( { "name": "superman" } )
})  


app.listen(port, () => console.log(`Example app listening on port ${port}!`))