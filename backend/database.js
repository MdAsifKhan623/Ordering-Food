const mongoose = require('mongoose')

const dbConnection=async()=>{
    try{
        console.log('Database created');
        const databaseName= 'food-order'
        const conn= await mongoose.connect(`mongodb://127.0.0.1:21017/${databaseName}`,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        console.log(`Database Connected: ${conn.connection.host}`)
    }
    catch(error){
        console.log(`Error:${error.message}`)
        process.exit(1)
    }
}
module.exports=dbConnection;
