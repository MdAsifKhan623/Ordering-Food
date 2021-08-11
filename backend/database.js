const mongoose = require('mongoose')

const dbConnection=()=>{
    try{
        const databaseName= 'food-order'
        const conn=mongoose.connect(`mongodb://127.0.0.1:21017/${databaseName}`,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        console.log(`Database Connected: ${conn.connection.host}`)
    }
    catch(errror){
        console.log(`Error:${error.message}`)
        process.exit(1)
    }
}
