const express = require('express')
const indexRouter=require('./Router/index')
const app = express();
//hello for git hub test hello how r u i am tanug huhk
app.use(express.json())
app.use('/',indexRouter)
app.listen(3000, () => {
    console.log("server started on port 3000")
});