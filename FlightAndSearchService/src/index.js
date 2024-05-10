const express = require('express');


const app = express();
const port = 7001

app.listen(port,()=>{
    console.log(`server is running fine ${port}`)
})