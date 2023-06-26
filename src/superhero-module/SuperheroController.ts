import {Request, Response} from 'express';
import SuperheroService from './SuperheroService';

class SuperheroController {
  getAllSuperheroes = async (req: Request, res: Response) => {
    const heroes = await SuperheroService.getAllHeroes();
    res.json(heroes);
  };

  createSuperhero = async (req: Request, res: Response) => {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    } = req.body;

    const heroObject = {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    };

    const createdHero = await SuperheroService.createHero(heroObject);
    res.json(createdHero);
  };

  getSuperhero = async (req: Request, res: Response) => {
    const id = req.params.id;
    const hero = await SuperheroService.getHeroById(id);
    res.json(hero);
  };

  putSuperhero = async (req: Request, res: Response) => {
    const id = req.params.id;

    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    } = req.body;

    const updatedHero = await SuperheroService.changeFieldsHero(id, {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    });

    res.json(updatedHero);
  };

  patchSuperhero = async (req: Request, res: Response) => {
    const id = req.params.id;

    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    } = req.body;

    const inputFields: {
      [name: string]: string;
    } = {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    };

    const clearedFields: {
      [name: string]: string;
    } = {};

    for (const key in inputFields) {
      if (inputFields[key] === undefined) {
        clearedFields[key] = inputFields[key];
      }
    }

    const updatedHero = await SuperheroService.changeFieldsHero(
      id,
      clearedFields
    );

    res.json(updatedHero);
  };

  deleteSuperhero = async (req: Request, res: Response) => {
    const id = req.params.id;

    const deletedHero = await SuperheroService.deleteHero(id);

    res.json({
      message: 'Hero deleted',
      hero: deletedHero,
    });
  };
}

export default new SuperheroController();
