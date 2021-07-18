const app = require('express')();
const path = require('path');

const htmlFile = path.resolve(__dirname, "pages/spa.html");
// 这次要做的 /product 与 /product/123 => 打开同一个html
app.get(/\/product(s|\/\d+)/, (req, res) => {
  res.sendFile(htmlFile);
})
app.listen(3000, ()=> {
  console.log('可以了')
})