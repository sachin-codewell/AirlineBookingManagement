const express = require('express');

const {dbConfig} = require('./config/index')



const setupServerAndRun = ()=>{
    const app = express();
    app.listen(dbConfig.PORT,()=>{
        console.log(`server is running fine ${dbConfig.PORT}`)
    })
}

setupServerAndRun();
