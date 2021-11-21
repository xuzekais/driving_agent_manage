const mysql = require("mysql");
//创建连接池
const pool = mysql.createConnection({
  connectionLimit: 10,//连接池
  host:'139.224.33.227',//ip地址
  user: 'test_db',//数据库用户名
  password: 'hhn5KP5x2N2A6nFX',//数据库密码
  port: '3306',//端口号
  database: 'test_db',//数据库名称
  multipleStatements: true,//允许每个mysql语句有多条查询.使用它时要非常注意，因为它很容易引起sql注入攻击(默认:false)
});

let query =  (sql, values = [], callback) => {
  if(!sql) return
  return new Promise((resovle, reject) => {
    //建立连接
    pool.getConnection((err, connection) => {
      if(err) return resovle(err)
      console.log(`连接成功`)
      connection.query(sql, values, (error, results, fields) => {
        if(error){
          reject({code:500, error})
        }else{
          resovle(results)
        }
        //将连接返回到连接池中，准备让其他人重复使用
        connection.release()
        callback && callback(results, fields)
      })
    })
  })
}
module.exports = query;