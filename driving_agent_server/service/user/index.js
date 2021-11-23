const db = require("../../db/index")

//添加用户
const addUser = async (data) => {
	console.log(`传入的参数${JSON.stringify(data)}`)
	let myData = {
		username:'很生气',
		mobile: '17946565644',
		password:'js123456',
		sex: 0,
		head_pic:'afha.jpg',
	}
	let sql = "insert into User(user_id,username,mobile,password,sex,head_pic) value(replace(uuid(), '-', ''),${myData.username},${myData.mobile},${myData.password},${myData.sex},${myData.head_pic});	"
	db.query(sql,(err,res) => {
		console.log('失败',err)
		console.log('插入成功',res)
	})
}


module.exports = {
	addUser,
}