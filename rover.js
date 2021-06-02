// Rover: An object representing the mars rover. This class contains information on the rover's position, operating mode, and generatorWatts. It also contains a function, receiveMessage that handles the various types of commands it receives and updates the rover's properties.
// Rover receives a message object, updates its properties from the message, and returns the results.
class Rover{
  constructor(position) {
    this.position = (position); //position is a number representing the rover's position.
    this.mode = 'Normal'; 
    this.generatorWatts = 110;
  }
    // Updates certain properties of the rover object
    // receiveMessage(message){ // message is a Message object
  receiveMessage(messageObject){
    let response = {
      message: messageObject.name, 
      results: []
    }
    for(let i=0; i<messageObject.commands.length; i++){
      if(messageObject.commands[i].commandType === 'STATUS_CHECK'){ // messageObject.commands[0] is equal to an object that is at position 0 of the      commands array
        // in the test case, that is the object new Command('MODE_CHANGE', 'MOVE');
        let responseObject = {
          completed: true, 
          roverStatus: {
            mode: this.mode, 
            generatorWatts: this.generatorWatts, 
            position: this.position
          }
        };
        response.results.push(responseObject);
      };
    };
    return response;
  };







//if the commandtype is STATUS_CHECK in a command in the commands array, then add in this object: 
// {
//   completed: true, 
//   roverStatus: {
//     roverMode[: 'NORMAL',
//     roverGeneratorWatts: 110, 
//     roverPosition: 87382098
//     }
// }
// to results array


      //Message object
      //results: resultsArray[]
      //resultsArray: an array of results. Each element in the array is an object that corresponds to one Command in message.commands.
      
      // let roverStatus = {};
      //   roverStatus["position"] = this.position;
      //   roverStatus["mode"] = this.mode;
      //   roverStatus["generatorWatts"] = this.generatorWatts;
    
    // if/else statement might go here. 
    
//OUTPUT object: 
// This object is an example output based on the EXAMPLE code block above. Given those inputs (commands array, message object, rover object), this will be the response from your receiveMessage method! Come back to this once you have read

// {
//    message: 'Test message with two commands', //<=== this test 7 is only testing that you are creating a message property in OUTPUT object created in receiveMessage (HINT: you'll want to use OBJECT LITERAL SYNTAX. You don't need to use a class to create this new OUTPUT OBJECT in this method)
//    results: [ // this is the results array property
//       {// this is the object at index 0 of this results array (response.results[0])
//          completed: true 
//       },
//       {// this is the object at index 1 of this results array (response.results[1])
//          completed: true, 
//          roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 } // this is the roverStatus object INSIDE this object at response.results[1]
//       }
//    ]
// }

//         return {
//       message: messageObject.name,
//       results: resultsArray
//     }
//   }
}
module.exports = Rover;



// let messageObject = new Rover("This string is the value of testProperty.");  // input is some object (in the case of the receiveMessage method, it is specifically a message object)
// let response = messageObject.receiveMessage(roverInputObject);  // output is an object with 1 property that matches the first property of our inputted object
// console.log(response);
    //an array of results. Each element in the array is an object that corresponds to one Command in message.commands.
  //returns message(first property,second property) // Returns an object containing at least two properties:

// let newResponse = messageObject.receiveMessage(messageObject);
//   } 
// }





    // for(let commandObject of messageObject.commands) {
    //   let pushTarget = commandObject;
    //   if(commandObject.commandType === "STATUS_CHECK") {
    //     pushTarget = {}
    //     pushTarget["completed"] = true;
    //     let roverStatus = {};
    //     roverStatus["position"] = this.position;
    //     roverStatus["mode"] = this.mode;
    //     roverStatus["generatorWatts"] = this.generatorWatts;
    //     pushTarget["roverStatus"] = roverStatus;