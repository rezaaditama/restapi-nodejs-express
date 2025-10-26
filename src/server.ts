import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();
const port: Number = 4000;

app.use('/health', (req: Request, res: Response, _next: NextFunction) => {
  res.status(400).send({
    status: 200,
  });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
