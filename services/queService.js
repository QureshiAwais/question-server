const queDao=require('../dao/queDao')
const quesService={
    save:async (data)=>{
        const res=await queDao.save(data)
        return res;
    }
}

module.exports=quesService;