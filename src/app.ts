import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRouter } from './app/Modules/Users/user.route';
import globalErrorHandelar from './app/middleware/globalEroorHandelar';
import notFound from './app/middleware/notfound';
import { AcademicSemistarRoute } from './app/Modules/AcademicSemistar/AcademicSemistar.route';
import { AcademicFacultyRoutet } from './app/Modules/AcademicFaculty/AcademicFaculties.route';

// import { error } from 'console'

const app: Application = express();
// const port = 3000

//parse
app.use(express.json());
app.use(cors());

app.use('/api/v1/users', UserRouter);
app.use('/api/v1/academic-semistar', AcademicSemistarRoute);
// app.use('/api/v1/singleAcademiocSemiostar',AcademicSemistarRoute);
// app.use ('/api/v1/updateAcademicSemistar',AcademicSemistarRoute);
app.use('/api/v1/faculty', AcademicFacultyRoutet);
app.use(globalErrorHandelar);
app.use(notFound);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// make a global error handelar

export default app;
