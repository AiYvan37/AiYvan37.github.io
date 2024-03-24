(function(window) {
  var speakWord = "Hello";
  function speakHello(name) {
    console.log(speakWord + " " + name);
  }
  window.speakHello = speakHello;
})(window);