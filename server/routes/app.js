var express=require('express')
routes=express.Router()
var MongoClient= require('mongodb').MongoClient

const mongourl = "mongodb+srv://webtech_projection:webtech_projection@cluster0.1ryk5ub.mongodb.net/?retryWrites=true&w=majority"

routes.get('/cat',(req,res)=>{
    MongoClient.connect(mongourl,(err,client)=>{
        if(err) console.log(err)
        else
        {
            db=client.db('catalogs')
            db.collection(req.query.boardName).find({}).toArray(function(err,data){
                if(!err)
                {
                    res.send(data)

                }
            })
            // console.log(rec)
        }
        })
})

module.exports = routes;