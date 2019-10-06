const app = require("express")(),
      Sequelize = require('sequelize');
      morgan = require("morgan"),
      bodyParser = require("body-parser"),
      path = require("path"),
      cors = require("cors"),
      contactRouter = require("./Routes/contactRouter");
      db = require("./Models/connection");






db.authenticate()
.then(()=> {
    console.log("Connection to the database has been established successfully.");
    return db.sync({force: false});
})



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

app.use(morgan("short"));

app.use(cors());
//error middleware
app.use((err, req, res, next)=>{
    // console.log(err);
    res.send(err);
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


// app.use("/students", studentRouter);
// app.use("/subjects", subjectRouter);
app.use("/contacts", contactRouter);


app.listen(process.env.PORT || 8080, (err)=>{
    if(!err)
        console.log("Listening...");
});
