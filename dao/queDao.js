const getCon=require('../common/DBConnection')
const queDao={
    save:async (data)=>{
        try{
           const collection=await getCon()
           const res=await collection.insertOne(data)
           return res
        }
        catch(e){
            return e;
        }
      
    }
}
module.exports=queDao