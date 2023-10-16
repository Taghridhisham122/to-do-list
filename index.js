import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";



const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.get("/", (req, res) => {
    var today = new Date();
var options = {
    weekday: "long",
    year:"numeric",
    day: "numeric",
    month:"long"
  };
  var day = today.toLocaleDateString("en-US",options);
       res.render('index.ejs',{kindOfDay:day,tasks:tasks});
});
var tasks = []
app.post('/', (req, res) =>{
    
     const task = req.body.newItem;
   tasks.push(task);
   res.redirect("/");
 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
