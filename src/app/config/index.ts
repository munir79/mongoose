import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path:path.join(process.cwd(),'.env')})

export default {
    port:process.env.PORT,
    databaseurl:process.env.DATABASE_URL,
    bycript_salt:process.env.BYCRIPT_SALT_ROUND,
    defaultPassword:process.env.DEFAULT_PASS

}