// const express=require('express')
// const app=express();
// const port=3000;

// app.get('/',(req,res)=>{
//     res.send('Hello');
// })
// app.listen(port,()=>
// {
//     console.log(`Example app listine at http://localhost:${port}`);
// })


import expres from 'express';
const app=expres();
const port=3000;

app.get('/',(req,res)=>{
    res.send('Hello');
})
app.listen(port,()=>
{
    console.log(`Example app listine at http://localhost:${port}`);
})

