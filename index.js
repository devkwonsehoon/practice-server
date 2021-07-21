const express = require('express')
const app = express()
const port = 3000

const goodsRouter = require("./routes/goods");
const userRouter = require("./routes/user");

app.use('/goods', goodsRouter);
app.use('/user', userRouter);


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})