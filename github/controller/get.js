
const database = require('../database/db')
const getStudentList=async(req,res)=>{
    const db = await database.main();
    const collection = db.collection('studentlist');
    const findResult = await collection.find({}).toArray();
    res.send({
        status: 200,
        message: findResult
    })
}


const getnewlist=async(req,res)=>{
    try{
                 
        const db = await database.main();
        const collection = db.collection('studentlist');
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
    const getupdate=async(req,res)=>{
        try{
                     
            const db = await database.main();
            const collection = db.collection('studentlist');
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
        const getdeletelist=async(req,res)=>{
            try{
                    const db = await database.main();
                    const collection = db.collection('studentlist');
                    const Result = await collection.deleteMany({name:req.query.name});
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
module.exports={getStudentList,getnewlist,getupdate,getdeletelist}