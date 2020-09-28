const express=require('express');
const bodyParser=require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const password='wmBlIOKc4jnPErwn';

const uri  = "mongodb://myUser:wmBlIOKc4jnPErwn@cluster0-shard-00-00.p0nqr.mongodb.net:27017,cluster0-shard-00-01.p0nqr.mongodb.net:27017,cluster0-shard-00-02.p0nqr.mongodb.net:27017/userdb?ssl=true&replicaSet=atlas-nrj946-shard-0&authSource=admin&retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/',(req, res)=>{
    res.sendFile(__dirname +'/index.html');
})



client.connect(err => {
  const collection = client.db("userdb").collection("products");

  app.post("/adProduct",(req,res)=>{
      const product=req.body;
      console.log(product)
  })

//   client.close();

app.listen(4000)

});