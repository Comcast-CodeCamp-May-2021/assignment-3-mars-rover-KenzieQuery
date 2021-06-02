const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// describe("Rover class", function() {
// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
// However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function() {

  // it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
  //   expect( function() { new Rover();}).toThrow(new Error('Message name required.'));
  // });

  it("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover(2697);
    // console.log(rover.position);
    expect(rover.position).toEqual(2697);
    expect(rover.mode).toEqual("Normal");
    expect(rover.generatorWatts).toEqual(110);
  })  //Test 7 tests each property with an individual expect statements (passes)

  it("response returned by receiveMessage contains name of message", function() {
    let commands = [new Command('STATUS_CHECK','Awaiting Commands'), new Command('MOVE', 20)];
    let message = new Message('Another message!', commands);
    let rover = new Rover(123456);
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual(message.name);
    // console.log(response);
    //console.log(commands);
    //expect(message.commands).toEqual(commands);
  }); //Test 8 passes


//   

// 7 tests here!
// Test 9
// it ("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
//   let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
//   let message = new Message('Test message with two commands', commands);
//   let rover = new Rover(98382);    // Passes 98382 as the rover's position.
//   let response = rover.receiveMessage(message);
//   expect(response.message).toEqual(message.name)
// });  

// Test 10
it ("responds correctly to status check command", function(){
  let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  let message = new Message('Test what', commands);
  let rover = new Rover(123456);    // Passes 123456 as the rover's position.
  let response = rover.receiveMessage(message); //roverStatus object describing the current state of the rover object --- mode, generatorWatts, and position.
  // console.log(response.results[0].roverStatus);
  // console.log(response.results[0].roverStatus.mode);
  // console.log(response.results[0].roverStatus.generatorWatts);
  // console.log(response.results[0].roverStatus.position);
  let roverStatus = response.results[0].roverStatus;
  expect(roverStatus.mode).toEqual(rover.mode);
  expect(roverStatus.generatorWatts).toEqual(rover.generatorWatts);
  expect(roverStatus.position).toEqual(rover.position);
  expect(response.results[0].completed).toEqual(true);
  // console.log(rover.receiveMessage(message).results);
  // console.log(response.results);
  // console.log(roverStatus.position);
});  

// a.	For the STATUS_CHECK command, receiveMessage(message).results includes a roverStatus object describing the current state of the rover object --- mode, generatorWatts, and position. The test should check each of these for accuracy.
// b.	See the Rover Command Types table for more details.


// Test 11
// "responds correctly to mode change command".
// a.	The test should check the completed property and rover mode for accuracy.
// b.	The rover has two modes that can be passed a values to a mode change command, 'LOW_POWER' and 'NORMAL'.

// Test 12
// "responds with false completed value when attempting to move in LOW_POWER mode".
// a.	The test should check the completed property for accuracy and confirm that the rover position did not change.
// b.	Use the Rover Modes table for guidance on how to handle move commands in different modes.

// Test 13
// "responds with position for move command".
// a.	A MOVE command will update the rover's position with the position value in the command.

});
