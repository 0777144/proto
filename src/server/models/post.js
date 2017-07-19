//import mongoose, {Schema, model} from 'mongoose'
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {type: 'String', required: true},
  entrance: {type: 'String', required: true},
  sourceContent: {type: 'String', required: true},
  content: {type: 'String', required: true},
  slug: {type: 'String', required: true},
  cuid: {type: 'String', required: true},
  createdAt: {type: 'Date', default: Date.now, required: true},
  updatedAt: {type: 'Date', default: Date.now, required: true},
})

export default mongoose.model('Post', postSchema)
