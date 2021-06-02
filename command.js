// Command: A type of object containing a commandType property. commandType is one of the given strings in the table below. Some commandTypes are coupled with a value property, but not all. Every Command object is a single instruction to be delivered to the rover.
// Command is already written for you and you do not need to modify it to write passing tests. Open up and examine the file command.js.
class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 
 }
 
 module.exports = Command;