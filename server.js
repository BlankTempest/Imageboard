express=require('express')
cors=require('cors')
app=express()

// app.get('/',(req,res)=>{
//     res.send("<h1>Hello</h1>")
// })

app.post('/',async(req,res)=>{
    body=[]
    req.on('data',(chunk)=>{
        body.push(chunk)
    })
    console.log(body,"hello")
    
})
const PORT=process.env.port||8000
//in this case procces.env.port is undefined,but some process might have a different port defined
app.listen(PORT,function(){
    console.log("server is up")
})