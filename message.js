// Message: A Message object has a name and contains several Command objects. Message is responsible for bundling the commands from mission control and delivering them to the rover.
// 1.	This class builds an object with two properties. constructor(name, commands)
// a.	name is a string that is the name of the message.
// b.	commands is an array of Command objects.
// Example
// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
class Message {
    constructor(name, commands) {
      this.name = name;
      if (!name) {
        throw Error("Message name required.");
     }
      this.commands = commands;
    }
    
} 

module.exports = Message;
