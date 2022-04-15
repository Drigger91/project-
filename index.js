const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("go to route for data");
});
app.post("/bhfl", (req, res) => {
  let numbers = [];
  let alphabets = [];
    try{
      let array = req.body.data;
      for(let i =0;i<array.length;i++){
        if((array[i][0]>="0" && array[i][0]<="9") || typeof(array[i]) == "number"){
          numbers.push(array[i])
        }
        else{
          alphabets.push(array[i])
        }
      }
      res.status(200).send({
        is_success : true,
        user_id:"Piyush_Tiwari_29032002",
        email:"mepiyush29@gmail.com",
        roll_number:"0101EC191093",
        numbers:numbers,
        alphabets:alphabets

      });
    }
    catch(e){
      res.status(400).send({
        is_success:false
      });
    }
 
});
app.listen(port, () => {
  console.log("Server is up and running");
});
