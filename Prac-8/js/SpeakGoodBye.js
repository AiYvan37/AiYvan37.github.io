(function(window) {
    var speakWord = "Good Bye";
    function speakGoodbye(name) {
      console.log(speakWord + " " + name);
    }
    window.speakGoodbye = speakGoodbye;
  })(window);