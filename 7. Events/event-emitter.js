
const events = require("events");

// RequestSender in NodeJS

var EventEmitter = events.EventEmitter;

// Step 1: Create Event Emitter
var newEvent = new EventEmitter();

// Step 2: Subscribe to event
newEvent.on('data', ()=>{
    console.log("Event is called/emitted");
});

// Step 3: Emit event;
newEvent.emit('data');