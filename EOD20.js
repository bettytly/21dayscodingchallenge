  // Previously given Global Objects
  var navigation = {
      x: -2,
      y: 4,
      z: 7,
      speed: "raaaaid"
    };

    var ship = {
      powerOn: false,
      modules: [],
      antenna: {
        active: false
      }
    };

    var radio = {
      range: {
        low: 88,
        high: 108,
      },
      frequency: 0,
      message: "Bugs are cool.",
      beacon: false
    };
  

// Day 1: Write a function called powerOn() to change the 'powerOn' property of the ship object from false to true
function powerOn(){
 ship.powerOn = 'true';
}

// Day 2: Write a function called countModules() to reveal the number of modules there are to choose from
// availableModules array, each module an object, with four properties: name stored as a string, size stored as an integer, enabled and essential stored as a boolean
function countModules(){
  return availableModules.length;
}

// Day 3: Write a function called countEssential() to count the number of modules in the availableModules array with the essential flag set as true
function countEssential(){
  var count = 0;
  for (i=0; i <availableModules.length; i++){
    if (availableModules[i].essential){
      count++;
    }
  }
  return count;
}

/* Day 4: Write a function called loadModules(index), once receiving the index parameter, will:
- set the modules enabled flag to true
- load the corresponding module from the availableModules array to the ship's module property
*/
function loadModule(index) { 
  availableModules[index].enabled = 'true';
  ship.modules.push(availableModules[index]);
}

// Day 5: Write a function called findModuleIndex(name) that returns the index of the module given the name of the module
// Use this function to load the 'propulsion' and 'life-support' module into the ship's system
function findModuleIndex(name){
  for (i=0; i<availableModules.length; i++){
    if(availableModules[i].name === name){
      return i;
    }
  }
}

/* Finding Module index in ship's array
function findShipModuleIndex(name){
  for (i = 0; i < ship.modules.length; i++){
    if (ship.modules[i].name === name){
      return i;
    }
  }
}

function FindLifeSupportModule(){
  for (i=0; i<availableModules.length; i++){
    if (availableModules[i].name = 'life-support'){
      return i;
    }
  }
}
*/

// Day 7: Write a function called resetLarry() to prompt Larry to quack ten times to break out of his loop, LARRY.quack() has been provided
function resetLARRY(){
  for (i = 0; i < 10; i++){
    LARRY.quack();
  }
}

// Day 9: Write a function called setMessage() to set the message property on the radio to be the JSON version of the navigation object
// JSON.stringify is a built-in function on JavaScript that will take in an object and turns it into a string
function setMessage(){
  radio.message = JSON.stringify(navigation);
}

// Day 10: Write a function called activateBeacon() that will set the beacon property to true
function activateBeacon(){
  radio.beacon = 'true';
}

// Day 11: Write a function called setFrequency() that will set the frequency property on the radio using the formula: lower end plus high end, and the total divided by 2
function setFrequency(){
  radio.frequency = (radio.range.low + radio.range.high)/2
}

// Day 12: Write a function called initialize() that will set the navigation's x, y, z values to 0
function initialize(){
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

/* Day 13: Write a function called calibrateX() that will
- Loop from 1-12, call the built-in checkSignal() and assign the result to a variable called signal
- Ensure the signal variable is not undefined
- If defined then set the navigation's x property to that value
*/
function calibrateX(){
  for (i = 0; i < 12; i++){
   var signal = checkSignal();
   if (typeof signal === 'number'){
   navigation.x = signal;
   }
  }
}

// Day 14: Write two functions called calibrateY() and calibrate Z() that will loop from 1 to 60 and follow the same procedures as calibrateX()
function calibrateY(){
  for (i = 0; i < 60; i++){
   var signal = checkSignal();
   if (typeof signal === 'number'){
   navigation.y = signal;
   }
  }
}

function calibrateZ(){
  for (i = 0; i < 60; i++){
   var signal = checkSignal();
   if (typeof signal === 'number'){
   navigation.z = signal;
   }
  }
}

// Day 15: Write a function called calibrate() which can be called at any time that will calibrate X, Y, and Z axes
function calibrate(){
  calibrateX();
  calibrateY();
  calibrateZ();
}

// Day 16: Write a function called setSpeed(speed) that will take in a string parameter and set the speed in the navigation object
// parseInt is a built-in JavaScript function that will take in a string and return an integer
function setSpeed(speed){
  var temp = parseInt(speed);
  if (temp >= 0){
    navigation.speed = temp;
  }
}

// Day 17: Write a function called activateAntenna() that will set the active property on the antenna to be true
function activeAntenna(){
  ship.antenna.active = 'true';
}

// Day 18: Write a function called sendBroadcast() that will call the built-in broadcast() function 100 times
function sendBroadcast(){
  for (i = 0; i < 100; i++){
    broadcast();
  }
}

/* Day 19: Write a function called configureBroadcast() that needs to do the following:
- Set the frequency on the radio
- Set the antenna to active
- Send the announcement
*/
function configureBroadcast(){
  setFrequency();
  activeAntenna();
  sendBroadcast();
}

// Day 20: Write a function called decodeMessage(message) that takes in a coded message and changes numbers back to their respective vowels and return the decoded message
// Sample Message: "th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l."
// .replace() is a built-in JavaScript method, /g represents global targets 
function decodeMessage(message){
  let myStr = message;
  myStr = myStr.replace(/1/g, 'i');
  myStr = myStr.replace(/2/g, 'u');
  myStr = myStr.replace(/3/g, 'e');
  myStr = myStr.replace(/4/g, 'a');
  myStr = myStr.replace(/5/g, 'y');
  myStr = myStr.replace(/0/g, 'o');
  return myStr;
}


// Calling the functions below
resetLARRY();

// loadModule(FindLifeSupportModule());
loadModule(findModuleIndex('life-support'));
loadModule(findModuleIndex('propulsion'));
//Day 6: Load the navigation module using the same method as Day 5, as above. 
loadModule(findModuleIndex("navigation"));
//Day 8: Load the communication module using the same method as Day 6, as above
loadModule(findModuleIndex('communication'));

setMessage();
activateBeacon();
configureBroadcast();
