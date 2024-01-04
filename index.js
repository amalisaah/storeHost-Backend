const express = require('express')
const cors = require('cors')
const app = express()
const port = 8081

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your client's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));

  
//bodyParser Middleware
const bodyParser = require('body-parser')

// create application/json parser
var jsonParser = bodyParser.json()

app.use(jsonParser)
// app.use(cors())


app.post("/login",(req,res)=>{
    console.log(req.body,"body")
    req.body.id=1
    res.send(req.body)
})
app.get("/",(req,res)=>{
    console.log("congrats you have reached the server")
    res.send("congrat you hit the server")
})

// app.use((err,req,res,next)=>{
//     res.status(404).send("chale eno dey work")
// })

app.listen(port, () => console.log('Storefront backend app listening on port ' + port + '!'))