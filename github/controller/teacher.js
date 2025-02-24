
const database = require('../database/db')
const getteacherlist=async(req,res)=>{
    const db = await database.main();
    const collection = db.collection('teacher');
    const findResult = await collection.find({}).toArray();
    res.send({
        status: 200,
        message: findResult
    })
}


const insertnewlist=async(req,res)=>{
    try{
                 
        const db = await database.main();
        const collection = db.collection('teacher');
        const Result = await collection.insertOne(req.body);
        console.log(Result);
        res.send({
            status:200,
            message:'record inserted successfully',
            data:Result
    
        })
        }
        catch (err) {
            res.send({
                message: "something went wrong , please try again later" + err,
                status: 500
            })
        }
    }
    const updatelist=async(req,res)=>{
        try{
                     
            const db = await database.main();
            const collection = db.collection('teacher');
            var newvalues={ $set:req.body};
            const Result = await collection.updateOne({name:req.query.name},newvalues);
            console.log(Result);
            if(Result.modifiedCount>0){
                res.send({
                    status:200,
                    message:'record inserted successfully',
                    data:Result
            
                })
            }
            else
            {
                res.send({
            
                    message:"please try again"
                })
            }
            
            }
            catch (err) {
                res.send({
                    message: "something went wrong , please try again later" + err,
                    status: 500
                })
            }
        }
        const deletelist=async(req,res)=>{
            try{
                    const db = await database.main();
                    const collection = db.collection('teacher');
                    const Result = await collection.deleteOne({name:req.query.name});
                    console.log(Result);
                   if(Result.deletedCount>0)
                   {
                    res.send({
                        message: "",
                        status: 200,
                        data:"record deleted successfully"
                    })
                   }
                   else{
                    res.send({
                        message: " please try again later",
                       
                        
                    })
                   }
                   
                }
                catch (err) {
                    res.send({
                        message: "something went wrong ,please try again later" + err,
                        status: 500
                    })
                }
             }
module.exports={getteacherlist,insertnewlist,updatelist,deletelist}