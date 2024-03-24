var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

var scriptHello = document.createElement('script');
scriptHello.src = 'js/SpeakHello.js';
document.head.appendChild(scriptHello);

var scriptGoodbye = document.createElement('script');
scriptGoodbye.src = 'js/SpeakGoodBye.js';
document.head.appendChild(scriptGoodbye);

function greet(namesArray) {
  namesArray.forEach(function(name) {
    if (name.charAt(0).toLowerCase() === 'j') {
      speakGoodbye(name);
    } else {
      speakHello(name);
    }
  });
}

greet(names);

// additional functionality 
function additionalSelection(namesArray) {

    var selectedNames = namesArray.filter(function(name) {
        return name.charAt(name.length - 1).toLowerCase() === 'a';
    });

    console.log("Names ending with 'a':");
    console.log(selectedNames);
}

additionalSelection(names);