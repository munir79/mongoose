import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { studentsRouters1 } from './Modules/Students/studentroute'
import { userRoutes } from './Modules/Users/users.route'


const app:Application = express()
// const port = 3000

//parser
app.use(express.json())
app.use(cors())

app.use('/api/v1/students',studentsRouters1)
app.use('/api/v1/users',userRoutes)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;

