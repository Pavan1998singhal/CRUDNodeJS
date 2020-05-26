const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 5000;

//DB Uri
const uri = "mongodb+srv://FirstMern:FullStack@cluster0-wlc5d.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('Mongoose db connection established successfully');
});

app.use(express.json());

const alienRouter = require('./routes/aliens');
app.use('/aliens', alienRouter);


app.listen(port, ()=>{
    console.log(`Server is running on Port: ${port}`);
});