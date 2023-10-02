const express = require('express');
const bodyParser = require('body-parser');
const {updatePhrase, getAllPhrases} = require('../database-mysql')

// const db = require('../database-mysql');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// UNCOMMENT TO START
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/phrases', (req, res) => {
  getAllPhrases().then(([results])=> {
    // console.log(results)
    res.json(results)
  })
})
//TODO - add additional route handlers as necessary
app.patch('/api/phrases/:phraseId',(req,res)=>{
  // console.log(req.params,req.body)
let {phraseId}= req.params
let {status}= req.body
  updatePhrase(phraseId,status).then(result=>{ 
  res.send("success");
  })
  
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});