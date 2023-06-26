import SuperheroController from './SuperheroController';
import {Router} from 'express';

const superheroRouter = Router();

superheroRouter.get('/', SuperheroController.getAllSuperheroes);
superheroRouter.get('/:id', SuperheroController.getSuperhero);
superheroRouter.post('/', SuperheroController.createSuperhero);
superheroRouter.put('/:id', SuperheroController.putSuperhero);
superheroRouter.patch('/:id', SuperheroController.patchSuperhero);
superheroRouter.delete('/:id', SuperheroController.deleteSuperhero);

export default superheroRouter;
