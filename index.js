const express = require('express')
const app = express()
const port = 3000

const connect = require("./schemas");
connect();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

// const goodsRouter = require("./routes/goods");
// const userRouter = require("./routes/user");

const goodsRouter = require("./routers/goods");
app.use("/api", [goodsRouter]);

// app.use('/goods', goodsRouter);
// app.use('/user', userRouter);

app.use((req, res, next) => {
  next();
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
  let name = req.query.name;
  res.render('test', {name});
})

app.get('/home', (req, res) => {
  res.render('index');
})

app.get('/detail', (req, res) => {
  goodsId = req.query.goodsId;
  res.render('detail', {goodsId});
})

app.get('/cart', (req, res) => {
  res.render('cart')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});

