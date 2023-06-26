import {Router} from 'express';
import superheroRouter from './superhero-module';

const router = Router();
router.use('/superheroes', superheroRouter);

export default router;
