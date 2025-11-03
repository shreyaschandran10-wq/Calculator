
function display(val) {
    document.getElementById('result').value += val;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}

function deleteChar() {
    var value = document.getElementById('result').value;
    document.getElementById('result').value = value.substr(0, value.length - 1);
}
