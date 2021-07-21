const express = require('express')
const app = express()
const port = 3000

const goodsRouter = require("./routes/goods");
const userRouter = require("./routes/user");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

app.use('/goods', goodsRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
  console.log(req);
  next();
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
  let name = req.query.name;
  res.render('test', {name});
})

app.get('/', (req, res) => {
  res.send('<!DOCTYPE html>\
  <html lang="en">\
  <head>\
      <meta charset="UTF-8">\
      <meta http-equiv="X-UA-Compatible" content="IE=edge">\
      <meta name="viewport" content="width=device-width, initial-scale=1.0">\
      <title>Document</title>\
  </head>\
  <body>\
      Hi. I am with html<br>\
      <a href="/hi">Say Hi!</a>\
  </body>\
  </html>')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});

