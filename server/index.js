const express = require("express");
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const errorHandler = require("./middlewares/ErrorHandling");
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: __dirname + '/.env' });
}
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000;
const AuthRouter = require("./routes/AuthRouter")
const ProductRouter = require("./routes/ProductRouter")
const CartRouter = require("./routes/CartRouter")
const OrderRouter = require("./routes/OrderRouter")
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
app.use("/product", ProductRouter)
app.use("/cart", CartRouter)
app.use("/order", OrderRouter)

app.use(errorHandler)

// static files (build of your frontend)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client', 'build')));
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`App Listening on PORT ${PORT}`)
})