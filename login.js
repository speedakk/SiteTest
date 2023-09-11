function input() {
    const Name = document.getElementById('result-Name').value;
    const Password = document.getElementById('result-Password').value;

    localStorage = setItem('NAME', Name);
    localStorage = setItem('PASSWORD', Password);

    return;
}