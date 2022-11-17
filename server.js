// const { urlencoded } = require('express')
MongoClient=require('mongodb').MongoClient
express=require('express')
cors=require('cors')
app=express()
bodyparser=require('body-parser')

multer=require('multer')
app.use(cors())
urlencodedparser=bodyparser.urlencoded({extended:true})


app.use(express.urlencoded())

const fileUpload = require('express-fileupload');

// app.get('/',(req,res)=>{
//     res.send("<h1>Hello</h1>")
// })

app.post('/upload',async(req,res)=>{
    body=[]
    // console.log("requ body",req.body)
    req.on('data',(chunk)=>{
        body.push(chunk)
        console.log(body.toString())
        console.log(typeof(body))
    })
        req.on('end',()=>{
            // console.log(body)
            console.log(JSON.parse(body.toString()));
                MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
                db=client.db('wt_project')
                db.collection('catalogs').insertOne(JSON.parse(body.toString()),()=>{
                    console.log("pushed")
                    res.send("hi")
                    client.close()
                })

            })
        })
        // console.log("inside::",chunk.toString())
        // console.log(typeof(chunk))
    })

app.post('http://localhost:8000/temps',async(req,res)=>{
    // req.on('end',()=>{
        req.on('data',(chunk)=>{
            console.log("here")
        })
        req.on('end',()=>{
            MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
            db=client.db('wt_project')
            data = db.collection('catalogs').find().toArray()
            res.send(data);
        })
        })
    
   
})
    

app.post('/upload', function(req, res) {
    let sampleFile;
    let uploadPath;
  
    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send('No files were uploaded.');
      return;
    }
  
    console.log('req.files >>>', req.files); // eslint-disable-line
  
    sampleFile = req.files.sampleFile;
  
    uploadPath = __dirname + '/uploads/' + sampleFile.name;
  
    sampleFile.mv(uploadPath, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
  
      res.send('File uploaded to ' + uploadPath);
    });
  });

const PORT=process.env.port||8000
//in this case procces.env.port is undefined,but some process might have a different port defined
app.listen(PORT,function(){
    console.log("server is up")
})