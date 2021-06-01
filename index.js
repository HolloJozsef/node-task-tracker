const express = require('express')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const taskRoutes = require ('./routes/taskRoutes')
const userRoutes = require ('./routes/userRoutes')
const app = express();
const cors = require('cors');
app.use(cors())
const port = process.env.PORT || 8080;

const mongoURI="mongodb+srv://ioji:ioji@cluster0.xk4ml.mongodb.net/taskManager?retryWrites=true&w=majority";
mongoose.connect(mongoURI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).catch(error=>console.log(error.reason));
console.log(mongoose.connection.readyState);
app.use(bodyParser.json());

app.use("/api/task",taskRoutes);
app.use("/api/user",userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Task tracker app listening on port ${port}!`)
});
