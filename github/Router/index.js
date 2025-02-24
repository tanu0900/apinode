const express = require('express')

const stnew=require('../controller/get')
const teachnew=require('../controller/teacher')
const router = express.Router()




router.get('/getdata', stnew.getStudentList)
router.get('/getteacher',teachnew.getteacherlist)

router.post('/insertdata', stnew.getnewlist)
router.post('/insetlist', teachnew.insertnewlist)


router.delete('/deleteData',stnew.getdeletelist)
router.delete('/deletelist',teachnew.deletelist)
router.put('/updatedata',stnew.getupdate)
router.put('/updatenew',teachnew.updatelist)
    
module.exports=router


