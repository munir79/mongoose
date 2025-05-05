import express, { Application,  Request, Response } from 'express'
import cors from 'cors'
import { StudentsRouter } from './app/Modules/Students/Students.route'

// import { error } from 'console'


const app:Application = express()
// const port = 3000

//parser
app.use(express.json())
app.use(cors())

app.use('/api/v1/students',StudentsRouter);

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

// make a global error handelar 


export default app;

