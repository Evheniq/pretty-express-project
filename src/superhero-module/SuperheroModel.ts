import mongoose from 'mongoose';

const Superhero = new mongoose.Schema({
  // id: {
  //   type: mongoose.Types.ObjectId,
  //   auto: true,
  //   unique: true,
  // },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  real_name: {
    type: String,
    required: true,
    unique: true,
  },
  origin_description: {
    type: String,
    required: true,
    unique: true,
  },
  superpowers: {
    type: [String],
    required: true,
  },
  catch_phrase: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
});

export default mongoose.model('Superhero', Superhero);
