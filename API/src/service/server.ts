import express from 'express';

import { router } from '../service/routes';
const app = express();

app.use(express.json());

app.use(router);

app.listen(3010, () => console.log('servidor do Codo na port 3010!'));
