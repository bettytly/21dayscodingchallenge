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

//Day 3: Write a function called countEssential() to count the number of modules in the availableModules array with the essential flag set as true
function countEssential(){
  var count = 0;
  for (i=0; i <availableModules.length; i++){
    if (availableModules[i].essential){
      count++;
    }
  }
  return count;
}

// Finding Module Index in availableModules array
function findModuleIndex(name){
  for (i=0; i<availableModules.length; i++){
    if(availableModules[i].name === name){
      return i;
    }
  }
}

// Finding Module index in ship's array
function findShipModuleIndex(name){
  for (i = 0; i < ship.modules.length; i++){
    if (ship.modules[i].name === name){
      return i;
    }
  }
}

/* function FindLifeSupportModule(){
  for (i=0; i<availableModules.length; i++){
    if (availableModules[i].name = 'life-support'){
      return i;
    }
  }
}*/

/* Day 4: Write a function called loadModules(index), once receiving the index parameter, will:

*/
function loadModule(index) { 
  availableModules[index].enabled = 'true';
  ship.modules.push(availableModules[index]);
}

function resetLARRY(){
  for (i = 0; i < 10; i++){
    LARRY.quack();
  }
}

function setMessage(){
  radio.message = JSON.stringify(navigation);
}

function activateBeacon(){
  radio.beacon = 'true';
}

function setFrequency(){
  radio.frequency = (radio.range.low + radio.range.high)/2
}

function initialize(){
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

function calibrateX(){
  for (i = 0; i < 12; i++){
   var signal = checkSignal();
   if (typeof signal === 'number'){
   navigation.x = signal;
   }
  }
}

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

function calibrate(){
  calibrateX();
  calibrateY();
  calibrateZ();
}

function setSpeed(speed){
  var temp = parseInt(speed);
  if (temp >= 0){
    navigation.speed = temp;
  }
}

function activeAntenna(){
  ship.antenna.active = 'true';
}

function sendBroadcast(){
  for (i = 0; i < 100; i++){
    broadcast();
  }
}

function configureBroadcast(){
  setFrequency();
  activeAntenna();
  sendBroadcast();
}

configureBroadcast();

resetLARRY();

// loadModule(FindLifeSupportModule());
loadModule(findModuleIndex('life-support'));
loadModule(findModuleIndex('propulsion'));
loadModule(findModuleIndex("navigation"));
loadModule(findModuleIndex('communication'));

setMessage();
activateBeacon();
