const mongoose = require('../index')

const TodoSchema = new mongoose.Schema({
  id: {
    unique: true,
    type: Number
  },
  info: 'String'
})

const Todo = mongoose.model('todos', TodoSchema)

module.exports = {
  getTodos () {
    return Todo
      .find({})
      .sort({_id: 1})
      .exec()
  },
  getTodo (id) {
    return Todo
      .findOne({id})
      .exec()
  },
  editTodo (id, data) {
    return Todo
      .findOneAndUpdate({id}, data)
      .exec()
  },
  addTodo (data) {
    return Todo
      .create(data)
  },
  delTodo (id) {
    return Todo
      .findOneAndRemove({id})
      .exec()
  }
}
