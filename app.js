var events = require('events')
var util = require('util')

var Person = function(name){
    this.name= name
}

util.inherits(Person, events.EventEmitter)

var james = new Person('james')
var mary = new Person('mary')
// var stuff = require("./stuff")

var people = [james,mary]

people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name + " said:" + mssg)
    })
})

james.emit('speak', 'hey dudes')
mary.emit('speak', 'curry chahiye')
// console.log(stuff.counter([1,23,4]))