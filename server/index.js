const express = require("express");
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const errorHandler = require("./middlewares/ErrorHandling");
require("dotenv").config()
const app = express()
app.use(express.json())
const PORT = 5000;
const AuthRouter = require("./routes/AuthRouter")
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});


app.use("/api", AuthRouter)

app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`App Listening on PORT ${PORT}`)
})