const mongodb=require('mongodb')
const getCon=async()=>{
    const mongoClient=mongodb.MongoClient
            const mongoServer=await mongoClient.connect(process.env.DB_URL)
           const db=mongoServer.db("onlinetest")
           const collection=db.collection("questions")
           return collection;
}

module.exports=getCon;