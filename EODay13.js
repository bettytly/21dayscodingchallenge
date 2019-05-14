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

function powerOn(){
 ship.powerOn = 'true';
}

function countModules(){
  return availableModules.length;
}

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

calibrateX();
resetLARRY();

// loadModule(FindLifeSupportModule());
loadModule(findModuleIndex('life-support'));
loadModule(findModuleIndex('propulsion'));
loadModule(findModuleIndex("navigation"));
loadModule(findModuleIndex('communication'));

setMessage();
activateBeacon();
