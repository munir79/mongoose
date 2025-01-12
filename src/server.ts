import app from "./app";
import config from "./app/config";

import mongoose  from "mongoose";

async function main() {
 try{
    await mongoose.connect(config.databaseurl as string);

  
    app.listen(config.port, () => {
        console.log(`Example app listening hey jakir hossain on port ${config.port}`)
      })
 }
 catch(err){
    console.log(err)
 }
  }

main();