// 


const mongoose = require('mongoose')


const {Schema} = mongoose


const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png'},
  baker: {type: String, enum: {
    values: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe'],
    message: "{VALUE} is not a valid baker"
  }}
  })




  //helper methods

  //instance method
  breadSchema.methods.getBakedBy = function(){
    return `${this.name} was baked with love by ${this.baker}`
  }

  //static method

  breadSchema.statics.findBakersOtherBreads = function(bakersName){
    return this.find({baker: bakersName})
  }


const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread;