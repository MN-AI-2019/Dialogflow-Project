const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('welcome to states application!'))

//data store in memory. in production, it can be in database
let allStates = [ 
	{ code: 'MN', name:'Minnesota'},
	{ code: 'WI', name: 'Wisconsin'},
	{ code: 'IL', name: 'Illinois'}
]
//getting all states
app.get('/states', (req, res) => {
	console.log('getting all states')
	res.send(allStates)
}) 

app.get('/states/:code', (req, res) => {
	console.log(`getting all states for ${req.params.code}`);
	//validation
	if (!req.params.code || req.params.code.length != 2) {
		res.status(400).send({success: false, error: 'Invalid state code!'})
	}

	//searching
	let found = allStates.filter( s => s.code == req.params.code.toUpperCase())

	if (found.length == 0) {
		res.status(404)
	}

	res.send(found);
})  

app.post('/states', function(req, res) {
	console.log(`adding state ${JSON.stringify(req.body)}`); //need setup body-parser for request.body to work
	//validation - 400
	let { code, name } = req.body
	if (!code || code.length!=2) {
		res.status(400).send({ success: false, error: 'Invalid state code!' })
	}
	if (!name) {
		res.status(400).send({ success: false, error: 'State name is required!' })
	}
	
	//check existing - 409
	let existing = allStates.filter( s => s.code == code.toUpperCase())
	if (existing.length != 0) {
		res.status(409).send({ success: false, error: `State ${code} already exists!` })
	}

	//add - 201
	allStates.push({ code, name });
	res.status(201).send({ success: true, error: '' })
})  

app.put('/states/:code', (req, res) => {
	//validation - 400
	//check exists - 404
	//remove - 200
	
})

app.delete('/states/:code', (req, res) => {
	//validation - 400
	//check exists - 404
	//delete - 200
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))