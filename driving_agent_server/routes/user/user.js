const express = require("express")
const router = express.Router()
const service = require("../../service/user/index")

//添加用户
router.ge



('/add', async (req, res) => {
	const data = await service.addUser(req.body)
	res.json({ code: 200, msg: '添加用户成功', data })
})
module.exports = router