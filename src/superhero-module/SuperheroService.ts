import {Hero} from './types';
import SuperheroModel from './SuperheroModel';

interface MongoError extends Error {
  code: number;
  keyValue: string;
}

class SuperheroService {
  getAllHeroes = async () => {
    return SuperheroModel.find();
  };

  createHero = async (hero: Hero) => {
    const heroObject = new SuperheroModel(hero);
    try {
      return await heroObject.save();
    } catch (error) {
      const errorMonge = error as MongoError;
      if (errorMonge.name === 'MongoError' && errorMonge.code === 11000) {
        const uniqField = Object.keys(errorMonge.keyValue);
        return {
          error_msg: `Fields must be unique: ${uniqField}.`,
        };
      } else {
        return error;
      }
    }
  };

  getHeroById = async (id: string) => {
    return SuperheroModel.findById(id);
  };

  changeFieldsHero = async (
    id: string,
    newFields: {[name: string]: string}
  ) => {
    return SuperheroModel.updateOne(
      {
        _id: id,
      },
      {
        ...newFields,
      }
    );
  };

  deleteHero = async (id: string) => {
    return SuperheroModel.deleteOne({_id: id});
  };
}

export default new SuperheroService();
