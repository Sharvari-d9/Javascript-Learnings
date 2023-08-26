//import node filesystem module(promises verison)
//then keyword
import fs from 'node:fs/promises';
//Imoprt Node Filesystem module (the callbak version)
import fsc from "node:fs";
import { resolve } from 'node:path';
import { rejects } from 'node:assert';

//Reading the file with promises API

fs.readFile('./data.json','utf8')
    .then(data =>{
        const dataObj = JSON.parse(data);
        console.log(dataObj);
        console.log("Complete");
    })
    .then(() => readFile("data.json"))
    .then(data=>console.log(data))
    .catch(err =>{
        console.log("Could not complete reading and parsing the file");
        throw err;
    });

    // Creating a custom promise with callback API 
    //this might be required when there is no support for pormises in certain cases

    const readFile = async(filename) =>{
        return new Promise((resolve,reject)=>{
            fsc.readFile('data.json','utf8',(err,data)=>{
            if(err){
                reject(err);
            }        
               resolve(data); 
            });
        });

    }