function submitForm() {
    var username = document.getElementById('username').value || 'Анонім';
    var email = document.getElementById('email').value || 'Не вказано';
    var meal = document.querySelector('input[name="meal"]:checked')?.value || 'Не вказано';
    var food = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(e => e.value).join(', ') || 'Нічого';
    var comment = document.getElementById('comment').value || 'Не вказано';
    var result = username + ' (' + email + ') з’їв на ' + meal + ' ' + food + ' та залишив такий коментар: “' + comment + '”';
    document.getElementById('result').innerText = result;
}