const express=require('express');
const cors = require('cors');
const app=express();
app.use(cors())


app.use(express.urlencoded({extended:true }))
app.use(express.json())
app.get('/',(req,res) => {
  res.send('jhskjaf') 
})
app.post('/sum',(req,res) => {
    const {a,b}=req.body
    const c=Number(a)+Number(b)
    res.json({c:c})
})

app.post('/sub',(req,res) => {
   const {a,b}=req.body
   const c=Number(a)-Number(b)
   res.json({c})
})
app.post('/mul',(req,res) => {
   const {a,b}=req.body
   const c=Number(a)*Number(b)
   res.json({c})
})
app.post('/div',(req,res) => {
   const {a,b}=req.body
   const c=Number(a)/Number(b)
   res.json({c})
})


const PORT=3000
app.listen(PORT,() => {
  console.log(`app is working on http://localhost:${PORT}`);
})

