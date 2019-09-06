var mongoose = require('mongoose')
var Schema = mongoose.Schema
var moment = require('moment')

var ArticleSchema = new Schema({
  title: String,
  text: String,
  data: String
})

ArticleSchema.methods.setData = function () {
  this.data = moment().format("YYYY-MM-DD HH:mm:ss")
}

module.exports = mongoose.model('ArticleModel', ArticleSchema)