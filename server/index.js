const express = require("express");
const app = express(); // create express app
const path = require("path");
const MongoClient=require('mongodb').MongoClient
const cors=require('cors')
const bodyparser=require('body-parser')
const router = require('express').Router();
const routes = require('./routes/app');
app.use('/',routes)

const mongourl = "mongodb+srv://webtech_projection:webtech_projection@cluster0.1ryk5ub.mongodb.net/?retryWrites=true&w=majority"

multer=require('multer')
app.use(cors())
urlencodedparser=bodyparser.urlencoded({extended:true})

app.use(express.urlencoded())

const fileUpload = require('express-fileupload');
app.use(fileUpload())

app.post('/uploadMongo',async(req,res)=>{
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
      MongoClient.connect(mongourl,(err,client)=>{
      db=client.db('catalogs')
      console.log('pushing a new thread to')
      console.log(JSON.parse(body).boardName)
      var boardName = JSON.parse(body).boardName
      db.collection(boardName).insertOne(JSON.parse(body.toString()),()=>{
          console.log("pushed")
          console.log("hi")
          client.close()
      })
    })
  })
    // console.log("inside::",chunk.toString())
    // console.log(typeof(chunk))
})

app.post('/uploadFile', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    console.log('No files were uploaded.');
    return;
  }

  console.log('req.files >>>', req.files); // eslint-disable-line

  sampleFile = req.files.sampleFile;

  uploadPath = __dirname + '/public/uploads/' + sampleFile.name;

  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    console.log('File uploaded to ' + uploadPath);
  });
});



app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
//to fix routes
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

const PORT=process.env.port||9001
// start express server on port 9001
app.listen(PORT, () => {
  console.log("server started on port 9001");
});