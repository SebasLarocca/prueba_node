import express from 'express'

const app = express()


app.use('/', (req,res)=>{res.send("Server ok")})
app.listen(8080, ()=>{console.log('Server running on port 8080');})