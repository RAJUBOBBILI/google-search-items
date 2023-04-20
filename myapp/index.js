const express = require("express");
const app = express();

app.get("/", (requeste, response) => {
  response.send("Hello World");
});

app.get("/date", (request, responce) => {
  let date = new Date();
  responce.send(`Today date is ${date}`);
  console.log(request);
});

app.get("/page",(request,responce)=>{
    responce.sendFile('./page.html',{root:__ dirname})
})

app.listen(3000);
