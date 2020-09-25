var input = document.querySelectorAll('[type="radio"]');

for (var i = 0; i < input.length; i++) {
    input[i].disabled = true;
    input[i].checked = false;
}