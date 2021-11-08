const mysql = require("mysql");

var connection = mysql.createConnection({
  host:'139.224.33.227',
  user: 'test_db',
  password: 'hhn5KP5x2N2A6nFX',
  database: 'test_db',
  port: '3306'
});
connection.connect((err) => {
  if(err) throw err;
  console.log(`连接成功`)
});