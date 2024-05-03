// variant = (10 % 2) + 1 = 1

let array = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100)); 
}
array.sort((a, b) => b - a); 

document.write("<p>Відсортований масив: " + array.join(", ") + "</p>");

document.write('<label for="widthSelect">Ширина:</label>');
document.write('<select id="widthSelect">');
const widths = ["30px", "50px", "70px"];
widths.forEach(width => {
    document.write('<option value="' + width + '">' + width + '</option>');
});
document.write('</select>');

document.write('<button onclick="generateElement()">Згенерувати</button>');
document.write('<div id="generatedElement"></div>');

function generateElement() {
    const select = document.getElementById("widthSelect");
    const width = select.value;
    const color = "red";
    const height = "30px";
    const div = '<div style="background-color: ' + color + '; width: ' + width + '; height: ' + height + '; margin-top: 20px;"></div>';
    document.getElementById("generatedElement").innerHTML = div;
    document.getElementById("generatedElement").insertAdjacentHTML('afterend', '<button onclick="moveUp()">Посунути уверх</button>');
    document.getElementById("generatedElement").insertAdjacentHTML('afterend', '<button onclick="moveDown()">Посунути вниз</button>');
}

function moveUp() {
    const div = document.getElementById("generatedElement");
    const marginTop = parseInt(div.style.marginTop || 0);
    div.style.marginTop = (marginTop - 20) + "px";
}

function moveDown() {
    const div = document.getElementById("generatedElement");
    const marginTop = parseInt(div.style.marginTop || 0);
    div.style.marginTop = (marginTop + 20) + "px";
}