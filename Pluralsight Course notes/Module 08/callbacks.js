/**
 * throw - throws user defined exception. exception of the current function stops and control is passed to catch
 * if no catch is present , the programs terminates
 */

//Imoprt Node Filesystem module (the callbak version)
import fs from "node:fs";

fs.readFile('./data.json','utf8',(err,data)=>{
    if(err){
        console.log('Error reading the file');
        throw err
    }
    try{
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("Complete"); 
    }catch(err){
        console.error('Cannot parse JSON from file');
        throw err;
    }
});