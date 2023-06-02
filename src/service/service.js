const Quiz = require('../model/model');

const create = (data) => {
  const newQuiz = new Quiz(data);
  return newQuiz.save();
}

const getAll = () => {
  return Quiz.find();
}

const getById = (id) => {
  return Quiz.findById(id);
}

const update = (id, data) => {
  return Quiz.findByIdAndUpdate(id, data, { new: true });
}

const remove = (id) => {
  return Quiz.findByIdAndRemove(id);
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
}