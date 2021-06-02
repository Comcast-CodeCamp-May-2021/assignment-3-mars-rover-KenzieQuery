const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
// This class builds an object with two properties. constructor(commandType, value)
// commandType is a string that represents the type of command. We will go over the details of the types when we get to the Rover class and tests. At this time, note that a command type will be one of the following: 'MODE_CHANGE', 'MOVE', or 'STATUS_CHECK'.
// To peek ahead at the full functionality of these types, refer to Command Types table.
// value is a value related to the type of command.

describe("Command class", function() {

  it("throws error if a command type is NOT passed into the constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

  it("constructor sets command type", function() {
    let command = new Command('STATUS_CHECK');
    expect(command.commandType).toEqual('STATUS_CHECK');
  });

  it("constructor sets a value passed in as the 2nd argument", function() {
    let command = new Command('MOVE', 20);
    expect(command.value).toEqual(20);
  });

});