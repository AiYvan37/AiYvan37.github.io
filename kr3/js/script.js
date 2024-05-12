function calculate() {
    var operand1 = parseFloat(document.getElementById('op1').value);
    var operand2 = parseFloat(document.getElementById('op2').value);
    var operator = document.getElementById('operator').value;
    var result;
  
    switch(operator) {
      case 'add':
        result = operand1 + operand2;
        break;
      case 'subtract':
        result = operand1 - operand2;
        break;
      case 'multiply':
        result = operand1 * operand2;
        break;
      case 'divide':
        if (operand2 !== 0) {
          result = operand1 / operand2;
        } else {
          result = 'Dividing by zero!';
        }
        break;
      default:
        result = 'Unknown operator';
    }
  
    document.getElementById('res').innerHTML = 'Результат: ' + result;
  }
  
  function displayHelp(data) {
    var helpContent = document.getElementById('content');
    helpContent.innerHTML = `
      <h3>${data.name}</h3>
      <p>${data.description}</p>
      <img src="${data.image_name}" alt="${data.name}">
    `;
  }
  
  document.getElementById('log-button').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'log.json', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        displayHelp(data);
        var operand1 = parseFloat(document.getElementById('op1').value);
        var operand2 = parseFloat(document.getElementById('op2').value);

        if (!isNaN(operand1) && !isNaN(operand2)) {
            document.getElementById('res').innerHTML = 'Error: Please enter values for only one operand.';
            return;
        }

        if (operand1 <= 0 || operand2 <= 0 || (isNaN(operand1) && isNaN(operand2))) {
          document.getElementById('res').innerHTML = 'Error: Operand must be greater than 0.';
          return;
        }
  
        var value = operand1 || operand2;
        var result = Math.log(value);
        document.getElementById('res').innerHTML = 'Result: ' + result.toFixed(4);
      }
    };
    xhr.send();
  });
  
  
  
  document.getElementById('sin-button').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'sin.json', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        displayHelp(data);
        var operand1 = parseFloat(document.getElementById('op1').value);
        var operand2 = parseFloat(document.getElementById('op2').value);
        
        if (!isNaN(operand1) && !isNaN(operand2)) {
          document.getElementById('res').innerHTML = 'Error: Please enter values for only one operand.';
          return;
        }

        var degrees = operand1 || operand2;
        var result = Math.sin(degrees * Math.PI / 180); 
        document.getElementById('res').innerHTML = 'Result: ' + result.toFixed(4);
      }
    };
    xhr.send();
  });
  
  document.getElementById('tan-button').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'tan.json', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        displayHelp(data);
        var operand1 = parseFloat(document.getElementById('op1').value);
        var operand2 = parseFloat(document.getElementById('op2').value);
        
        if (!isNaN(operand1) && !isNaN(operand2)) {
          document.getElementById('res').innerHTML = 'Error: Please enter values for only one operand.';
          return;
        }
  
        var degrees = operand1 || operand2;
        var result = Math.tan(degrees * Math.PI / 180); 
        document.getElementById('res').innerHTML = 'Result: ' + result.toFixed(4); 
      }
    };
    xhr.send();
  });
  