//import {fs} from 'fs'
const fs=require('fs');
//const { useCallback } = require('react');

fs.readFile('sample.txt','Utf8',(err,data)=>
{
    console.log(err,data);
})

// console.log(fs.writeFileSync('sample.txt','Abhishek hello'));

console.log('hi');